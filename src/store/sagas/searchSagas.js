import * as actions from '../actions/index';
import * as api from '../../apis/api';
import { put, call } from 'redux-saga/effects';

export function* searchSaga(action) {
	try {
		yield put(actions.loadingCharacters());
		let response;

		if (action.searchTerm) {
			response = yield call(api.searchCharacters, action.searchTerm);
		}

		yield put(actions.searchCharactersSuccess(response.data.data.results));
	} catch (err) {
		yield put(actions.searchCharactersFail());
	}
}
