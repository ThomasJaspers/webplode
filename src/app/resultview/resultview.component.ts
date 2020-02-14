import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../shared/interfaces/player';

@Component({
  selector: 'app-resultview',
  templateUrl: './resultview.component.html',
  styleUrls: ['./resultview.component.scss']
})
export class ResultviewComponent implements OnInit {

  @Input() numberOfMoves: number;
  @Input() activePlayer: Player;
  @Input() gameRunning: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
