import { useState } from 'react'
import { ElementsType, FilterProperties } from '../../enums/PokeEnum'
import { IPoke } from '../../interfaces/PokeInterface'
import { GenOptions, ImageOptions, SelectOptions } from '../../types/PokeTypes'
import CustomImageButton from '../CustomImageButton/CustomImageButton'
import CustomToggle from '../CustomToggle/CustomToggle'
import Select from '../Select/Select'

import infoIcon from '../../assets/imgs/infoIcon.png'
import statsIcon from '../../assets/imgs/statsIcon.png'
import elementalIcon from '/elements/normal.svg'
import movesIcon from '../../assets/imgs/movesIcon.png'

import {Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip} from 'chart.js'

import { Radar } from 'react-chartjs-2'

Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip)

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
   
    const data = 
    {
        labels: ["HP", "Attack", "Defense", "Special Attack", "Special Defense", "Speed"],//Object.keys(props.poke.stats),
        datasets: [
            {
                data: Object.values(props.poke.stats),
                backgroundColor: ['rgba(255, 0, 0, 0.4)', 'rgba(0, 255, 0, 0.4)', 
                'rgba(0, 0, 255, 0.4)', "rgba(255, 255, 0, 0.4)", 'rgba(0, 255, 255, 0.4)',
                'rgba(0, 0, 0, 0.4)'],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            }
        ]
    }

    const options =
    {
        responsive: true,
        plugins: {

        },
        layout:
        {
            autoPadding: true
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
                <div className={styles.container_toolbar}>
                    <CustomImageButton image={infoIcon}/>
                    <CustomImageButton image={statsIcon}/>
                    <CustomImageButton image={elementalIcon}/>
                    <CustomImageButton image={movesIcon}/>
                </div>
                <CustomToggle name='SHINY'/>
            </div>
            <Radar data={data} options={options}/>
        </div>
    )
}

export default PokeDetails