import ArrowIcon from "../../assets/imgs/arrow.svg";
import { MouseEvent, useState } from "react";
import { SelectOptions } from "../../types/PokeTypes";

import styles from "./Select.module.scss";
import { IStateAsProps } from "../../interfaces/UtilsInterface";

const Select = (props: {
  selectedOpt: IStateAsProps<SelectOptions>;
  options: SelectOptions[];
}) => {
  const [isOptionsMenuOpened, setIsOptionsMenuOpened] =
    useState<boolean>(false);
  const [optionSelected, setOptionSelected] = useState<SelectOptions>(
    props.selectedOpt.value
  );
  function HandleFilterChange(e: MouseEvent<HTMLLabelElement>) {
    setOptionSelected((e.target as HTMLFormElement).htmlFor as SelectOptions);
    props.selectedOpt.setValue(
      (e.target as HTMLFormElement).htmlFor as SelectOptions
    );
    setIsOptionsMenuOpened(false);
  }
  return (
    <div className={styles.container}>
      <div
        onClick={() => setIsOptionsMenuOpened(!isOptionsMenuOpened)}
        className={styles.select_container}
      >
        <p className={styles.select_text}>{optionSelected}</p>
        <img
          className={`${styles.select_image} ${
            isOptionsMenuOpened ? "" : styles.hideOptMenu
          }`}
          alt="Select Arrow Icon"
          src={ArrowIcon}
        />
      </div>
      <div
        className={`${styles.options_container} ${
          isOptionsMenuOpened ? "" : styles.hideOptMenu
        }`}
      >
        {props.options.map((k) => (
          <div key={k}>
            <label
              onClick={HandleFilterChange}
              className={styles.option_text}
              htmlFor={k}
            >
              {k}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
