import React from 'react';
import './Header.css';
import logo from '../assets/holberton-logo.jpg';

function Header(){
	return (
		<header className="Header">
			<img src={logo} className="Header-logo" alt="logo" />
			<h1>School dashboard</h1>
		</header>
	);
}

export default Header;