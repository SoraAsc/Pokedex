import { Poke, PokeAPI, PokeSpeciesAPI } from './../interfaces/PokeInterface';
const BASE_URL = "https://pokeapi.co/api/v2/pokemon"; 
const SPECIES_BASE_URL = "https://pokeapi.co/api/v2/pokemon-species/"

export async function getPokeList() : Promise<Poke[]>
{
    const response = await fetch(BASE_URL + "?limit=10&offset=0");
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
                artwork_image_url: pokeData.sprites.other['official-artwork'].front_default,
                poke_genus: pokeSpeciesData.genera.find(item=> item.language.name == "en")?.genus
                //artwork_image_url: pokeData.sprites.front_default
                //artwork_image_url: pokeData.sprites.other["official-artwork"].front_default,
            };
        })
    )
    // const PokeList: Poke[] = data.results.map((result: PokeAPI, index: number) => ({
    //     id: index,
    //     name: result.name,
         
    // }))
    return pokeList;
}