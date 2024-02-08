import { ElementsType } from "../../../enums/PokeEnum";
import { IPokeType } from "../../../interfaces/PokeInterface";

const PokeType = (props: { styles: CSSModuleClasses; t: IPokeType }) => {
  return (
    <div className={props.styles.boxInfo}>
      <img
        className={props.styles.image}
        style={{
          background: ElementsType[props.t.type.name]
            ? ElementsType[props.t.type.name].color
            : "red",
        }}
        src={
          ElementsType[props.t.type.name]
            ? ElementsType[props.t.type.name].imageURL
            : ""
        }
        alt="Element Image"
      />
      <p className={props.styles.value}>{props.t.type.name}</p>
    </div>
  );
};

export default PokeType;
