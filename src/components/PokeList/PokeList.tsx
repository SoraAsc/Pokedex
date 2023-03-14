import { useEffect, useState } from 'react';
import { getPokeList } from '../../api/api';
import { dummyPoke, Poke, PokeStateAsProps } from '../../interfaces/PokeInterface';
import CustomButton from '../CustomButton/CustomButton';
import PokeCard from '../PokeCard/PokeCard';

import styles from './PokeList.module.scss';
const PokeList = (props: {selePoke: PokeStateAsProps}) =>
{
    const [pokeList, setPokeList] = useState<Poke[]>([]);

    const handleClick = (poke_id: number) => 
    {
        props.selePoke.setPoke(pokeList.find(item => item.id == poke_id) || dummyPoke)
    }

    useEffect( () => {
        // getPokeList().then(result => setPokeList(pokeList.concat(result)));
        
        getPokeList().then(result => setPokeList(result));
        props.selePoke.setPoke(dummyPoke)
        
    }, []);
    return(
        <div className={styles.container}>
            <div className={styles.card_holder}>
                {
                    pokeList.map((p) => 
                        <PokeCard poke={p} key={p.id} onClick={handleClick}/>
                    )
                }
                <CustomButton/>
            </div>
            
        </div>
    )
}

export default PokeList;