import styles from './InfoBar.module.scss';
const InfoBar = () =>
{
    return(
        <div className={styles.container}>
            <div className={styles.info_holder}>
                <div className={styles.poke_details}>
                    <p className={styles.poke_number}>No.001</p>
                    <p className={styles.poke_name}>Ditto</p>
                    <p className={styles.poke_type}>Bird Pokémon</p>
                </div>
                <hr className={styles.line}/>
            </div>
        </div>
    )
} 

export default InfoBar;