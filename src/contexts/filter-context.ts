import { createContext } from "react";

interface IFilterContextProps
{
    filterPokeSearchName: string,
    filterTypeNames: string[],
    setFilterPokeSearchName: (name: string) => void,
    setFilterTypeNames: (filterName: string[]) => void,
}

export const FilterContext = createContext<IFilterContextProps>({
    filterPokeSearchName: "",
    filterTypeNames: [],
    setFilterPokeSearchName: () => {},
    setFilterTypeNames: () => {},
})