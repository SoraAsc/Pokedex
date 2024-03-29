import React from "react";
import { FilterProperties } from "../enums/PokeEnum";
import { ElementsTypeName } from "../types/PokeTypes";

export interface IFilter {
  name: FilterProperties;
  state: boolean;
}

export interface IReducedPoke {
  id: number;
  name: string;
  artwork_image_url: pokeSkinsType;
}

// type pokeRarityState = [normal: string,]
type pokeSkinsType = [
  normal_url: string | undefined,
  shiny_url: string | undefined
];

export interface IPoke extends IReducedPoke {
  url: string;
  default_image_url: pokeSkinsType;
  home_image_url: pokeSkinsType;
  dream_world_image_url: pokeSkinsType;
  showdown_image_url: pokeSkinsType;
  poke_genus: string | undefined;
  weight: number;
  height: number;
  types: IPokeType[];
  flavor_text: string | undefined;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    ["special-attack"]: number;
    ["special-defense"]: number;
    speed: number;
  };
  abilities: { ability: { name: string } }[];
}

export interface IReducedPokeAPI {
  name: "string";
  url: string;
}

export interface IPokeAPI extends IReducedPokeAPI {
  id: number;
  weight: number;
  height: number;
  sprites: { front_default: string; front_shiny: string; other: Iimage };
  types: IPokeType[];
  species: { name: string; url: string };
  stats: { base_stat: number; stat: { name: string; url: string } }[];
  abilities: { ability: { name: string } }[];
}

interface Iimage {
  front_default: string;
  front_shiny: string;

  // back_default: string;
  // back_shiny: string

  // front_female: string;
  // front_shiny_female: string;

  // back_female: string;
  // back_shiny_female: string;

  ["official-artwork"]: Iimage;
  home: Iimage;
  ["dream_world"]: Iimage;
  ["showdown"]: Iimage;
}

export interface IPokeType {
  type: { name: ElementsTypeName; url: string };
}

export interface IPokeSpeciesAPI {
  genera: { genus: string; language: { name: string; url: string } }[];
  flavor_text_entries: {
    flavor_text: string;
    language: { name: string; url: string };
    version: { name: string; url: string };
  }[];
}

export interface IImageOptions<T> {
  name: String;
}

export const dummyPoke: IPoke = {
  url: "https://pokeapi.co/api/v2/pokemon/1/",
  default_image_url: [
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
  ],
  artwork_image_url: [
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",
  ],
  home_image_url: [
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
  ],
  dream_world_image_url: [
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    undefined,
  ],
  showdown_image_url: [
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
  ],
  id: 1,
  name: "Bulbasaur",
  poke_genus: "Seed Pokémon",
  height: 7,
  weight: 69,
  types: [
    { type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" } },
    { type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" } },
  ],
  flavor_text:
    "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.",
  stats: {
    hp: 45,
    attack: 49,
    defense: 49,
    "special-attack": 65,
    "special-defense": 65,
    speed: 45,
  },
  abilities: [
    { ability: { name: "Overgrow" } },
    { ability: { name: "Chlorophyll" } },
  ],
};
