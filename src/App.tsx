import { ThemeContext } from './contexts/theme-context';

import Header from './components/Header/Header';
import { useState } from 'react';

import styles from './App.module.scss'
import InfoBar from './components/InfoBar/InfoBar';
import PokeList from './components/PokeList/PokeList';
import { dummyPoke, Poke } from './interfaces/PokeInterface';
import PokeDetails from './components/PokeDetails/PokeDetails';

function App() {
  const [theme, setTheme] = useState('light');
  const [selectedPoke, setSelectedPoke] = useState<Poke>(dummyPoke);
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={`theme-${theme}`}>
        <div className={styles.App}>     
          <Header/>
          <PokeList selePoke={{poke: selectedPoke, setPoke: setSelectedPoke}} />
          <InfoBar poke={selectedPoke}/>
          <PokeDetails poke={selectedPoke}/>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
