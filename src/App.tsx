import { ThemeContext } from './contexts/theme-context';

import Header from './components/Header/Header';
import { useState } from 'react';

import styles from './App.module.scss'

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={`theme-${theme}`}>
        <div className={styles.App}>     
          <Header/>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
