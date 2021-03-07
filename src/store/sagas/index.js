import { all, takeEvery } from '@redux-saga/core/effects';
import * as actionTypes from '../actions/actionTypes';
import { searchSaga } from './searchSagas';

export function* watchMarvel() {
	yield all([takeEvery(actionTypes.SEARCH_CHARACTERS, searchSaga)]);
}
