import { createContext } from "react";
import { Filter } from "../types/PokeTypes";

interface IFilterContextProps
{
    filterPokeSearchName: string,
    filterTypeNames: Filter[],
    filterTypeChange: boolean,
    setFilterPokeSearchName: (name: string) => void,
    setFilterTypeNames: (filterName: Filter[]) => void,
    setFilterTypeChange: (state: boolean) => void,
}

export const FilterContext = createContext<IFilterContextProps>({
    filterPokeSearchName: "",
    filterTypeNames: [],
    filterTypeChange: false,
    setFilterPokeSearchName: () => {},
    setFilterTypeNames: () => {},
    setFilterTypeChange: () => {},
})