import './TextInput.css';
import SearchIcon from '../../assets/imgs/SearchIcon.svg';
const TextInput = () =>
{
    return(
        <div className='text_input_container'>
            <input className='text_zone' type={'text'} placeholder={"Search..."}/>
            
            
        </div>
    )
}

export default TextInput;