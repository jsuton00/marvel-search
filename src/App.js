import React from 'react';
import { useSelector } from 'react-redux';
import Bookmarks from './components/Bookmarks';
import Navigation from './components/Navigation';
import SearchResults from './components/SearchResults';
import './styles/app.css';

const App = () => {
	const searchTerm = useSelector((state) => state.characters.searchTerm);

	return (
		<div id="app" className="app">
			<header className="header">
				<Navigation />
			</header>
			<main className="main">
				<div className="main-content">
					{searchTerm.length > 0 ? <SearchResults /> : <Bookmarks />}
				</div>
			</main>
		</div>
	);
};

export default App;
