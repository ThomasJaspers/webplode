import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/interfaces/player';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  players: Player[];

  constructor() { }

  ngOnInit(): void {

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

  }

}
