import { useContext} from 'react';
import MultipleSelect from '../MultipleSelect/MultipleSelect';
import TextInput from '../TextInput/TextInput';
import { ThemeContext } from '../../contexts/theme-context';

import MoonIcon from '../../assets/imgs/moon.svg';
import SunIcon from '../../assets/imgs/sun.svg';

import styles from './Header.module.scss';

const Header = () => 
{
    const { theme, setTheme } = useContext(ThemeContext);
    const handleThemeChange = () => {
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
    };

    return(
        <header className={styles.container}>
            <h1 className={styles.poke_title}>Pokémon</h1>
            <TextInput/>
            <MultipleSelect/>
            <img onClick={handleThemeChange} src={theme === 'light' ? MoonIcon : SunIcon} alt={`Button Icon ${!theme ? 'Night' : 'Light'} Mode`}/>
        </header>
    );
}

export default Header;
