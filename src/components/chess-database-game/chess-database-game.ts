import { Component, Self } from '@angular/core';
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

  white: string = "Albert Roht";
  black: string = "Magnus Carlsen";
  key: string;
  games_played: any;

  games: any;
  constructor(private db: AngularFirestore, private alertCtrl: AlertController) {
    console.log('Hello ChessDatabaseGameComponent Component');
    db.collection('chess').doc('gameCollection1').valueChanges().subscribe(data => {
      this.games = data
    })

  }

  presentAlert(key: string) {
    let alert = this.alertCtrl.create({
      title: 'Spielinformationen',
      message: this.games[key].pgn,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  ngAfterViewInit() {

    var board,
      game = Chess(),
      fenEl = $('#fen_game'),
      notation = $('#notation');
    var zug = 0;
    var history = [];
    var repeat = false;
    var create = 0;

    //jquery has it's own this context, so self is used to call ionic context in jquery functions
    let self = this;

    var onDragStart = function (source, piece, position, orientation) {
      if (game.game_over() === true ||
        (game.turn() === 'w' && piece.search(/^b/) !== -1) ||
        (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
        return false;
      }
    };

    var onDrop = function (source, target) {
      // see if the move is legal
      var move = game.move({
        from: source,
        to: target,
        promotion: 'q' // NOTE: always promote to a queen for example simplicity
      });

      // illegal move
      if (move === null) return 'snapback';

      updateStatus();


      highlight(zug, history.length - 1);
      zug = history.length - 1;

      check_database();


    };

    // update the board position after the piece snap 
    // for castling, en passant, pawn promotion
    var onSnapEnd = function () {
      board.position(game.fen());
    };

    const parser = new PgnParser();

    // do not pick up pieces if the game is over
    // only pick up pieces for the side to move

    var highlight = function (zug_alt, zug_neu) {
      $('#' + zug_alt).removeClass('highlight');
      $('#' + zug_neu).addClass("highlight");
    }

    var scrollIntoView = function (zug) {
      if (zug != -1) {
        document.getElementById(zug).scrollIntoView(true);
      } else {
        document.getElementById("0").scrollIntoView(true);
      }
    }

    var updateStatus = function () {
      notation.html("");
      fenEl.html("");
      let turn = 'white';
      history = game.history();
      for (let i = 0; i < history.length; i++) {

        if (turn == 'white') {
          turn = 'black';
          notation.append("<ion-row class='row' id='row" + i.toString() + "'><ion-col class='col' col-2>" + (i / 2).toString() + "</ion-col> <ion-col class='col' col-5 id='" + i.toString() + "'> " + history[i] + "</ion-row>");
        } else {
          turn = 'white';
          $('#row' + (i - 1).toString()).append("<ion-col class='col' col-5 id='" + i.toString() + "'> " + history[i] + "</ion-col>");
        }

        $('#' + i.toString()).click(function () {
          game.reset();
          for (let j = 0; j <= i; j++) {
            game.move(history[j]);
          }
          board.position(game.fen());
          highlight(zug, i);
          //scrollIntoView(i)
          zug = i;
        });

      }
      //highlight(zug, -1);
      zug = - 1;
    };

    var check_database = function () {
      console.time("iteration_speed:");
      if (zug >= 0) {
        let iterations = 0;
        let games_played = []
        for (let key in self.games) {
          let tmp = self.games[key]["positions"][zug];
          if (tmp.toString() == game.fen()) {
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

    var cfg = {
      draggable: false,
      position: 'start',
    };



    board = ChessBoard('chessDatabaseGame', cfg);

    //game.load_pgn(pgn2.join('\n'));
    //game.load_pgn(pgn.join('\n'));
    //const [test] = parser.parse(game.pgn());
    //console.log(JSON.stringify(test.moves()));
    updateStatus();
    game.reset();

    $("#back").click(function () {
      let zug_alt = zug;
      let zug_neu = zug - 1
      if (zug >= 0) {
        zug = zug_neu;
        game.undo();
        board.position(game.fen());
        highlight(zug_alt, zug_neu);
      }
      repeat = false;
      check_database();
    });

    $("#backback").click(function () {
      let zug_alt = zug;
      zug = -1;
      game.reset();
      board.position(game.fen());
      highlight(zug_alt, -1);
      repeat = false;
    });

    $("#vor").click(function () {
      let zug_alt = zug;
      let zug_neu = zug + 1;
      if (zug_neu < history.length) {
        zug = zug_neu;
        game.move(history[zug_neu]);
        board.position(game.fen());
        highlight(zug_alt, zug_neu);
      }
      repeat = false;
      check_database();
    });

    $("#vorvor").click(function () {
      let zug_alt = zug;
      for (let i = zug; i < history.length - 1; i++) {
        game.move(history[i + 1]);
      }
      zug = history.length - 1;

      //game.load_pgn(pgn.join('\n'));
      board.position(game.fen());
      highlight(zug_alt, zug);
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
      board.flip();
    });

    var makeMove = function () {
      if (repeat === true) {
        let zug_alt = zug;
        let zug_neu = zug + 1;
        if (zug_neu < history.length) {
          zug = zug_neu;
          game.move(history[zug_neu]);
          board.position(game.fen());
          highlight(zug_alt, zug_neu);
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
    $("#black_input").hide();
    $("#white_input").hide();

    var uniqueId = function () {
      return 'id-' + Math.random().toString(36).substr(2, 16);
    };

    $("#edit").click(function () {
      if (create == 0) {
        let cfg_edit = {
          draggable: true,
          position: board.fen(),
          onDragStart: onDragStart,
          onDrop: onDrop,
          onSnapEnd: onSnapEnd
        };
        board = ChessBoard('chessDatabaseGame', cfg_edit);
        $("#checkmark_icon").toggle();
        $("#create_icon").toggle();
        $("#black_input").toggle();
        $("#white_input").toggle();
        $("#black_name").toggle();
        $("#white_name").toggle();
        create = 1;
      } else {
        $("#checkmark_icon").toggle();
        $("#create_icon").toggle();
        $("#black_input").toggle();
        $("#white_input").toggle();
        $("#black_name").toggle();
        $("#white_name").toggle();
        create = 0;
      }
    });

    $("#save_database").click(function () {
      let data = {};
      let positions = [];
      game.header("white", self.white, "black", self.black);
      game.reset();
      for (let i = 0; i < 10; i++) {
        game.move(history[i]);
        positions[i] = game.fen();
      }
      if (history.length > 9) {
        for (let i = 10; i < history.length; i++) {
          game.move(history[i]);
        }
      }
      self.key = uniqueId();
      data[self.key] = {
        white: self.white,
        black: self.black,
        pgn: game.pgn(),
        positions: positions
      }

      self.db.collection('chess').doc('gameCollection1').update(data).then(function () {
        console.log("document updated")
      });

    });

    

  }

}
