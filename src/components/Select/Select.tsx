import styles from './Select.module.scss';
import ArrowIcon from '../../assets/imgs/arrow.svg';
import { MouseEvent, useState } from 'react';
import { ImageOptions } from '../../types/PokeTypes';
import { ImageStateAsProps } from '../../interfaces/PokeInterface';

const Select = (props: {imageURL: ImageStateAsProps}) =>
{
    const options: ImageOptions[] = ["Artwork", "Home", "Default", "Dream World"];
    const [isOptionsMenuOpened, setIsOptionsMenuOpened] = useState<boolean>(false);
    const [optionSelected, setOptionSelected] = useState<ImageOptions>("Artwork")
    function HandleFilterChange(e: MouseEvent<HTMLLabelElement>)
    {
        setOptionSelected((e.target as HTMLFormElement).htmlFor as ImageOptions)
        props.imageURL.setImageOption((e.target as HTMLFormElement).htmlFor as ImageOptions)
        setIsOptionsMenuOpened(false)
    }
    return(
        <div className={styles.container}>
            <div onClick={() => setIsOptionsMenuOpened(!isOptionsMenuOpened)} className={styles.select_container}>
                <p className={styles.select_text}>{optionSelected}</p>
                <img className={`${styles.select_image} ${isOptionsMenuOpened ? '' : styles.hideOptMenu}`} alt='Select Arrow Icon' src={ArrowIcon}/>
            </div>
            <div className={`${styles.options_container} ${isOptionsMenuOpened ? '' : styles.hideOptMenu}`}>
                {options.map( k =>
                    <div key={k}>
                        <label onClick={HandleFilterChange} className={styles.option_text} htmlFor={k}>{k}</label>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Select;