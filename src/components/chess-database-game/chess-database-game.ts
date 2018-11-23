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


  constructor() {
    console.log('Hello ChessDatabaseGameComponent Component');
  }

  ngAfterViewInit() {
    var board,
      game = Chess(),
      fenEl = $('#fen_game')
    var zug = 0;
    var history;
    var repeat;

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
    }

    var updateStatus = function () {
      fenEl.html("");
      let turn = 'white';
      history = game.history();
      for (let i = 0; i < history.length; i++) {

        if (turn == 'white') {
          turn = 'black';
          fenEl.append("<span id='" + i.toString() + "'> " + (i + 1).toString() + ".)" + history[i] + "</span>");

        } else {
          turn = 'white';
          fenEl.append("<span id='" + i.toString() + "'> " + history[i] + "</span>");
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
      highlight(zug, history.length - 1);
      zug = history.length - 1;
    };

    var cfg = {
      draggable: false,
      position: 'start',
    };

    board = ChessBoard('chessDatabaseGame', cfg);

    game.load_pgn(pgn.join('\n'));
    updateStatus();
    board.position(game.fen());

    $("#back_game").click(function () {
      let zug_alt = zug;
      let zug_neu = zug - 1
      if (zug > 0) {
        zug = zug_neu;
        game.undo();
        board.position(game.fen());
        highlight(zug_alt, zug_neu);
      }
    });

    $("#backback_game").click(function () {
      let zug_alt = zug;
      zug = -1;
      game.reset();
      board.position(game.fen());
      highlight(zug_alt, -1);
    });

    $("#vor_game").click(function () {
      let zug_alt = zug;
      let zug_neu = zug + 1;
      if (zug_neu < history.length) {
        zug = zug_neu;
        game.move(history[zug_neu]);
        board.position(game.fen());
        highlight(zug_alt, zug_neu);
      }
    });

    $("#vorvor_game").click(function () {
      let zug_alt = zug;
      zug = history.length - 1;
      game.load_pgn(pgn.join('\n'));
      board.position(game.fen());
      highlight(zug_alt, zug);
    });

    $("#play_game").click(function () {
      $("#stop_game").toggle();
      $("#play_game").toggle();
      repeat = true;
      window.setTimeout(makeMove, 400);
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
          $("#stop_game").toggle();
          $("#play_game").toggle();
        }
        window.setTimeout(makeMove, 500);
      }

    }

    $("#stop_game").click(function () {
      $("#stop_game").toggle();
      $("#play_game").toggle();
      repeat = false;
    });

    $("#stop_game").hide();

  }

}
