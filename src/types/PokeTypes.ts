import { FilterProperties } from '../enums/PokeEnum';

export type Filter =
{
    name: FilterProperties,
    state: boolean,
}

export interface IMultipleFilter
{
    [name:string]:Filter
}
export type ImageOptions = "Artwork" | "Home" | "Default" | "Dream World"; 

export type ElementsTypeName = "normal"|"fire"|"water"|"grass"|"flying"|"fighting"|"poison"|"eletric"|"bug"
