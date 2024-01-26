import { useState } from "react";
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

const PokeDetails = (props: { poke: IPoke }) => {
  const imageOptions: ImageOptions[] = [
    "Artwork",
    "Home",
    "Default",
    "Dream World",
  ];
  const genOptions: GenOptions[] = ["Gen I", "Gen II"];

  const [imageOpt, setImageOpt] = useState<SelectOptions>("Artwork");
  const [genOpt, setGenOpt] = useState<SelectOptions>("Gen I");
  const [optionSelected, setOptionSelected] = useState(0);
  function getDisplayImage() {
    switch (imageOpt) {
      case "Home":
        return props.poke.home_image_url;
      case "Dream World":
        return props.poke.dream_world_image_url;
      case "Artwork":
        return props.poke.artwork_image_url;
      default:
        return props.poke.default_image_url;
    }
  }

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
    // responsive: true,
    // font: { weight: "bold", size: 1, family: "Bungee" },
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
          // display: false,
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
            <p className={styles.value}>{props.poke.height} M</p>
          </div>
          <div className={styles.boxInfo}>
            <h5 className={styles.title}>W</h5>
            <p className={styles.value}>{props.poke.weight} KG</p>
          </div>
        </div>
        <img
          className={styles.poke_main_image}
          src={getDisplayImage()}
          alt="Poke Image"
        />
        <div className={styles.first_column}>
          {props.poke.types.map((t, id) => (
            <div key={id} className={styles.boxInfo}>
              <img
                className={styles.image}
                width={35}
                height={35}
                style={{
                  background: ElementsType[t.type.name]
                    ? ElementsType[t.type.name].color
                    : "red",
                }}
                src={
                  ElementsType[t.type.name]
                    ? ElementsType[t.type.name].imageURL
                    : ""
                }
                alt="Element Image"
              />
              <p className={styles.value}>{t.type.name}</p>
            </div>
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
          />
          <CustomImageButton
            image={statsIcon}
            onClick={() => setOptionSelected(1)}
          />
          <CustomImageButton
            image={elementalIcon}
            onClick={() => setOptionSelected(2)}
          />
          <CustomImageButton
            image={movesIcon}
            onClick={() => setOptionSelected(3)}
          />
        </div>
        <CustomToggle name="SHINY" />
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
    </div>
  );
};

export default PokeDetails;
