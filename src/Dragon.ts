import Monster from './Monster';

export default class Dragon extends Monster {
  private _lifePointes: number;
  
  constructor() {
    super();
    this._lifePointes = 999;
  }

  get lifePoints(): number {
    return this._lifePointes;
  }
}