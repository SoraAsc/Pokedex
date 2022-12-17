import MultipleSelect from '../MultipleSelect/MultipleSelect';
import TextInput from '../TextInput/TextInput';
import './Header.css';
import MoonIcon from '../../assets/imgs/moon.svg';
import SunIcon from '../../assets/imgs/sun.svg';

import {useState} from 'react';

const Header = () => 
{
    const [nightMode, setNightMode] = useState(false);
    return(
        <header className='header_container'>
            <h1 className='poke_title'>Pokémon</h1>
            <TextInput/>
            <MultipleSelect/>
            <img src={!nightMode ? MoonIcon : SunIcon} alt={`Button Icon ${!nightMode ? 'Night' : 'Light'} Mode`}/>
        </header>
    );
}

export default Header;
