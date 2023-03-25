import { useState } from 'react'

import styles from './CustomToggle.module.scss'

const CustomToggle = (props: {name: string}) =>
{
    return(
        <div className={styles.container}>
            <p className={styles.text}>{"✓ " + props.name}</p>
        </div>
    )
}

export default CustomToggle