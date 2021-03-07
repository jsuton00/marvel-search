export const compareList = (a, b) => {
	const arr = b;
	return arr.some((b) => b.id === a.id);
};
