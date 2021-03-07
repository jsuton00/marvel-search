export const saveToLocalStorage = (state) => {
	try {
		if (state.characters.storedResults) {
			const serializedState = JSON.stringify(state.characters.storedResults);
			localStorage.setItem('bookmarks', serializedState);
		}
	} catch (err) {
		console.warn(err);
	}
};

export const loadFromLocalStorage = (state) => {
	try {
		const serializedState = localStorage.getItem('bookmarks');
		if (serializedState === null) {
			return '';
		} else {
			return JSON.parse(serializedState);
		}
	} catch (err) {
		console.warn(err);
		return '';
	}
};
