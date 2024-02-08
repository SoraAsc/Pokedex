import {
  IFilter,
  IPoke,
  IPokeAPI,
  IPokeSpeciesAPI,
  IReducedPokeAPI,
} from "./../interfaces/PokeInterface";
const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const TYPE_URL = "https://pokeapi.co/api/v2/type/";

export async function getPokeList(
  offset: number = 0,
  limit: number = 10
): Promise<IPoke[]> {
  const response = await fetch(
    BASE_URL + "?limit=" + limit + "&offset=" + offset
  );
  const data: { count: number; results: IReducedPokeAPI[] } =
    await response.json();
  return await Promise.all(
    data.results.map(async (result: IReducedPokeAPI) => getPoke(result))
  );
}

export async function getAllPokeWNameAndEleFilter(
  name: string,
  eleNames: IFilter[]
): Promise<IPoke[]> {
  const pokeList: Map<number, IPoke> = new Map();
  if (eleNames.length > 0) {
    for await (const ele of eleNames) {
      const response = await fetch(TYPE_URL + ele.name.toLocaleLowerCase());
      const data: { pokemon: { pokemon: IReducedPokeAPI }[] } =
        await response.json();
      const tempP = data.pokemon
        .filter((p) => p.pokemon.name.indexOf(name) >= 0)
        .slice(0, 20)
        .map(async (result: { pokemon: IReducedPokeAPI }) =>
          getPoke(result.pokemon)
        );
      for await (const poke of tempP) {
        pokeList.set(poke.id, poke);
      }
    }
    return await Promise.all(pokeList.values());
  }
  return getAllPokeWithName(name);
}

async function getAllPokeWithName(name: string): Promise<IPoke[]> {
  const response = await fetch(BASE_URL + "?limit=100000&offset=0");
  const data: { count: number; results: IReducedPokeAPI[] } =
    await response.json();
  const filtersPokes = data.results.filter((p: IReducedPokeAPI) =>
    p.name.includes(name)
  );
  return await Promise.all(
    filtersPokes
      .slice(0, 20)
      .map(async (result: IReducedPokeAPI) => getPoke(result))
  );
}

async function getPoke(result: IReducedPokeAPI): Promise<IPoke> {
  const pokeResponse = await fetch(result.url);
  const pokeData: IPokeAPI = await pokeResponse.json();
  const pokeSpeciesData: IPokeSpeciesAPI = await fetch(
    pokeData.species.url
  ).then((data) => data.json());
  return {
    url: pokeData.url,
    id: pokeData.id,
    name: pokeData.name,
    default_image_url: pokeData.sprites.front_default,
    artwork_image_url: pokeData.sprites.other["official-artwork"].front_default,
    home_image_url: pokeData.sprites.other.home.front_default,
    dream_world_image_url: pokeData.sprites.other["dream_world"].front_default,
    poke_genus: pokeSpeciesData.genera.find(
      (item) => item.language.name == "en"
    )?.genus,
    height: pokeData.height,
    weight: pokeData.weight,
    types: pokeData.types,
    flavor_text: pokeSpeciesData.flavor_text_entries.find(
      (x) => x.language.name == "en"
    )?.flavor_text,
    stats: {
      hp: pokeData.stats[0].base_stat,
      attack: pokeData.stats[1].base_stat,
      defense: pokeData.stats[2].base_stat,
      "special-attack": pokeData.stats[3].base_stat,
      "special-defense": pokeData.stats[4].base_stat,
      speed: pokeData.stats[5].base_stat,
    },
    abilities: pokeData.abilities,
  };
}
