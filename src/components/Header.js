import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
	<header>
		<h1>CommApp</h1>
		<NavLink to="/" activeClassName="is-active" exact={true}>
			Quick-Phrase
		</NavLink>
		<NavLink to="/create" activeClassName="is-active">
			Add Topic
		</NavLink> 
		<NavLink to="/help" activeClassName="is-active">
			Help
		</NavLink>
	</header>
);

export default Header;
