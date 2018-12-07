import { Component, Self, Testability } from '@angular/core';
import Chess from 'chess.js';
import ChessBoard from 'chessboardjs';
import { PgnParser } from '@chess-fu/pgn-parser';
import { AngularFirestore } from 'angularfire2/firestore';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the ChessDatabaseGameComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chess-database-game',
  templateUrl: 'chess-database-game.html'
})
export class ChessDatabaseGameComponent {

  white: string = "";
  black: string = "";
  key: string;
  games_played: any;
  game: any = Chess();
  moves: any = [];
  board: any;
  zug: number = 0;
  history: any = [];


  games: any;
  constructor(private db: AngularFirestore, private alertCtrl: AlertController) {
    console.log('Hello ChessDatabaseGameComponent Component');
    db.collection('chess').doc('gameCollection').valueChanges().subscribe(data => {
      this.games = data
    })

  }

  async presentAlert(key: string) {
    let alert = this.alertCtrl.create({
      title: 'Spielinformationen',
      message: this.games[key].pgn,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Nachspielen',
          handler: () => {
            this.white = this.games[key].white;
            this.black = this.games[key].black;
            let new_game = Chess();
            new_game.load_pgn(this.games[key].pgn)
            this.history = new_game.history()
            this.update()
          }
        }
      ]
    });
    alert.present();
  }

  async update() {
    let turn = 'white';
    for (let i = 0; i < this.history.length; i++) {

      if (turn == 'white') {
        this.moves[i / 2] = {}
        this.moves[i / 2]['white'] = this.history[i]
        turn = 'black';
      } else {
        this.moves[(i - 1) / 2]['black'] = this.history[i]
        turn = 'white';
      }
    }
    await this.delay(10)

    document.getElementById((this.zug).toString()).scrollIntoView(false);
    $('#' + this.zug).addClass("highlight");
  };

  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  position(pos: number) {
    this.game.reset();
    for (let j = 0; j <= pos; j++) {
      this.game.move(this.history[j]);
    }
    this.board.position(this.game.fen());
    $('#' + this.zug).removeClass('highlight');
    $('#' + pos).addClass("highlight");
    this.zug = pos;
    document.getElementById((pos.toString())).scrollIntoView(false);
  }

  ngAfterViewInit() {


    var repeat = false;
    var create = 0;

    //jquery has it's own this context, so self is used to call ionic context in jquery functions
    let self = this;

    var onDragStart = function (source, piece, position, orientation) {
      if (self.game.game_over() === true ||
        (self.game.turn() === 'w' && piece.search(/^b/) !== -1) ||
        (self.game.turn() === 'b' && piece.search(/^w/) !== -1)) {
        return false;
      }
    };

    var onDrop = async function (source, target) {
      // see if the move is legal
      var move = self.game.move({
        from: source,
        to: target,
        promotion: 'q' // NOTE: always promote to a queen for example simplicity
      });

      // illegal move
      if (move === null) return 'snapback';

      updateStatus();
      await self.delay(1);

      highlight(self.zug, self.history.length - 1);
      self.zug = self.history.length - 1;
      check_database();


    };

    // update the board position after the piece snap 
    // for castling, en passant, pawn promotion
    var onSnapEnd = function () {
      self.board.position(self.game.fen());
    };

    const parser = new PgnParser();

    // do not pick up pieces if the game is over
    // only pick up pieces for the side to move

    var highlight = function (zug_alt, zug_neu) {
      $('#' + zug_alt).removeClass('highlight');
      $('#' + zug_neu).addClass("highlight");
    }

    var updateStatus = function () {
      let turn = 'white';
      self.history = self.game.history();
      for (let i = 0; i < self.history.length; i++) {

        if (turn == 'white') {
          self.moves[i / 2] = {}
          self.moves[i / 2]['white'] = self.history[i]
          turn = 'black';
        } else {
          self.moves[(i - 1) / 2]['black'] = self.history[i]
          turn = 'white';
        }

      }
      //highlight(zug, -1);
      self.zug = - 1;
    };

    var check_database = function () {
      console.time("iteration_speed:");
      if (self.zug >= 0 && self.zug < 10) {
        let iterations = 0;
        let games_played = []
        for (let key in self.games) {
          let tmp = self.games[key]["positions"][self.zug];
          if (tmp.toString() == self.game.fen()) {
            console.log("game found");
            games_played.push(key);
          }
          iterations++;
        }
        self.games_played = games_played;
        console.log("iterations:", iterations);

      }
      console.timeEnd("iteration_speed:");
    };

    let cfg = {
      draggable: true,
      position: "start",
      onDragStart: onDragStart,
      onDrop: onDrop,
      onSnapEnd: onSnapEnd
    };



    self.board = ChessBoard('chessDatabaseGame', cfg);

    //game.load_pgn(pgn2.join('\n'));
    //game.load_pgn(pgn.join('\n'));
    //const [test] = parser.parse(game.pgn());
    //console.log(JSON.stringify(test.moves()));
    updateStatus();
    self.game.reset();

    $("#back").click(function () {
      let zug_alt = self.zug;
      let zug_neu = self.zug - 1
      if (self.zug >= 0) {
        self.zug = zug_neu;
        self.game.undo();
        self.board.position(self.game.fen());
        highlight(zug_alt, zug_neu);
        check_database();

      }
      repeat = false;
    });

    $("#backback").click(function () {
      let zug_alt = self.zug;
      self.zug = -1;
      self.game.reset();
      self.board.position(self.game.fen());
      highlight(zug_alt, -1);
      repeat = false;
    });

    $("#vor").click(function () {
      let zug_alt = self.zug;
      let zug_neu = self.zug + 1;
      if (zug_neu < self.history.length) {
        self.zug = zug_neu;
        self.game.move(self.history[zug_neu]);
        console.log(self.history[zug_neu])
        self.board.position(self.game.fen());
        highlight(zug_alt, zug_neu);
        check_database();
      }
      repeat = false;
    });

    $("#vorvor").click(function () {
      let zug_alt = self.zug;
      for (let i = self.zug; i < self.history.length - 1; i++) {
        self.game.move(self.history[i + 1]);
      }
      self.zug = self.history.length - 1;

      //game.load_pgn(pgn.join('\n'));
      self.board.position(self.game.fen());
      highlight(zug_alt, self.zug);
      repeat = false;
      check_database();
    });

    $("#play").click(function () {
      if (repeat == false) {
        repeat = true;
        window.setTimeout(makeMove, 400);
        $("#stop_icon").toggle();
        $("#play_icon").toggle();
      }
      else {
        repeat = false;
      }
    });

    $("#flip").click(function () {
      self.board.flip();
    });

    var makeMove = function () {
      if (repeat === true) {
        let zug_alt = self.zug;
        let zug_neu = self.zug + 1;
        if (zug_neu < self.history.length) {
          self.zug = zug_neu;
          self.game.move(self.history[zug_neu]);
          self.board.position(self.game.fen());
          highlight(zug_alt, zug_neu);
          document.getElementById((zug_neu.toString())).scrollIntoView(false);
        } else {
          repeat = false;
        }
        window.setTimeout(makeMove, 500);
      } else {
        $("#stop_icon").toggle();
        $("#play_icon").toggle();
      }

    }

    $("#stop_icon").hide();
    $("#checkmark_icon").hide();
    $("#black_name").hide();
    $("#white_name").hide();

    var uniqueId = function () {
      return 'id-' + Math.random().toString(36).substr(2, 16);
    };

    $("#save_database").click(function () {
      let save_game = Chess();
      let data = {};
      let positions = [];
      save_game.header("white", self.white, "black", self.black);
      save_game.reset();
      for (let i = 0; i < 10; i++) {
        save_game.move(self.history[i]);
        positions[i] = save_game.fen();
      }
      if (self.history.length > 9) {
        for (let i = 10; i < self.history.length; i++) {
          save_game.move(self.history[i]);
        }
      }
      self.key = uniqueId();
      data[self.key] = {
        white: self.white,
        black: self.black,
        pgn: save_game.pgn(),
        positions: positions
      }

      self.db.collection('chess').doc('gameCollection').update(data).then(function () {
        console.log("document updated")
      });

    });



  }

}
