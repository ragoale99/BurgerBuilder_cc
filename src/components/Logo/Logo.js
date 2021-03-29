import React from 'react'
import burgerLogo from "../../assets/images/burger-logo.png";
import "./Logo.css"

export default function Logo() {
	return (
		<div className="logo">
			<img src={burgerLogo} alt="logo"></img>
		</div>
	)
}
