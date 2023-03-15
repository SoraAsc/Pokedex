
import styles from './CustomButton.module.scss';
const CustomButton = (props: {onClick: () => void}) =>
{
    return(
        <div onClick={props.onClick} className={styles.container}>
            <p>MORE...</p>
        </div>
    )
}

export default CustomButton;