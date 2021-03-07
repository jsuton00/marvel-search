import * as actionTypes from './actionTypes';

export const loadingCharacters = () => ({
	type: actionTypes.LOADING_CHARACTERS,
});

export const setSearchTerm = (searchTerm) => ({
	type: actionTypes.SET_SEARCH_TERM,
	searchTerm,
});

export const searchCharacters = (searchTerm) => ({
	type: actionTypes.SEARCH_CHARACTERS,
	searchTerm,
});

export const searchCharactersFail = () => ({
	type: actionTypes.SEARCH_CHARACTERS_FAIL,
});

export const searchCharactersSuccess = (characters) => ({
	type: actionTypes.SEARCH_CHARACTERS_SUCCESS,
	characters,
});

export const selectCharacter = (characterId) => ({
	type: actionTypes.SELECT_CHARACTER,
	characterId,
});

export const addToList = (characterId) => ({
	type: actionTypes.ADD_TO_LIST,
	characterId,
});
