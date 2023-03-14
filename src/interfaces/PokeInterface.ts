export interface ReducedPoke
{
    id: number;
    name: string;
    artwork_image_url: string; 
}

export interface Poke extends ReducedPoke
{
    url: string;
    artwork_image_url: string;
    home_image_url: string;
    dream_world_image_url: string;
    poke_genus: string,
}

export interface PokeAPI
{
    name: string,
    url: string,
    id: number,
    sprites: other,
}

export interface PokeSpeciesAPI
{
    genera: genera[]
}

interface genera
{
    genus: string,
    language: language,
}

interface language
{
    name: string,
    url: string,
}

interface other
{
    front_default: string,
    other: image,
}

interface image
{
    front_default: string,
    ["official-artwork"]: image
}

export interface PokeStateAsProps
{
    poke: Poke;
    setPoke: React.Dispatch<React.SetStateAction<Poke>>;
}

export const dummyPoke: Poke =
{
    url: "https://pokeapi.co/api/v2/pokemon/1/",
    artwork_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    home_image_url: "",
    dream_world_image_url: "",
    id: 1,
    name: "Bulbasaur",
    poke_genus: "Seed Pokémon"
}