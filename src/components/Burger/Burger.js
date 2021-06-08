import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

export default function Burger(props) {
	let transformedIngredients = Object.keys(props.ingredients)
		/* 
		props.ingredients è un oggetto di ingredienti => il metodo 
		Object.keys(obj) ritorna, dato un oggetto, un array conntente le varie proprietà 
		nello stesso ordine in cui si trovano nell'oggetto obj
	*/
		.map((ingKey) => {
			return [...Array(props.ingredients[ingKey])].map((_, i) => {
				return <BurgerIngredient key={ingKey + i} type={ingKey} />;
			});
			/* 
				vengono costruiti 4 array, uno per ogni proprietà, 
				ciascuno con tanti elementi (iniz. undefined) quanto è il valore della rispettiva proprietà
				per ciascuno di questi array viene ritornato l'ingrediente corrispondenete 
				(switch case sul type passato = proprietà = ingrediente )
			*/
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		});
	/* 
			i 4 array vengono poi ridotti in uno solo 
			in cui ogni ingrediente corrisponde a un oggetto
			se non sono stati inseriti ingredienti l'array è vuoto
			e con il controllo sotto avverto di inserirne
		*/
	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Il panino è vuoto, metti degli ingredienti</p>;
	}
	return (
		<div className='burger'>
			<BurgerIngredient type='bread-top' /> {/* parte di pane sopra */}
			{transformedIngredients} {/* ingredienti dinamici */}
			<BurgerIngredient type='bread-bottom' /> {/* parte di pane sotto */}
		</div>
	);
}
