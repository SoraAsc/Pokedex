import SearchIcon from '../../assets/imgs/SearchIcon.svg';

import styles from './TextInput.module.scss';
const TextInput = () =>
{
    return(
        <div className={styles.container}>
            <input maxLength={20} className={styles.text_zone} type={'text'} placeholder={"Search..."}/>
            <img src={SearchIcon} alt="Search Icon" className={styles.text_search_icon} />
        </div>
    )
}

export default TextInput;