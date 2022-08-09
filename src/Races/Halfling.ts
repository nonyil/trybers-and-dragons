import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static numberOfHalfling = 0;
    
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.numberOfHalfling += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.numberOfHalfling;
  }
}