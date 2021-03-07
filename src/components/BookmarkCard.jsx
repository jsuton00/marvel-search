import React from 'react';
import { generateImgPath } from '../utils/generateImgPath';

const BookmarkCard = (props) => {
	const { characterId, characterName, characterImage } = props;
	return (
		<div id={`bookmark-card-${characterId}`} className="bookmark-card">
			<img
				src={generateImgPath(
					characterImage.path,
					'landscape_large',
					characterImage.extension,
				)}
				alt={characterName}
				className="bookmark-card-image"
			/>
			<div className="bookmark-card-body">
				<h5 className="bookmark-card-title">{characterName}</h5>
			</div>
		</div>
	);
};

export default BookmarkCard;
