type EnergyType = 'mana' | 'stamina';

export interface Energy {
  
  type_: EnergyType;
  amount: number;
  
}

export default Energy;
export { EnergyType };