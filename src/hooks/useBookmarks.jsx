import { useEffect, useState } from 'react';

export const useLocalStorage = (key, defaultValue) => {
	const [bookmarks, setBookmarks] = useState(
		() => JSON.parse(localStorage.getItem(key)) || defaultValue,
	);

	useEffect(() => {
		const timer = setTimeout(() => {
			localStorage.setItem(key, JSON.stringify(bookmarks));
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	}, [key, bookmarks]);

	return [bookmarks, setBookmarks];
};
