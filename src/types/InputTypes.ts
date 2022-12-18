import { FilterProperties } from './../enums/PokeEnum';

export type Filter =
{
    name: FilterProperties,
    state: boolean,
}

export interface IFilter
{
    [name:string]:Filter
}
