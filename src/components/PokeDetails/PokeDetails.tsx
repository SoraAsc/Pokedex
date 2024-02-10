import { useContext, useEffect, useState } from "react";
import { ElementsType } from "../../enums/PokeEnum";
import { IPoke } from "../../interfaces/PokeInterface";
import { GenOptions, ImageOptions, SelectOptions } from "../../types/PokeTypes";
import CustomImageButton from "../CustomImageButton/CustomImageButton";
import CustomToggle from "../CustomToggle/CustomToggle";
import Select from "../Select/Select";

import infoIcon from "../../assets/imgs/infoIcon.png";
import statsIcon from "../../assets/imgs/statsIcon.png";
import elementalIcon from "/elements/normal.svg";
import movesIcon from "../../assets/imgs/movesIcon.png";
import NotFoundImage from "/notFound.svg";

import {
  Chart,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  ChartData,
  ChartOptions,
} from "chart.js";

Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

import styles from "./PokeDetails.module.scss";
import { Radar } from "react-chartjs-2";
import {
  FilterElementalAttackingFactor,
  FilterElementalDefendingFactor,
} from "../../utils/ElementalUtils";
import PokeType from "./PokeType/PokeType";
import { FilterContext } from "../../contexts/filter-context";

const PokeDetails = (props: { poke: IPoke }) => {
  const imageOptions: ImageOptions[] = [
    "Artwork",
    "Home",
    "Default",
    "Dream World",
    "Showdown",
  ];
  const genOptions: GenOptions[] = ["Gen I", "Gen II", "Gen III", "Gen *"];

  const { isShiny } = useContext(FilterContext);

  const [imageOpt, setImageOpt] = useState<SelectOptions>("Artwork");
  const [genOpt, setGenOpt] = useState<SelectOptions>("Gen I");
  const [optionSelected, setOptionSelected] = useState(0);
  const getDisplayImage = () => {
    const index = isShiny.value ? 1 : 0;
    switch (imageOpt) {
      case "Home":
        return props.poke.home_image_url[index];
      case "Dream World":
        return props.poke.dream_world_image_url[index];
      case "Artwork":
        return props.poke.artwork_image_url[index];
      case "Showdown":
        return props.poke.showdown_image_url[index];
      default:
        return props.poke.default_image_url[index];
    }
  };

  const data: ChartData<"radar", number[], string> = {
    labels: Object.keys(props.poke.stats).map((item) =>
      item.replace(/-/g, " ").toUpperCase()
    ),
    datasets: [
      {
        data: Object.values(props.poke.stats),
        backgroundColor: [
          "rgba(0, 0, 0, 0.4)",
          "rgba(255, 0, 0, 1)",
          "rgba(0, 255, 0, 1)",
          "rgba(0, 0, 155, 1)",
          "rgba(155, 155, 0, 1)",
          "rgba(255, 255, 255, 1)",
        ],
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"radar"> = {
    scales: {
      r: {
        pointLabels: {
          font: { size: 0 },
        },
        angleLines: {
          display: true,
        },
        suggestedMin: 1,
        ticks: {
          backdropColor: "transparent",
          color: "transparent",
          font: { size: 0 },
        },
      },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.first_container}>
        <Select
          selectedOpt={{ value: imageOpt, setValue: setImageOpt }}
          options={imageOptions}
        />
      </div>
      <div className={styles.second_container}>
        <div className={styles.first_column}>
          <div className={styles.boxInfo}>
            <h5 className={styles.title}>H</h5>
            <p className={styles.value}>{props.poke.height / 10} M</p>
          </div>
          <div className={styles.boxInfo}>
            <h5 className={styles.title}>W</h5>
            <p className={styles.value}>{props.poke.weight / 10} KG</p>
          </div>
        </div>
        <div className={styles.poke_main_image_holder}>
          <img
            className={styles.poke_main_image}
            src={
              getDisplayImage() == undefined ? NotFoundImage : getDisplayImage()
            }
            alt="Poke Image"
          />
        </div>
        <div className={styles.first_column}>
          {props.poke.types.map((t, id) => (
            <PokeType key={id} styles={styles} t={t} />
          ))}
        </div>
      </div>
      <div className={styles.second_container}>
        <Select
          selectedOpt={{ value: genOpt, setValue: setGenOpt }}
          options={genOptions}
        />
        <div className={styles.container_toolbar}>
          <CustomImageButton
            image={infoIcon}
            onClick={() => setOptionSelected(0)}
            isSelected={optionSelected == 0}
          />
          <CustomImageButton
            image={statsIcon}
            onClick={() => setOptionSelected(1)}
            isSelected={optionSelected == 1}
          />
          <CustomImageButton
            image={elementalIcon}
            onClick={() => setOptionSelected(2)}
            isSelected={optionSelected == 2}
          />
          <CustomImageButton
            image={movesIcon}
            onClick={() => setOptionSelected(3)}
            isSelected={optionSelected == 3}
          />
        </div>
        <CustomToggle
          name="SHINY"
          onClick={() => isShiny.setValue((v) => !v)}
          isSelected={isShiny.value}
        />
      </div>
      <div
        style={{ display: `${optionSelected == 0 ? "block" : "none"}` }}
        className={styles.container_pokeInfo}
      >
        <div>
          <p style={{ fontSize: "1.2vw" }}>
            {props.poke.flavor_text?.replaceAll("", " ")}
          </p>
          <ul>
            {props.poke.abilities.map((ability) => (
              <li style={{ fontSize: "1.3vw" }} key={ability.ability.name}>
                {ability.ability.name.charAt(0).toUpperCase() +
                  ability.ability.name.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        style={{ display: `${optionSelected == 1 ? "flex" : "none"}` }}
        className={styles.container_pokeStats}
      >
        <Radar data={data} options={options} />
      </div>
      <div
        style={{ display: `${optionSelected == 2 ? "flex" : "none"}` }}
        className={styles.container_pokeElemental}
      >
        <p>Attacking</p>
        <div className={styles.second_column}>
          {Object.entries(FilterElementalAttackingFactor(props.poke.types)).map(
            (record) => (
              <div
                key={"attack_" + record[0]}
                className={styles.element}
                style={{
                  background: ElementsType[record[0]]
                    ? ElementsType[record[0]].color
                    : "red",
                }}
              >
                <img src={ElementsType[record[0]].imageURL} alt="Element" />
                <span>{record[1]}x</span>
              </div>
            )
          )}
        </div>
        <p>Defending</p>
        <div className={styles.second_column}>
          {Object.entries(FilterElementalDefendingFactor(props.poke.types)).map(
            (record) => (
              <div
                key={"defense_" + record[0]}
                className={styles.element}
                style={{
                  background: ElementsType[record[0]]
                    ? ElementsType[record[0]].color
                    : "red",
                }}
              >
                <img src={ElementsType[record[0]].imageURL} alt="Element" />
                <span>{record[1]}x</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PokeDetails;
