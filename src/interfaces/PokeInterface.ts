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
}

export interface PokeAPI
{
    name: string,
    url: string,
    id: number,
}