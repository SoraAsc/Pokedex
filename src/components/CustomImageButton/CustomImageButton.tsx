import { useState } from 'react'

import styles from './CustomImageButton.module.scss'



const CustomImageButton = (props: {image: string}) =>
{
    return(
        <div className={styles.container}>
            <img src={props.image} alt="Image Button" />
        </div>
    )
}

export default CustomImageButton