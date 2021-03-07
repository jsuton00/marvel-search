import { updateObject } from '../../utils/reduxUtils';
import * as actionTypes from '../actions/actionTypes';

const characters = {
	searchTerm: '',
	characters: [],
	filteredCharacters: [],
	characterId: '',
	character: '',
	selectedCharacter: '',
	storedResults: [],
	loadingCharacters: false,
	errorSearchingCharacters: false,
};

const loadingCharacters = (state, action) => {
	return updateObject(state, {
		loadingCharacters: true,
	});
};

const setSearchTerm = (state, action) => {
	return updateObject(state, {
		searchTerm: action.searchTerm,
		loadingCharacters: false,
		errorSearchingCharacters: false,
	});
};

const searchCharactersFail = (state, action) => {
	return updateObject(state, {
		loadingCharacters: false,
		errorSearchingCharacters: true,
	});
};

const searchCharactersSuccess = (state, action) => {
	return updateObject(state, {
		characters: action.characters,
		filteredCharacters: action.characters,
		loadingCharacters: false,
		errorSearchingCharacters: false,
	});
};

const selectCharacter = (state, action) => {
	return updateObject(state, {
		characterId: action.characterId,
		loadingCharacters: false,
	});
};

const addToList = (state, action) => {
	let currentList = state.storedResults;
	let selectedCharacter;
	let updatedList = [];
	let results = [];

	if (action.characterId) {
		selectedCharacter =
			state.characters.length > 0 &&
			state.characters.find((c) => c.id === action.characterId);

		if (selectedCharacter) {
			updatedList = [...currentList, selectedCharacter];
		}

		updatedList = updatedList.reduce((arr, item) => {
			if (arr[item.id]) {
				const idx = arr[item.id].findIndex((data) => data.id === item.id);
				if (idx === -1) {
					arr[item.id].push(item);
				}
			} else {
				arr[item.id] = [item];
			}

			return arr;
		}, {});

		Object.values(updatedList).forEach((item) => {
			return (results = results.concat(item));
		});

		return updateObject(state, {
			storedResults: results.length > 0 && [...results],
		});
	}
};

const charactersReducer = (state = characters, action) => {
	switch (action.type) {
		case actionTypes.SET_SEARCH_TERM:
			return setSearchTerm(state, action);
		case actionTypes.SEARCH_CHARACTERS_FAIL:
			return searchCharactersFail(state, action);
		case actionTypes.SEARCH_CHARACTERS_SUCCESS:
			return searchCharactersSuccess(state, action);
		case actionTypes.SELECT_CHARACTER:
			return selectCharacter(state, action);
		case actionTypes.ADD_TO_LIST:
			return addToList(state, action);
		case actionTypes.LOADING_CHARACTERS:
			return loadingCharacters(state, action);
		default:
			return state;
	}
};

export default charactersReducer;
