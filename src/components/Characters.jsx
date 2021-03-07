import React, { useRef } from 'react';
import { generateImgPath } from '../utils/generateImgPath';
import '../styles/components/cards.css';

const Characters = (props) => {
	const {
		characterId,
		characterName,
		characterImage,
		bookmarkedCharacter,
		selectCharacter,
	} = props;

	const charCardRef = useRef();

	const handleSelect = (e) => {
		if (e.target.value === charCardRef.current.value) {
			return selectCharacter(e.target.value);
		}
	};

	return (
		<div
			ref={charCardRef}
			id={`result-card-${characterId}`}
			className={`result-card ${
				bookmarkedCharacter ? 'result-card-bookmarked' : ''
			}`}
			onClick={handleSelect}
			value={characterId}
		>
			<img
				src={generateImgPath(
					characterImage.path,
					'landscape_large',
					characterImage.extension,
				)}
				alt={characterImage}
				className="result-card-image"
			/>

			<div className="result-card-body" value={characterId}>
				<h5 className="result-card-title">{characterName}</h5>
			</div>
		</div>
	);
};

export default Characters;
