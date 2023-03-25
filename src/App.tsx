import { ThemeContext } from './contexts/theme-context';

import Header from './components/Header/Header';
import { useState } from 'react';

import styles from './App.module.scss'
import InfoBar from './components/InfoBar/InfoBar';
import PokeList from './components/PokeList/PokeList';
import { dummyPoke, IFilter, IPoke } from './interfaces/PokeInterface';
import PokeDetails from './components/PokeDetails/PokeDetails';
import { FilterContext } from './contexts/filter-context';

function App() {
  const [theme, setTheme] = useState('light');
  const [selectedPoke, setSelectedPoke] = useState<IPoke>(dummyPoke); //In the future change to Context
  const [filterPokeSearchName, setFilterPokeSearchName] = useState<string>("")
  const [filterTypeNames, setFilterTypeNames] = useState<IFilter[]>([])
  const [filterTypeChange, setFilterTypeChange] = useState(false)
  
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={`theme-${theme}`}>
        <div className={styles.App}>     
          <FilterContext.Provider value={{ filterPokeSearchName, filterTypeNames, filterTypeChange,
             setFilterPokeSearchName, setFilterTypeNames, setFilterTypeChange }}>
            <Header/>
            <PokeList selePoke={{value: selectedPoke, setValue: setSelectedPoke}} />
          </FilterContext.Provider>
          <InfoBar poke={selectedPoke}/>
          <PokeDetails poke={selectedPoke}/>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
