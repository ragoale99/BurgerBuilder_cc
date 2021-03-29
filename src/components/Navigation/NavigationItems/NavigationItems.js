import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import "./NavigationItems.css";

export default function NavigationItems(props) {
	return (
		<ul className="navigation-items">
			<NavigationItem link="/" active>BurgerBuilder</NavigationItem>
			<NavigationItem link="/">Checkout</NavigationItem>
		</ul>
	)
}
