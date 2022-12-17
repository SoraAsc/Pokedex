import './MultipleSelect.css';
import {useState} from 'react';
const MultipleSelect = () =>
{
    const [optionsSelected, setOptionsSelected] = useState([]);
    const select_Options = [{id: 0, name: "FIRE"}, {id: 1, name: "WATER"}];
    return(
        <div className='select_container'>
            <select className='select_menu' name='filter_select'>
                {select_Options.map ( (opt) => <option key={opt.name}>{opt.name}</option>)}
            </select>
        </div>
    );
}

export default MultipleSelect;