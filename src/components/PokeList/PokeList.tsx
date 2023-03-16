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
    const loadMore = () =>
    {
        if(!isLoadingMore)
        {
            setIsLoadingMore(true)
            getPokeList(offset).then(result => 
            {
                console.log(offset)
                setPokeList([...pokeList, ...result])
                setOffset(offset + 10)
                setIsLoadingMore(false)                
            })
        }
    }

    useEffect( () => {
        getPokeList(0, 50).then(result => setPokeList(result))
        setOffset(50)
        setIsLoadingMore(false)
        props.selePoke.setPoke(dummyPoke)        
    }, [])

    return(
        <div className={styles.container}>
            <div className={styles.card_holder}>
                {
                pokeList.map((p) => 
                    <PokeCard poke={p} key={p.id} onClick={handleClick} is_selected={p.id == props.selePoke.poke.id}/>
                )
                }
                <CustomButton onClick={loadMore} isLoading={isLoadingMore}/>                
            </div>
        </div>
    )
}

export default PokeList;