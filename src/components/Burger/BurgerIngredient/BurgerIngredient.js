import React from "react";
import PropTypes from "prop-types";
import "./BurgerIngredient.css";

export default function BurgerIngredient(props) {
  let ingredient = null;
  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className="bread-bottom"></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className="bread-top">
          <div className="seeds1"></div>
          <div className="seeds2"></div>
        </div>
      );
      break;
    case "meat":
      ingredient = <div className="meat"></div>;
      break;
    case "cheese":
      ingredient = <div className="cheese"></div>;
      break;
    case "bacon":
      ingredient = <div className="bacon"></div>;
      break;
    case "salad":
      ingredient = <div className="salad"></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};
/*
	check dei tipi delle props passate a BurgerIngrediant
	controllo che il tipo della prop "type" sia una stringa
	e lo setto Required = obbligatorio
*/
