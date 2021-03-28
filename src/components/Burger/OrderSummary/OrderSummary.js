import React from "react";
import Aux from "../../../hoc/Auxiliary";

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
    </Aux>
  );
}
