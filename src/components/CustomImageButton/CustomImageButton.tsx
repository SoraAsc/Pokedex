import { useState } from "react";

import styles from "./CustomImageButton.module.scss";

const CustomImageButton = (props: {
  image: string;
  onClick: () => void;
  isSelected: boolean;
}) => {
  return (
    <div className={styles.container} onClick={props.onClick}>
      <img
        className={`${props.isSelected ? styles.selected : ""}`}
        src={props.image}
        alt="Image Button"
      />
    </div>
  );
};

export default CustomImageButton;
