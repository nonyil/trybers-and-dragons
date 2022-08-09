import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static numberOfDwarves = 0;
    
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.numberOfDwarves += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.numberOfDwarves;
  }
}
