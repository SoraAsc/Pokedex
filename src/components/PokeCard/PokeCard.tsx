import styles from './PokeCard.module.scss';

import StarUnfav from '../../assets/imgs/star_unfav.svg';
import StarFav from '../../assets/imgs/star_fav.svg';
import { ReducedPoke } from '../../interfaces/PokeInterface';

const PokeCard = (props: ReducedPoke) =>
{
    return(
        <div className={styles.container}>
            <div className={styles.card_sub}>
                <img className={styles.card_image} src={props.artwork_image_url} alt="Pokémon Image" />
                <div className={styles.card_details}>
                    <p className={styles.card_number}>{"No."+("000"+props.id).slice(-4)}</p>
                    <p className={styles.card_name}>{props.name}</p>
                </div>
                <img className={styles.star} src={StarUnfav} alt="Star Favorite Image" />
            </div>
        </div>
    )
}
export default PokeCard;