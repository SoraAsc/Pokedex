
import styles from './CustomButton.module.scss';
const CustomButton = (props: {onClick: () => void, isLoading: boolean}) =>
{
    return(
        <div onClick={props.onClick} className={`${styles.container} ${props.isLoading ? styles.hide : ''}`}>
            <p>MORE...</p>
        </div>
    )
}

export default CustomButton;