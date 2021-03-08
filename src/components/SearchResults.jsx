import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/index';
import Characters from './Characters';
import '../styles/components/searchResults.css';
import { useLocalStorage } from '../hooks/useBookmarks';

const SearchResults = () => {
	const dispatch = useDispatch();
	const characters = useSelector(
		(state) => state.characters.filteredCharacters,
	);
	const characterId = useSelector((state) => state.characters.characterId);
	const storedResults = useSelector((state) => state.characters.storedResults);
	const [bookmarks, setBookmarks] = useLocalStorage('bookmarks', storedResults);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (characterId) {
				dispatch(actions.addToList(characterId));
			}
		});
		return () => {
			clearTimeout(timer);
		};
	}, [characterId, dispatch]);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (storedResults) {
				if (storedResults.length > 0) {
					setBookmarks(storedResults);
				}
			}
		});

		return () => {
			clearTimeout(timer);
		};
	}, [setBookmarks, storedResults]);

	return (
		<div id="search-results-container" className="search-results-container">
			{characters.length > 0 &&
				characters.map((char, index) => {
					return (
						<Characters
							key={index}
							characterId={char.id}
							characterName={char.name}
							characterImage={char.thumbnail}
							selectedCharacter={storedResults.some((b) => b.id === char.id)}
							bookmarkedCharacter={bookmarks.some((b) => b.id === char.id)}
							selectCharacter={() => dispatch(actions.selectCharacter(char.id))}
						/>
					);
				})}
		</div>
	);
};

export default SearchResults;
