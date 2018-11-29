import { Component } from '@angular/core';
import Chess from 'chess.js';
import ChessBoard from 'chessboardjs';
/**
 * Generated class for the ChessDatabaseNewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chess-database-new',
  templateUrl: 'chess-database-new.html'
})
export class ChessDatabaseNewComponent {

  text: string;

  constructor() {
    console.log('Hello ChessDatabaseNewComponent Component');
    this.text = 'Hello World';
  }

  ngAfterViewInit() {
    var board,
      game = Chess(),
      statusEl = $('#status'),
      fenEl = $('#fen');
    var zug = 0;
    var history;


    // do not pick up pieces if the game is over
    // only pick up pieces for the side to move
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


    var highlight = function (zug_alt, zug_neu) {
      $('#' + zug_alt).removeClass('highlight');
      $('#' + zug_neu).addClass("highlight");
    }


    var updateStatus = function () {
      var status = '';

      var moveColor = 'White';
      if (game.turn() === 'b') {
        moveColor = 'Black';
      }

      // checkmate?
      if (game.in_checkmate() === true) {
        status = 'Game over, ' + moveColor + ' is in checkmate.';
      }

      // draw?
      else if (game.in_draw() === true) {
        status = 'Game over, drawn position';
      }

      // game still on
      else {
        status = moveColor + ' to move';

        // check?
        if (game.in_check() === true) {
          status += ', ' + moveColor + ' is in check';
        }
      }

      statusEl.html(status);
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
          let zug_alt = zug;
          highlight(zug_alt, i);
          zug = i;
        });
      }
      highlight(zug, history.length - 1);
      zug = history.length - 1;

    };

    var cfg = {
      draggable: true,
      position: 'start',
      onDragStart: onDragStart,
      onDrop: onDrop,
      onSnapEnd: onSnapEnd
    };

    board = ChessBoard('board', cfg);

    updateStatus();
    board.position(game.fen());

    $("#back").click(function () {
      if (zug >= 0) {
        zug --;
        let zug_alt = zug + 1;
        let zug_neu = zug;
        game.undo();
        board.position(game.fen());
        highlight(zug_alt, zug_neu);        
      }
    });

    $("#backback").click(function () {
      game.reset();
      board.position(game.fen());
      highlight(zug, -1);
      zug = -1;
    });


    $("#vor").click(function () {
      if (zug < history.length - 1) {
        zug++;
        let zug_alt = zug - 1;
        let zug_neu = zug;
        game.move(history[zug_neu]);
        board.position(game.fen());
        highlight(zug_alt, zug_neu);
      }
    });

    $("#vorvor").click(function () {
      let zug_alt = zug;
      let zug_neu = history.length - 1;
      while (zug < history.length - 1) {
        game.move(history[zug + 1]);
        zug++;
      }
      board.position(game.fen());
      highlight(zug_alt, zug_neu);
    });

    $("#flip").click(function () {
      board.flip();
    });
  }

}
