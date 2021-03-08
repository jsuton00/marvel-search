import { combineReducers } from 'redux';
/* import bookmarkReducer from './bookmarks'; */
import charactersReducer from './characters';

const rootReducer = combineReducers({
	characters: charactersReducer,
	/* bookmarks: bookmarkReducer, */
});

export default rootReducer;
