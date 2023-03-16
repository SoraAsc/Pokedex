import { Poke, PokeAPI, PokeSpeciesAPI } from './../interfaces/PokeInterface';
const BASE_URL = "https://pokeapi.co/api/v2/pokemon"; 
const SPECIES_BASE_URL = "https://pokeapi.co/api/v2/pokemon-species/"

export async function getPokeList(offset: number = 0, limit: number = 10) : Promise<Poke[]>
{
    const response = await fetch(BASE_URL + "?limit="+limit+"&offset="+offset);
    const data = await response.json();
    const pokeList: Poke[] = await Promise.all(
        data.results.map(async (result: PokeAPI) => 
        {
            const pokeResponse = await fetch(result.url)
            const pokeData: PokeAPI = await pokeResponse.json()
            const pokeSpeciesData: PokeSpeciesAPI = await fetch(SPECIES_BASE_URL + pokeData.id)
                .then(data => data.json())
            return {
                id: pokeData.id,
                name: pokeData.name,
                default_image_url: pokeData.sprites.front_default,
                artwork_image_url: pokeData.sprites.other['official-artwork'].front_default,
                home_image_url: pokeData.sprites.other.home.front_default,
                dream_world_image_url: pokeData.sprites.other["dream_world"].front_default,
                poke_genus: pokeSpeciesData.genera.find(item=> item.language.name == "en")?.genus,
                height: pokeData.height,
                weight: pokeData.weight,
                types: pokeData.types,
            };
        })
    )
    return pokeList;
}