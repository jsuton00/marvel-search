export const compareList = (arr, item) => {
	let storedList = arr;
	let itemId = item;

	if (storedList.length > 0 && itemId) {
		return storedList.some((b) => b.id === itemId);
	}
};
