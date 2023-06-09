import { ElementsTypeName } from "../types/PokeTypes";

//Enums or Objects
export enum FilterProperties
{
    Normal = "normal",
    Fire = "fire",
    Water = "water",
    Grass = "grass",
    Flying = "flying",
    Fighting = "fighting",
    Poison = "poison",
    Electric = "electric",
    Ground = "ground",
    Rock = "rock",
    Psychic = "psychic",
    Ice = "ice",
    Bug = "bug",
    Ghost = "ghost",
    Steel = "steel",
    Dragon = "dragon",
    Dark = "dark",
    Fairy = "fairy",
}

export const ElementsType = 
{
    ["normal" as ElementsTypeName]: {name: "Normal", imageURL: "/elements/normal.svg",
        color: "radial-gradient(circle, rgba(160,162,159,1) 0%, rgba(162,173,157,1) 50%, rgba(149,156,146,1) 100%)"},
    ["fire" as ElementsTypeName]: {name: "Fire", imageURL: "/elements/fire.svg", 
        color: "radial-gradient(circle, rgba(251,166,76,1) 0%, rgba(217,139,56,1) 50%, rgba(203,133,58,1) 100%)"},
    ["water" as ElementsTypeName]: {name: "Water", imageURL: "/elements/water.svg",
        color: "radial-gradient(circle, rgba(84,157,224,1) 0%, rgba(102,159,212,1) 50%, rgba(88,150,207,1) 100%)"},
    ["grass" as ElementsTypeName]: {name: "Grass", imageURL: "/elements/grass.svg",
        color: "radial-gradient(circle, rgba(96,190,88,1) 0%, rgba(82,186,73,1) 50%, rgba(68,169,60,1) 100%)"},
    ["flying" as ElementsTypeName]: {name: "Flying", imageURL: "/elements/flying.svg", 
        color: "radial-gradient(circle, rgba(161,187,236,1) 0%, rgba(149,169,207,1) 50%, rgba(147,173,221,1) 100%)"},
    ["fighting" as ElementsTypeName]: {name: "Fighting", imageURL: "/elements/fighting.svg",
        color: "radial-gradient(circle, rgba(211,66,96,1) 0%, rgba(192,46,76,1) 50%, rgba(177,50,76,1) 100%)"},
    ["poison" as ElementsTypeName]: {name: "Poison", imageURL: "/elements/poison.svg",
        color: "radial-gradient(circle, rgba(183,99,207,1) 0%, rgba(167,105,185,1) 50%, rgba(155,71,179,1) 100%)"},
    ["electric" as ElementsTypeName]: {name: "Electric", imageURL: "/elements/electric.svg", 
        color: "radial-gradient(circle, rgba(242,217,78,1) 0%, rgba(229,204,66,1) 50%, rgba(240,212,57,1) 100%)"},
    ["ground" as ElementsTypeName]: {name: "Ground", imageURL: "/elements/ground.svg", 
        color: "radial-gradient(circle, rgba(218,125,76,1) 0%, rgba(220,117,62,1) 50%, rgba(200,110,63,1) 100%)"},
    ["rock" as ElementsTypeName]: {name: "Rock", imageURL: "/elements/rock.svg", 
        color: "radial-gradient(circle, rgba(202,187,138,1) 0%, rgba(190,173,120,1) 50%, rgba(179,165,119,1) 100%)"},
    ["psychic" as ElementsTypeName]: {name: "Psychic", imageURL: "/elements/psychic.svg", 
        color: "radial-gradient(circle, rgba(250,133,129,1) 0%, rgba(221,119,116,1) 50%, rgba(235,129,125,1) 100%)"},
    ["ice" as ElementsTypeName]: {name: "Ice", imageURL: "/elements/ice.svg", 
        color: "radial-gradient(circle, rgba(117,208,193,1) 0%, rgba(99,190,175,1) 50%, rgba(104,190,176,1) 100%)"},
    ["bug" as ElementsTypeName]: {name: "Bug", imageURL: "/elements/bug.svg", 
        color: "radial-gradient(circle, rgba(146,189,45,1) 0%, rgba(136,182,30,1) 50%, rgba(135,174,44,1) 100%)"},
    ["ghost" as ElementsTypeName]: {name: "Ghost", imageURL: "/elements/ghost.svg", 
        color: "radial-gradient(circle, rgba(95,109,189,1) 0%, rgba(80,95,180,1) 50%, rgba(83,96,175,1) 100%)"},
    ["steel" as ElementsTypeName]: {name: "Steel", imageURL: "/elements/steel.svg", 
        color: "radial-gradient(circle, rgba(86,149,163,1) 0%, rgba(84,139,151,1) 50%, rgba(79,143,157,1) 100%)"},
    ["dragon" as ElementsTypeName]: {name: "Dragon", imageURL: "/elements/dragon.svg", 
        color: "radial-gradient(circle, rgba(15,106,200,1) 0%, rgba(26,92,160,1) 50%, rgba(13,95,181,1) 100%)"},
    ["dark" as ElementsTypeName]: {name: "Dark", imageURL: "/elements/dark.svg", 
        color: "radial-gradient(circle, rgba(89,87,97,1) 0%, rgba(83,81,92,1) 50%, rgba(75,73,83,1) 100%)"},
    ["fairy" as ElementsTypeName]: {name: "Fairy", imageURL: "/elements/fairy.svg", 
        color: "radial-gradient(circle, rgba(238,144,230,1) 0%, rgba(207,132,200,1) 50%, rgba(216,122,208,1) 100%)"},
}