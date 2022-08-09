import Archetype, { Mage, Necromancer, Ranger, Warrior } from './Archetypes';
import { Energy } from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return {
      ...this._energy,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damagePoints = attackPoints - this._defense;
    if (damagePoints > 0) this._lifePoints -= damagePoints;
    if (this._lifePoints > 0) return this._lifePoints;
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    } 
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  staminaChampions(enemy: Fighter) {
    let damage = 0;
    const UltimateMagic = 5;

    const critDamage = getRandomInt(1, 10);

    if (this._race instanceof Ranger || Warrior) {
      damage += UltimateMagic;
      if (critDamage > 7) {
        enemy.receiveDamage(damage);
      }
    }
  }

  special(enemy: Fighter) {
    let damage = 0;
    const UltimateMagic = 5;

    const critDamage = getRandomInt(1, 10);
    if (this._race instanceof Mage || Necromancer) {
      damage += UltimateMagic;
      if (critDamage > 7) {
        enemy.receiveDamage(damage);
      }
    }
    this.staminaChampions(enemy);
  }
}