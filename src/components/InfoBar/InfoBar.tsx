import { Poke } from '../../interfaces/PokeInterface';
import styles from './InfoBar.module.scss';
const InfoBar = (props: {poke: Poke}) =>
{
    return(
        <div className={styles.container}>
            <div className={styles.info_holder}>
                <div className={styles.poke_details}>
                    <p className={styles.poke_number}>{"No."+("00"+props.poke.id).slice(-3)}</p>
                    <p className={styles.poke_name}>{props.poke.name.charAt(0).toUpperCase() + props.poke.name.slice(1)}</p>
                    <p className={styles.poke_type}>{props.poke.poke_genus}</p>
                </div>
                <hr className={styles.line}/>
            </div>
        </div>
    )
} 

export default InfoBar;