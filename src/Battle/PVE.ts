import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _character: Fighter;
  private _monster: (SimpleFighter)[];
  constructor(
    character: Fighter, 
    monster: (SimpleFighter)[],
  ) {
    super(character);
    this._monster = monster;
    this._character = character;
  }
 
  fight(): number {
    while (this._character.lifePoints > 0 && this._monster
      .some((player) => player.lifePoints > 0)) {
      this._character.attack(this._monster[0]);
      this._monster.forEach((player) => player.attack(this.player));
    }
    return this._character.lifePoints === -1 ? -1 : 1;
  }
}