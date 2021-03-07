import React from 'react';
import SearchForm from './SearchForm';
import '../styles/components/navigation.css';

const Navigation = () => {
	return (
		<nav id="app-nav" className="app-nav">
			<div className="nav-item brand-item">
				<h1 className="brand-name">Marvel</h1>
			</div>
			<div className="nav-item search-item">
				<SearchForm />
			</div>
		</nav>
	);
};

export default Navigation;
