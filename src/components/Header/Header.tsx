import {useState} from 'react';

import MultipleSelect from '../MultipleSelect/MultipleSelect';

import TextInput from '../TextInput/TextInput';
import MoonIcon from '../../assets/imgs/moon.svg';
import SunIcon from '../../assets/imgs/sun.svg';

import styles from './Header.module.scss';

const Header = () => 
{
    const [nightMode, setNightMode] = useState(false);
    return(
        <header className={styles.header_container}>
            <h1 className={styles.poke_title}>Pokémon</h1>
            <TextInput/>
            <MultipleSelect/>
            <img src={!nightMode ? MoonIcon : SunIcon} alt={`Button Icon ${!nightMode ? 'Night' : 'Light'} Mode`}/>
        </header>
    );
}

export default Header;
