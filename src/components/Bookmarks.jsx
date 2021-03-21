import React from 'react';
import { useSelector } from 'react-redux';
import { useLocalStorage } from '../hooks/useBookmarks';
import BookmarkCard from './BookmarkCard';
import '../styles/components/bookmarks.css';

const Bookmarks = () => {
	const storedResults = useSelector((state) => state.characters.storedResults);
	const [bookmarks] = useLocalStorage('bookmarks', storedResults);
	return (
		<>
			{bookmarks && (
				<div id="bookmark-container" className="bookmark-container">
					<h1 className="bookmark-section-title">Bookmarks</h1>
					<div className="bookmark-section-cards">
						{bookmarks.length > 0 &&
							bookmarks.map((bookmark, i) => {
								return (
									<BookmarkCard
										key={i}
										characterId={bookmark.id}
										characterName={bookmark.name}
										characterImage={bookmark.thumbnail}
									/>
								);
							})}
					</div>
				</div>
			)}
		</>
	);
};

export default Bookmarks;
