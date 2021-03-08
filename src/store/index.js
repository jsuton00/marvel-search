import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
	loadFromLocalStorage,
	saveToLocalStorage,
} from '../utils/localStorage';
import rootReducer from './reducers';
import { watchMarvel } from './sagas';

const composeEnhancers =
	process.env.NODE_ENV === 'development'
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: null || compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
	rootReducer,
	loadFromLocalStorage((state) => state.bookmarks),
	composeEnhancers(applyMiddleware(sagaMiddleware)),
);

store.subscribe(() => saveToLocalStorage(store.getState()));

sagaMiddleware.run(watchMarvel);
