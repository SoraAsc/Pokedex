import { useEffect, useState, useContext } from "react";
import { getAllPokeWNameAndEleFilter, getPokeList } from "../../api/api";
import { FilterContext } from "../../contexts/filter-context";
import { dummyPoke, IPoke } from "../../interfaces/PokeInterface";
import CustomButton from "../CustomButton/CustomButton";
import PokeCard from "../PokeCard/PokeCard";

import styles from "./PokeList.module.scss";
import { IStateAsProps } from "../../interfaces/UtilsInterface";
const PokeList = (props: { selePoke: IStateAsProps<IPoke> }) => {
  const { filterPokeSearchName, filterTypeNames, filterTypeChange } =
    useContext(FilterContext);

  const [pokeList, setPokeList] = useState<IPoke[]>([]);
  const [tempPokeList, setTempPokeList] = useState<IPoke[]>([]);
  const [offset, setOffset] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isUsingFilter, setIsUsingFilter] = useState(false);
  const [filterTimeout, setFilterTimeout] = useState(-5);

  const handleClick = (poke_id: number) =>
    props.selePoke.setValue(
      pokeList.find((item) => item.id == poke_id) || dummyPoke
    );

  const loadMore = () => {
    if (!isLoadingMore) {
      setIsLoadingMore(true);
      getPokeList(offset).then((result) => {
        setTempPokeList([...pokeList, ...result]);
        setPokeList([...pokeList, ...result]);
        setOffset(offset + 10);
        setIsLoadingMore(false);
      });
    }
  };

  useEffect(() => {
    clearTimeout(filterTimeout);
    const filterTypeNamesActived = filterTypeNames.filter((x) => x.state);
    if (filterTypeNamesActived.length > 0 || filterPokeSearchName.length > 0) {
      setFilterTimeout(
        setTimeout(() => {
          getAllPokeWNameAndEleFilter(
            filterPokeSearchName.toLocaleLowerCase(),
            filterTypeNamesActived
          )
            .then((res) => {
              setIsUsingFilter(true);
              setPokeList(res);
            })
            .catch((err) => console.error(err));
        }, 500)
      );
      return () => clearTimeout(filterTimeout);
    }

    setIsUsingFilter(false);
    setPokeList(tempPokeList);
  }, [filterTypeChange, filterPokeSearchName]);

  useEffect(() => {
    getPokeList(0, 50).then((result) => {
      setTempPokeList(result);
      setPokeList(result);
    });

    setOffset(50);
    setIsLoadingMore(false);
    props.selePoke.setValue(dummyPoke);
    setIsUsingFilter(false);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.card_holder}>
        {pokeList.map((p) => (
          <PokeCard
            poke={p}
            key={p.id}
            onClick={handleClick}
            is_selected={p.id == props.selePoke.value.id}
          />
        ))}
        {!isUsingFilter ? (
          <CustomButton onClick={loadMore} isLoading={isLoadingMore} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PokeList;
