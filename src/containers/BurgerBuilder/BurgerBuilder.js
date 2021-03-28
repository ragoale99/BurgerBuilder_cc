import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../../hoc/Auxiliary";
import "./BurgerBuilder.css";

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.6,
	meat: 1.3,
	bacon: 0.8,
};

export default class BurgerBuilder extends Component {
	/* 	constructor(props) {
		super(props);
		this.state = {...}
	} */
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 2, // prezzo di deault a panino vuoto
		purchaseable: false,
		purchasing: false,
	};

	updatePurchaseState = (ingredients) => {
		//array di stringhe => le proprietà degli ingredienti
		const sum = Object.keys(ingredients)
			.map((ingKey) => {
				return ingredients[ingKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			});
		this.setState({ purchaseable: sum > 0 });
	};

	addIngredientHandler = (type) => {
		const updatedCount = this.state.ingredients[type] + 1;
		const updatedIngredients = {
			...this.state.ingredients,
		};
		updatedIngredients[type] = updatedCount;
		const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
		this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
		this.updatePurchaseState(updatedIngredients);
	};

	removeIngredientHandler = (type) => {
		if (this.state.ingredients[type] === 0) {
			return;
		}
		const updatedCount = this.state.ingredients[type] - 1;
		const updatedIngredients = {
			...this.state.ingredients,
		};
		updatedIngredients[type] = updatedCount;
		const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
		this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
		this.updatePurchaseState(updatedIngredients);
	};

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	purchcaseCancelHandler = () => {
		this.setState({ purchasing: false });
	};

	purchcaseContinueHandler = () => {
		alert("Bene, ci siamo quasi!");
	};

	render() {
		const disabledInfo = {
			...this.state.ingredients,
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		} // disabledInfo = {salad: false, meat: true ...} con true = corrisp. bottone "Togli" da disabilitare
		return (
			<Aux>
				<Modal
					show={this.state.purchasing}
					closeModal={this.purchcaseCancelHandler}>
					<OrderSummary
						ingredients={this.state.ingredients}
						cancel={this.purchcaseCancelHandler}
						continue={this.purchcaseContinueHandler}
					/>
				</Modal>
				<div className="burger-container">
					<Burger ingredients={this.state.ingredients} />
				</div>
				{/* restituisco il panino con tutti i vari ingredienti al suo interno */}
				<div className="controls-container">
					<BuildControls
						ingredientAdded={this.addIngredientHandler}
						ingredientRemoved={this.removeIngredientHandler}
						disabled={disabledInfo}
						price={this.state.totalPrice}
						purchaseable={this.state.purchaseable}
						ordered={this.purchaseHandler}
					/>
				</div>
				{/* restituisco tutti i bottoni per inserire o togliere i vari ingredienti dal panino in modo dinamico */}
			</Aux>
		);
	}
}
