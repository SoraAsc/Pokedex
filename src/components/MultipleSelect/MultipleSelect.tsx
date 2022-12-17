import {useState} from 'react';

import ArrowIcon from '../../assets/imgs/arrow.svg';

import styles from './MultipleSelect.module.scss';
const MultipleSelect = () =>
{
    const [optionsSelected, setOptionsSelected] = useState([]);
    const select_Options = [{id: 0, name: "FIRE"}, {id: 1, name: "WATER"}];
    return(
        <div className={styles.select_container}>
            <p className={styles.select_text}>Selecione</p>
            <img alt='Select Arrow Icon' src={ArrowIcon}/>
            {/* <select className='select_menu' name='filter_select'>
                {select_Options.map ( (opt) => <option key={opt.name}>{opt.name}</option>)}
            </select> */}
        </div>
    );
}

export default MultipleSelect;