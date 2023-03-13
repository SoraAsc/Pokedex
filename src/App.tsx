import { ThemeContext } from './contexts/theme-context';

import Header from './components/Header/Header';
import { useState } from 'react';

import styles from './App.module.scss'
import InfoBar from './components/InfoBar/InfoBar';
import PokeList from './components/PokeList/PokeList';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={`theme-${theme}`}>
        <div className={styles.App}>     
          <Header/>
          <PokeList/>
          <InfoBar/>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
