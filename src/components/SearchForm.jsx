import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/index';
import { FaSearch } from 'react-icons/fa';

import '../styles/components/searchForm.css';

const SearchForm = () => {
	const dispatch = useDispatch();
	const searchTerm = useSelector((state) => state.characters.searchTerm);
	const searchInputRef = useRef();

	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchTerm === searchInputRef.current.value) {
				return (
					searchTerm.length > 0 &&
					dispatch(actions.searchCharacters(searchTerm))
				);
			}
		}, 800);
		return () => {
			clearTimeout(timer);
		};
	}, [dispatch, searchTerm]);
	return (
		<div id="search-form" className="search-form">
			<span id="search-icon" className="search-icon">
				<FaSearch />
			</span>
			<input
				ref={searchInputRef}
				id="search-input"
				name="search-input"
				type="text"
				placeholder="Search Marvel characters"
				className="search-input"
				onChange={(e) => dispatch(actions.setSearchTerm(e.target.value))}
				value={searchTerm}
			/>
		</div>
	);
};

export default SearchForm;
