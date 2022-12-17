import SearchIcon from '../../assets/imgs/SearchIcon.svg';

import styles from './TextInput.module.scss';
const TextInput = () =>
{
    return(
        <div className={styles.text_input_container}>
            <input className={styles.text_zone} type={'text'} placeholder={"Search..."}/>
            
            
        </div>
    )
}

export default TextInput;