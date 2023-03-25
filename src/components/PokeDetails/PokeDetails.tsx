import { useState } from 'react';
import { ElementsType, FilterProperties } from '../../enums/PokeEnum';
import { IPoke } from '../../interfaces/PokeInterface';
import { GenOptions, ImageOptions, SelectOptions } from '../../types/PokeTypes';
import Select from '../Select/Select';

import styles from './PokeDetails.module.scss';

const PokeDetails = (props: {poke: IPoke}) => 
{
    const imageOptions: ImageOptions[] = ["Artwork", "Home", "Default", "Dream World"]
    const genOptions: GenOptions[] = ['Gen I', 'Gen II']

    const [imageOpt, setImageOpt] = useState<SelectOptions>("Artwork")
    const [genOpt, setGenOpt] = useState<SelectOptions>("Gen I")
    function getDisplayImage()
    {
        switch(imageOpt)
        {
            case "Home":
                return props.poke.home_image_url
            case 'Dream World':
                return props.poke.dream_world_image_url
            case 'Artwork':
                return props.poke.artwork_image_url
            default:
                return props.poke.default_image_url
        }
    }
    

    return (
        <div className={styles.container}>
            <div className={styles.first_container}>
                <Select selectedOpt={{value: imageOpt, setValue: setImageOpt}} options={imageOptions}/>
            </div>
            <div className={styles.second_container}>
                <div className={styles.first_column}>
                    <div className={styles.boxInfo}>
                        <h5 className={styles.title}>H</h5>
                        <p className={styles.value}>{props.poke.height} M</p>
                    </div>
                    <div className={styles.boxInfo}>
                        <h5 className={styles.title}>W</h5>
                        <p className={styles.value}>{props.poke.weight} KG</p>
                    </div>
                </div>
                <img className={styles.poke_main_image} src={getDisplayImage()} alt="Poke Image" />
                <div className={styles.first_column}>
                    {
                        props.poke.types.map((t, id) => 
                            <div key={id} className={styles.boxInfo}>
                                <img className={styles.image} width={35} height={35}
                                    style={{background: ElementsType[t.type.name] ? ElementsType[t.type.name].color : 'red'}}
                                    src={ElementsType[t.type.name] ? ElementsType[t.type.name].imageURL : ''} alt="Element Image" />
                                <p className={styles.value}>{t.type.name}</p>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className={styles.second_container}>
                <Select selectedOpt={{value: genOpt, setValue: setGenOpt}} options={genOptions}/>
            </div>
        </div>
    )
}

export default PokeDetails