import React from "react";
import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

export default function OrderSummary(props) {
  const ingredientsSummary = Object.keys(props.ingredients).map((ingKey) => {
    return (
      <li key={ingKey}>
        <span style={{ textTransform: "capitalize" }}>{ingKey}</span> :
        {" " + props.ingredients[ingKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Ordine</h3>
      <h4>Ingredienti:</h4>
      <ul>{ingredientsSummary}</ul>
			<Button btnType="danger" clicked={props.cancel}>CANCELLA L'ORDINE</Button>
			<Button btnType="success" clicked={props.continue}>CONTINUA</Button>
    </Aux>
  );
}
