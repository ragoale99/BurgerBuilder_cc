import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Formaggio", type: "cheese" },
  { label: "Carne", type: "meat" },
];

export default function BuildControls(props) {
  return (
    <div className="build-controls">
      <p className="price">
        <strong>Prezzo del panino: {props.price.toFixed(2)}€</strong>
      </p>
      {controls.map((control) => {
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            added={() => props.ingredientAdded(control.type)}
            removed={() => props.ingredientRemoved(control.type)}
            disabled={props.disabled[control.type]}
          />
        );
      })}
      <button
        className="order-btn"
        disabled={!props.purchaseable}
        onClick={props.ordered}
      >
        ORDINA IL PANINO
      </button>
    </div>
  );
}
