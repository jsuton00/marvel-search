import axios from 'axios';
import { API_KEY, hashValue, timeStamp } from '../utils/apiConfig';

export const searchCharacters = async (searchTerm) => {
	return await axios.get(
		`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchTerm}&ts=${timeStamp}&apikey=${API_KEY}&hash=${hashValue}`,
	);
};
