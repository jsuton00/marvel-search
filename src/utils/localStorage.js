export const saveToLocalStorage = (state) => {
	try {
		let bookmarks;
		if (
			state.characters.storedResults &&
			state.characters.storedResults.length > 0
		) {
			bookmarks = state.characters.storedResults.map((b) => {
				return b;
			});
			const serializedState = bookmarks.length > 0 && JSON.stringify(bookmarks);
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
