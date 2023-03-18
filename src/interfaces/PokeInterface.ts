import React from "react";
import { ElementsTypeName, ImageOptions } from "../types/PokeTypes";

export interface ReducedPoke
{
    id: number;
    name: string;
    artwork_image_url: string; 
}

export interface Poke extends ReducedPoke
{
    url: string;
    default_image_url: string;
    artwork_image_url: string;
    home_image_url: string;
    dream_world_image_url: string;
    poke_genus: string | undefined,
    weight: number,
    height: number,
    types: PokeType[],
}

export interface ReducedPokeAPI
{
    name: "string",
    url: string,
}

export interface PokeAPI extends ReducedPokeAPI
{
    id: number,
    weight: number,
    height: number,
    sprites: other,
    types: PokeType[],
    species: {name: string, url: string},
}

interface PokeType
{
    type: {name: ElementsTypeName, url: string}
}

export interface PokeSpeciesAPI
{
    genera: {genus: string, language: {name: string, url: string}}[]
}

interface other
{
    front_default: string,
    other: image,
}

interface image
{
    front_default: string,
    ["official-artwork"]: image,
    home: image,
    ["dream_world"]: image,
}

export interface PokeStateAsProps
{
    poke: Poke;
    setPoke: React.Dispatch<React.SetStateAction<Poke>>;
}

export interface ImageStateAsProps
{
    imageOption: ImageOptions
    setImageOption: React.Dispatch<React.SetStateAction<ImageOptions>>;
}

export const dummyPoke: Poke =
{
    url: "https://pokeapi.co/api/v2/pokemon/1/",
    default_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    artwork_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    home_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
    dream_world_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    id: 1,
    name: "Bulbasaur",
    poke_genus: "Seed Pokémon",
    height: 7,
    weight: 69,
    types: [{type: {name: "grass", url: "https://pokeapi.co/api/v2/type/12/"}}, 
        {type: {name: "poison", url: "https://pokeapi.co/api/v2/type/4/"}}]
}