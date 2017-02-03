import {IPlayer} from './player.type.ts';

export class PlayerService {

  player1: IPlayer;
  player2: IPlayer;

  constructor() {
    let player1 = {name: "", number: 1, color: "red"};
    let player2 = {name: "", number: 2, color: "blue"};
  }

  public setPlayer1Name(name: string) {
    this.player1.name = name;
  }

  public getPlayer1Name():string {
    return this.player1.name;
  }

  public setPlayer2Name(name: string) {
    this.player2.name = name;
  }

  public getPlayer2Name():string {
    return this.player2.name;
  }
}
