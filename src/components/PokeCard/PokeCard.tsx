import styles from './PokeCard.module.scss';

import StarUnfav from '../../assets/imgs/star_unfav.svg';
import DittoTemp from '../../assets/imgs/DittoImage.png';
import StarFav from '../../assets/imgs/star_fav.svg';

const PokeCard = () =>
{
    return(
        <div className={styles.container}>
            <div className={styles.card_sub}>
                <img className={styles.card_image} src={DittoTemp} alt="Pokémon Image" />
                <div className={styles.card_details}>
                    <p className={styles.card_number}>No.001</p>
                    <p className={styles.card_name}>Ditto</p>
                </div>
                <img className={styles.star} src={StarUnfav} alt="Star Favorite Image" />
            </div>
        </div>
    )
}
export default PokeCard;