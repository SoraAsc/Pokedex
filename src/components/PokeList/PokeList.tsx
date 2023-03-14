import { useEffect, useState } from 'react';
import { getPokeList } from '../../api/api';
import { Poke } from '../../interfaces/PokeInterface';
import CustomButton from '../CustomButton/CustomButton';
import PokeCard from '../PokeCard/PokeCard';

import styles from './PokeList.module.scss';
const PokeList = () =>
{
    const [pokeList, setPokeList] = useState<Poke[]>([]);

    useEffect( () => {
        getPokeList().then(result => setPokeList(result));
        
    }, []);
    return(
        <div className={styles.container}>
            <div className={styles.card_holder}>
                {
                    pokeList.map((p) => 
                        <PokeCard id={p.id} key={p.id} name={p.name} 
                            artwork_image_url={p.artwork_image_url}/>
                    )
                }

                <CustomButton/>
            </div>
            
        </div>
    )
}

export default PokeList;