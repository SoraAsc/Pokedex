import { useEffect, useState } from 'react';
import { getPokeList } from '../../api/api';
import { dummyPoke, Poke, PokeStateAsProps } from '../../interfaces/PokeInterface';
import CustomButton from '../CustomButton/CustomButton';
import PokeCard from '../PokeCard/PokeCard';

import styles from './PokeList.module.scss';
const PokeList = (props: {selePoke: PokeStateAsProps}) =>
{
    const [pokeList, setPokeList] = useState<Poke[]>([]);
    const [offset, setOffset] = useState(0);
    const [isLoadingMore, setIsLoadingMore] = useState(false)

    const handleClick = (poke_id: number) => 
    {
        props.selePoke.setPoke(pokeList.find(item => item.id == poke_id) || dummyPoke)
    }

    const loadMore = () => { if(!isLoadingMore) {setIsLoadingMore(true);} }

    useEffect( () => {
        //getPokeList(offset).then(result => setPokeList([...pokeList, ...result]))
        getPokeList(offset).then(result => 
            {
                setPokeList([...pokeList, ...result])
                setOffset(offset + 10)
                setIsLoadingMore(false)
                
            })
    }, [isLoadingMore])

    useEffect( () => {
        getPokeList().then(result => setPokeList(result))
        setOffset(10)
        setIsLoadingMore(false)
        props.selePoke.setPoke(dummyPoke)        
    }, [])

    return(
        <div className={styles.container}>
            <div className={styles.card_holder}>
                {
                    pokeList.map((p) => 
                        <PokeCard poke={p} key={p.id} onClick={handleClick} selected_id={props.selePoke.poke.id}/>
                    )
                }
                <CustomButton onClick={loadMore}/>
                
            </div>
        </div>
    )
}

export default PokeList;