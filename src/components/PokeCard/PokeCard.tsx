import styles from './PokeCard.module.scss';

import StarUnfav from '../../assets/imgs/star_unfav.svg';
//import StarFav from '../../assets/imgs/star_fav.svg';
import { ReducedPoke } from '../../interfaces/PokeInterface';

const PokeCard = (props: {poke: ReducedPoke, onClick: (id: number) => void, is_selected: boolean}) =>
{
    return(
        <div className={`${styles.container} ${props.is_selected ? styles.selected : ''}`} 
            onClick={() => props.onClick(props.poke.id)}>
            <div className={styles.card_sub}>
                <img className={styles.card_image} src={props.poke.artwork_image_url} alt="Pokémon Image" />
                <div className={styles.card_details}>
                    <p className={styles.card_number}>{"No."+("00"+props.poke.id).slice(-3)}</p>
                    <p className={styles.card_name}>{props.poke.name}</p>
                </div>
                <img className={styles.star} src={StarUnfav} alt="Star Favorite Image" />
            </div>
        </div>
    )
}
export default PokeCard;