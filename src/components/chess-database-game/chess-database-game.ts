import { Component } from '@angular/core';
import Chess from 'chess.js';
import ChessBoard from 'chessboardjs';
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

  constructor() {
    console.log('Hello ChessDatabaseGameComponent Component');
  }

  ngAfterViewInit() {

    var board,
      game = Chess(),
      fenEl = $('#fen_game'),
      notation = $('#notation');
    var zug = 0;
    var history;
    var repeat = false;

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
    };

    // update the board position after the piece snap 
    // for castling, en passant, pawn promotion
    var onSnapEnd = function () {
      board.position(game.fen());
    };

    var pgn = ['[Event "Casual Game"]',
      '[Site "Berlin GER"]',
      '[Date "1852.??.??"]',
      '[EventDate "?"]',
      '[Round "?"]',
      '[Result "1-0"]',
      '[White "Adolf Anderssen"]',
      '[Black "Jean Dufresne"]',
      '[ECO "C52"]',
      '[WhiteElo "?"]',
      '[BlackElo "?"]',
      '[PlyCount "47"]',
      '',
      '1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4 Bxb4 5.c3 Ba5 6.d4 exd4 7.O-O',
      'd3 8.Qb3 Qf6 9.e5 Qg6 10.Re1 Nge7 11.Ba3 b5 12.Qxb5 Rb8 13.Qa4',
      'Bb6 14.Nbd2 Bb7 15.Ne4 Qf5 16.Bxd3 Qh5 17.Nf6+ gxf6 18.exf6',
      'Rg8 19.Rad1 Qxf3 20.Rxe7+ Nxe7 21.Qxd7+ Kxd7 22.Bf5+ Ke8',
      '23.Bd7+ Kf8 24.Bxe7# 1-0'];

    // do not pick up pieces if the game is over
    // only pick up pieces for the side to move

    var highlight = function (zug_alt, zug_neu) {
      $('#' + zug_alt).removeClass('highlight');
      $('#' + zug_neu).addClass("highlight");
      if (zug_neu != -1) {
        document.getElementById(zug_neu).scrollIntoView(true);
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
          zug = i;
        });

      }
      highlight(zug, -1);
      zug = - 1;
    };

    var cfg = {
      draggable: false,
      position: 'start',
    };

    

    board = ChessBoard('chessDatabaseGame', cfg);

    game.load_pgn(pgn.join('\n'));
    updateStatus();
    game.reset();

    $("#back").click(function () {
      let zug_alt = zug;
      let zug_neu = zug - 1
      if (zug > 0) {
        zug = zug_neu;
        game.undo();
        board.position(game.fen());
        highlight(zug_alt, zug_neu);
      }
      repeat = false;
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
    });

    $("#vorvor").click(function () {
      let zug_alt = zug;
      zug = history.length - 1;
      game.load_pgn(pgn.join('\n'));
      board.position(game.fen());
      highlight(zug_alt, zug);
      repeat = false;
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

    $("#create_icon").click(function () {
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
    });

    $("#checkmark_icon").click(function () {

      $("#checkmark_icon").toggle();
      $("#create_icon").toggle();
      $("#black_input").toggle();
      $("#white_input").toggle();
      $("#black_name").toggle();
      $("#white_name").toggle();

    });

  }

}
