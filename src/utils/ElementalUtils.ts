import { IPokeType } from "../interfaces/PokeInterface";
import { ElementalFactor, ElementsTypeName } from "../types/PokeTypes";

export const FilterElementalAttackingFactor = (types: IPokeType[]) => {
  const currentTypes = types.map((t) => t.type.name);
  let combinedMultipliers: Record<string, number> = {};

  // Initialized multipliers with 1
  for (const type of Object.keys(ElementalFactor) as ElementsTypeName[])
    combinedMultipliers[type] = 1;

  // Calculate the combined multipliers
  for (const t of currentTypes) {
    const multipliers = ElementalFactor[t];
    for (const targetType of Object.keys(multipliers) as ElementsTypeName[])
      combinedMultipliers[targetType] *= multipliers[targetType];
  }
  removeAllNormalEffective(combinedMultipliers);
  return combinedMultipliers;
};

// Função para obter os multiplicadores de dano que um Pokémon recebe de diferentes tipos de atacantes
export const FilterElementalDefendingFactor = (types: IPokeType[]) => {
  const currentTypes = types.map((t) => t.type.name);
  const combinedMultipliers: Record<string, number> = {};

  // Initialized multipliers with 1
  for (const type of Object.keys(ElementalFactor) as ElementsTypeName[])
    combinedMultipliers[type] = 1;

  for (const attackerType of Object.keys(
    ElementalFactor
  ) as ElementsTypeName[]) {
    let combinedMultiplier = 1;
    for (const defenderType of currentTypes) {
      const multiplier = ElementalFactor[attackerType][defenderType];
      combinedMultiplier *= multiplier;
    }
    combinedMultipliers[attackerType] = combinedMultiplier;
  }

  removeAllNormalEffective(combinedMultipliers);
  return combinedMultipliers;
};

const removeAllNormalEffective = (record: Record<string, number>) => {
  Object.entries(record).forEach(([key, value]) => {
    if (value == 1) delete record[key];
  });
};
