import React, { Component } from 'react';
// import logo from '../assets/logo.png';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<header className="header">
				<div class="">
					<nav class="navbar navbar-expand-lg navbar-light bg-light header-title">
						<a class="navbar-brand font-weight-bold" href="/">
							PROFILE PAGE
						</a>
						<button
							class="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon" />
						</button>
					</nav>
				</div>
			</header>
		);
	}
}

export default Header;
