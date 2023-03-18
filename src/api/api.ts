import { Poke, PokeAPI, PokeSpeciesAPI, ReducedPokeAPI } from './../interfaces/PokeInterface';
const BASE_URL = "https://pokeapi.co/api/v2/pokemon"; 

export async function getPokeList(offset: number = 0, limit: number = 10) : Promise<Poke[]>
{
    const response = await fetch(BASE_URL + "?limit="+limit+"&offset="+offset);
    const data: {count: number, results: ReducedPokeAPI[]} = await response.json();
    return await Promise.all(
        data.results.map(async (result: ReducedPokeAPI) => getPoke(result)))
    //return pokeList;
}

export async function getAllPokeWithName(name: string) : Promise<Poke[]>
{
    const response = await fetch(BASE_URL+ "?limit=100000&offset=0")
    const data: {count: number, results: ReducedPokeAPI[]} = await response.json()
    const filtersPokes = data.results.filter((p:ReducedPokeAPI) => p.name.includes(name))
    return await Promise.all(
        filtersPokes.slice(0, 20).map(async (result: ReducedPokeAPI) => getPoke(result)))
    //return pokeList
}

async function getPoke(result: ReducedPokeAPI) : Promise<Poke>
{
    const pokeResponse = await fetch(result.url)
    const pokeData: PokeAPI = await pokeResponse.json()
    const pokeSpeciesData: PokeSpeciesAPI = await fetch(pokeData.species.url)
        .then(data => data.json())
    return {
        url: pokeData.url,
        id: pokeData.id,
        name: pokeData.name,
        default_image_url: pokeData.sprites.front_default,
        artwork_image_url: pokeData.sprites.other['official-artwork'].front_default,
        home_image_url: pokeData.sprites.other.home.front_default,
        dream_world_image_url: pokeData.sprites.other["dream_world"].front_default,
        poke_genus: pokeSpeciesData.genera.find(item => item.language.name == "en")?.genus,
        height: pokeData.height,
        weight: pokeData.weight,
        types: pokeData.types,
    };
}