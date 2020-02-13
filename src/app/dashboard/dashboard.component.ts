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

  constructor() { }

  doMakeMove(field: Field) {

    console.log('Field Event caught ' + field.row + ' ' + field.col);

    if (field.owner === 0 || field.owner === this.activePlayer.number) {

      const fieldAfterMove = {
        ...field,
        owner: this.activePlayer.number,
        color: this.activePlayer.color,
        load: ++field.load,
      };

      this.updateBoard(fieldAfterMove);
      this.explode(fieldAfterMove);
      this.toggleActivePlayer();
    }
  }

  explode(field: Field) {
    if (field.load > field.neighbours) {
      const fieldAfterExplosion = {
        ...field,
        load: 1,
      };

      this.updateBoard(fieldAfterExplosion);
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
