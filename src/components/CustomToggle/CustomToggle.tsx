import styles from "./CustomToggle.module.scss";
const CustomToggle = (props: {
  name: string;
  onClick: () => void;
  isSelected: boolean;
}) => {
  return (
    <div className={styles.container} onClick={props.onClick}>
      <p className={`${props.isSelected ? styles.selected : styles.text}`}>
        {"✓ " + props.name}
      </p>
    </div>
  );
};

export default CustomToggle;
