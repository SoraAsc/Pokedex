import CustomButton from '../CustomButton/CustomButton';
import PokeCard from '../PokeCard/PokeCard';

import styles from './PokeList.module.scss';
const PokeList = () =>
{
    return(
        <div className={styles.container}>
            <div className={styles.card_holder}>
                <PokeCard/>
                <PokeCard/>
                <PokeCard/>
                <PokeCard/>
                <PokeCard/>
                <PokeCard/>
                <PokeCard/>
                <PokeCard/>
                <PokeCard/>
                <PokeCard/>
                <PokeCard/>
                <PokeCard/>
                <PokeCard/>
                <CustomButton/>
            </div>
            
        </div>
    )
}

export default PokeList;