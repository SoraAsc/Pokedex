import styles from "./PokeCard.module.scss";

import StarUnfav from "../../assets/imgs/star_unfav.svg";
//import StarFav from '../../assets/imgs/star_fav.svg';
import { IReducedPoke } from "../../interfaces/PokeInterface";
import { FilterContext } from "../../contexts/filter-context";
import { useContext } from "react";

const PokeCard = (props: {
  poke: IReducedPoke;
  onClick: (id: number) => void;
  is_selected: boolean;
}) => {
  const { isShiny } = useContext(FilterContext);
  return (
    <div
      className={`${styles.container} ${
        props.is_selected ? styles.selected : ""
      }`}
      onClick={() => props.onClick(props.poke.id)}
    >
      <div className={styles.card_sub}>
        <img
          className={styles.card_image}
          src={props.poke.artwork_image_url[isShiny.value ? 1 : 0]}
          alt="Pokémon Image"
        />
        <div className={styles.card_details}>
          <p className={styles.card_number}>
            {"No." +
              (props.poke.id > 99
                ? props.poke.id
                : ("00" + props.poke.id).slice(-3))}
          </p>
          <p className={styles.card_name}>{props.poke.name}</p>
        </div>
        <img
          className={styles.star}
          src={StarUnfav}
          alt="Star Favorite Image"
        />
      </div>
    </div>
  );
};
export default PokeCard;
