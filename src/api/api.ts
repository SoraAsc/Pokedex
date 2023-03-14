import { Poke, PokeAPI } from './../interfaces/PokeInterface';
const BASE_URL = "https://pokeapi.co/api/v2/pokemon"; 

export async function getPokeList() : Promise<Poke[]>
{
    const response = await fetch(BASE_URL + "?limit=10&offset=0");
    const data = await response.json();
    const pokeList: Poke[] = await Promise.all(
        data.results.map(async (result: any) => 
        {
            const pokeResponse = await fetch(result.url)
            const pokeData = await pokeResponse.json()
            return {
                id: pokeData.id,
                name: pokeData.name,
                //artwork_image_url: pokeData.sprites.front_default
                artwork_image_url: pokeData.sprites.other["official-artwork"].front_default,
            };
        })
    )
    // const PokeList: Poke[] = data.results.map((result: PokeAPI, index: number) => ({
    //     id: index,
    //     name: result.name,
         
    // }))
    return pokeList;
}