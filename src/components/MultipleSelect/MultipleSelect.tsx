import {ChangeEvent, useState} from 'react';
import { FilterProperties } from '../../enums/PokeEnum';
import { Filter, IMultipleFilter } from '../../types/PokeTypes';

import ArrowIcon from '../../assets/imgs/arrow.svg';

import styles from './MultipleSelect.module.scss';
const MultipleSelect = () =>
{
    const options: IMultipleFilter = {};
    const [isOptionsMenuOpened, setIsOptionsMenuOpened] = useState<boolean>(false);
    function HandleFilterChange(e: ChangeEvent<HTMLInputElement>)
    {
        const opt: Filter = {name: e.target.name as FilterProperties, state: e.target.checked};
        options[opt.name] = opt
    }

    return(
        <div className={styles.container}>
            <div onClick={() => setIsOptionsMenuOpened(!isOptionsMenuOpened)} className={styles.select_container}>
                <p className={styles.select_text}>Filter</p>
                <img className={`${styles.select_image} ${isOptionsMenuOpened ? '' : styles.hideOptMenu}`} alt='Select Arrow Icon' src={ArrowIcon}/>
            </div>
            <div className={`${styles.options_container} ${isOptionsMenuOpened ? '' : styles.hideOptMenu}`}>
                {(Object.keys(FilterProperties) as (keyof typeof FilterProperties)[]).map( k =>
                    <div key={k}>
                        <input onChange={HandleFilterChange} className={styles.option_check} type="checkbox" name={k} id={k} />
                        <label htmlFor={k} className={styles.option_custom_check}/>
                        <label className={styles.option_text} htmlFor={k}>{k}</label>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MultipleSelect;