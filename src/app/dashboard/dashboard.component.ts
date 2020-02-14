import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/interfaces/player';
import { Field } from '../shared/interfaces/field';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  players: Player[];
  board: Field[][];
  activePlayer: Player;
  gameRunning = true;
  numberOfMoves = 0;

  constructor() { }

  doMakeMove(field: Field) {

    if (this.gameRunning && (field.owner === 0 || field.owner === this.activePlayer.number)) {

      const fieldAfterMove = {
        ...field,
        owner: this.activePlayer.number,
        color: this.activePlayer.color,
        load: ++field.load,
      };

      this.numberOfMoves++;
      this.updateBoard(fieldAfterMove);
      this.explodeBoard();
      this.updatePlayerScores();
      this.checkGameHasEnded();
      this.toggleActivePlayer();
    }
  }

  explodeBoard() {

    let changeDetected = 1;

    while (changeDetected > 0) {
      changeDetected = 0;
      for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
          const fieldToCheck = this.board[row][col];
          changeDetected += this.explodeField(fieldToCheck);
        }
      }
    }
  }

  explodeField(field: Field): number {

    let explosionDetected = 0;

    // Check field itsself
    if (field.load > field.neighbours) {
      const fieldAfterExplosion = {
        ...field,
        load: 1,
      };

      explosionDetected = 1;
      this.updateBoard(fieldAfterExplosion);

      // Check affected fields
      this.explodeAffectedField(field.row - 1, field.col);
      this.explodeAffectedField(field.row + 1, field.col);
      this.explodeAffectedField(field.row, field.col + 1);
      this.explodeAffectedField(field.row, field.col - 1);
      this.explodeAffectedField(field.row - 1, field.col - 1);
      this.explodeAffectedField(field.row - 1, field.col + 1);
      this.explodeAffectedField(field.row + 1, field.col - 1);
      this.explodeAffectedField(field.row + 1, field.col + 1);
    }

    return explosionDetected;
  }

  explodeAffectedField(row: number, col: number) {
    if (row >= 0 && row < 8 && col >= 0 && col < 8 ) {
      const field = this.board[row][col];
      field.owner = this.activePlayer.number;
      field.color = this.activePlayer.color;
      field.load = field.load + 1;
    }
  }

  updateBoard(field: Field) {
    this.board[field.row][field.col] = field;
  }

  toggleActivePlayer() {
    if (this.activePlayer.number === 1) {
      this.activePlayer = this.players[1];
    } else {
      this.activePlayer  = this.players[0];
    }
  }

  updatePlayerScores() {
    this.players[0].score = 0;
    this.players[1].score = 0;

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if (this.board[row][col].owner === this.players[0].number) {
          this.players[0].score++;
        } else if (this.board[row][col].owner === this.players[1].number) {
          this.players[1].score++;
        }
      }
    }
  }

  checkGameHasEnded() {
    if (this.numberOfMoves > 3 && (this.players[0].score === 0 || this.players[1].score === 0)) {
      this.gameRunning = false;
    }
  }

  trackPlayer(index: number, item: Player) {
    return item.number;
  }

  ngOnInit(): void {

    this.board = new Array(8)
      .fill(0)
      .map(row => new Array(8)
        .fill(0));

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        let neighbours = 0;
        if (row === 0 && col === 0) {
          neighbours = 3;
        } else if (row === 0 && col === 7) {
          neighbours = 3;
        } else if (row === 7 && col === 0) {
          neighbours = 3;
        } else if (row === 7 && col === 7) {
          neighbours = 3;
        } else if (row === 0 || row === 7 || col === 0 || col === 7) {
          neighbours = 5;
        } else {
          neighbours = 8;
        }


        this.board[row][col] = {
          color: 'lightgrey',
          owner: 0,
          load: 0,
          row,
          col,
          neighbours,
        }
      };
    }

    this.players = [
      {
        name: 'Player 1',
        number: 1,
        color: 'red',
        score: 0,
      },
      {
        name: 'Player 2',
        number: 2,
        color: 'blue',
        score: 0,
      }
    ];

    this.activePlayer = this.players[0];

  }

}
