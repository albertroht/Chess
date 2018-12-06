import { Component } from '@angular/core';
import Chess from 'chess.js';
import ChessBoard from 'chessboardjs';
import { AngularFirestore } from 'angularfire2/firestore';
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

  games: any;

  constructor(private db: AngularFirestore) {
    console.log('Hello ChessDatabaseNewComponent Component');
    this.games = db.collection('chess').doc('gameCollection1');
  }

  ngAfterViewInit() {
    var board,
      game = Chess();
    var zug = 0;
    var history;

    var cfg = {
      draggable: true,
      position: 'start',
    };

    board = ChessBoard('board', cfg);

  }

}
