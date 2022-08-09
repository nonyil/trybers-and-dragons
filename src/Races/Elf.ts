import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static numberOfElf = 0;
    
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.numberOfElf += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.numberOfElf;
  }
}