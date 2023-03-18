import { useEffect, useState, useContext } from 'react';
import { getAllPokeWithName, getPokeList } from '../../api/api';
import { FilterContext } from '../../contexts/filter-context';
import { dummyPoke, Poke, PokeStateAsProps } from '../../interfaces/PokeInterface';
import CustomButton from '../CustomButton/CustomButton';
import PokeCard from '../PokeCard/PokeCard';

import styles from './PokeList.module.scss';
const PokeList = (props: {selePoke: PokeStateAsProps}) =>
{
    const { filterPokeSearchName } = useContext(FilterContext)
    
    const [pokeList, setPokeList] = useState<Poke[]>([]);
    const [tempPokeList, setTempPokeList] = useState<Poke[]>([])
    const [offset, setOffset] = useState(0);
    const [isLoadingMore, setIsLoadingMore] = useState(false)
    const [isUsingFilter, setIsUsingFilter] = useState(false)
    const [typeTimeout, setTypeTimeout] = useState(-5)

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
                setTempPokeList([...pokeList, ...result])                
                setPokeList([...pokeList, ...result])
                setOffset(offset + 10)
                setIsLoadingMore(false)
            })
        }
    }

    useEffect( () => {
        
        clearTimeout(typeTimeout)
        if(filterPokeSearchName.length > 0)
        {            
            setTypeTimeout( setTimeout(() => {
                getAllPokeWithName(filterPokeSearchName.toLowerCase()).then((result) => 
                {
                    setIsUsingFilter(true)
                    setPokeList(result)
                }).catch( (err) => console.error(err))
            }, 500) );
            return () => clearTimeout(typeTimeout)
        }
        else 
        {
            setIsUsingFilter(false)
            setPokeList(tempPokeList)           
        }

    }, [filterPokeSearchName])

    useEffect( () => {
        getPokeList(0, 50).then(result => { setTempPokeList(result); setPokeList(result) })
        
        setOffset(50)
        setIsLoadingMore(false)
        props.selePoke.setPoke(dummyPoke)
        setIsUsingFilter(false)      
    }, [])

    return(
        <div className={styles.container}>
            <div className={styles.card_holder}>
                {
                pokeList.map((p) => 
                    <PokeCard poke={p} key={p.id} onClick={handleClick} is_selected={p.id == props.selePoke.poke.id}/>
                )
                }
                {!isUsingFilter ? <CustomButton onClick={loadMore} isLoading={isLoadingMore}/> : ''}                
            </div>
        </div>
    )
}

export default PokeList;
