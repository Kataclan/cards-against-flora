import { call, put, all, take } from 'redux-saga/effects';

import * as appActions from '../app/app-actions';
import * as decksActions from '../decks/decks-actions';
import * as cardsActions from '../cards/cards-actions';

import { Actions as DeckActions } from '../decks/decks-types';
import { Actions as CardActions } from '../cards/cards-types';

// Trigger fetching data actions
function* fetchInitialData() {
  yield all([put(decksActions.fetchDecksRequest()), put(cardsActions.fetchCardsRequest())]);
}

// Wait until all fetching data actions are completed (including errors)
export function* watchInitialData() {
  yield all([
    take([DeckActions.FETCH_DECKS_SUCCESS, DeckActions.FETCH_DECKS_ERROR]),
    take([CardActions.FETCH_CARDS_SUCCESS, CardActions.FETCH_CARDS_ERROR]),
  ]);
}

// Call init app on saga load
export function* AppSaga() {
  yield put(appActions.startInitApp());
  yield call(fetchInitialData);
  yield call(watchInitialData);
  yield put(appActions.finishInitApp());
}
