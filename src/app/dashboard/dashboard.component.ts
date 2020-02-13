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

    const fieldAfterMove = {
      ...field,
      color: 'green'
    };

    this.updateBoard(fieldAfterMove);
  }


  updateBoard(field: Field) {
    this.board[field.row][field.col] = field;
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
        this.board[row][col] = {
          color: 'black',
          owner: 0,
          load: 0,
          row,
          col,
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
