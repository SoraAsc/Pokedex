import { createContext } from "react";
import { IFilter } from "../interfaces/PokeInterface";

interface IFilterContextProps
{
    filterPokeSearchName: string,
    filterTypeNames: IFilter[],
    filterTypeChange: boolean,
    setFilterPokeSearchName: (name: string) => void,
    setFilterTypeNames: (filterName: IFilter[]) => void,
    setFilterTypeChange: (state: boolean | ((prevState: boolean) => boolean)) => void,
}

export const FilterContext = createContext<IFilterContextProps>({
    filterPokeSearchName: "",
    filterTypeNames: [],
    filterTypeChange: false,
    setFilterPokeSearchName: () => {},
    setFilterTypeNames: () => {},
    setFilterTypeChange: () => {},
})