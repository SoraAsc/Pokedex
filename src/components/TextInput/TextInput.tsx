import { useContext } from 'react';
import SearchIcon from '../../assets/imgs/SearchIcon.svg';
import { FilterContext } from '../../contexts/filter-context';

import styles from './TextInput.module.scss';
const TextInput = () =>
{
    const { setFilterPokeSearchName } = useContext(FilterContext)
    
    return(
        <div className={styles.container}>
            <input onChange={(e) => setFilterPokeSearchName(e.target.value)} 
                maxLength={20} className={styles.text_zone} type={'text'} placeholder={"Search..."}/>
            <img src={SearchIcon} alt="Search Icon" className={styles.text_search_icon} />
        </div>
    )
}

export default TextInput;