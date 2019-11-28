import { call, put, all, take, takeEvery } from 'redux-saga/effects';

import * as appActions from '../app/app-actions';
// import * as decksActions from '../decks/decks-actions';
import * as cardsActions from '../cards/cards-actions';

// import { DecksActions as DeckActions } from '../decks/decks-types';
import { CardsActions } from '../cards/cards-types';
import { AppActions, ActionChangeCurrentTab } from './app-types';
import { replace } from 'connected-react-router';

// Trigger fetching data actions
function* fetchInitialData() {
  yield all([
    //put(decksActions.fetchDecksRequest()),
    put(cardsActions.fetchCardsRequest()),
  ]);
}

// Wait until all fetching data actions are completed (including errors)
export function* watchInitialData() {
  yield all([
    // take([DeckActions.FETCH_DECKS_SUCCESS, DeckActions.FETCH_DECKS_ERROR]),
    take([CardsActions.FETCH_CARDS_SUCCESS, CardsActions.FETCH_CARDS_ERROR]),
  ]);
}

export function* changeCurrentTab(action: ActionChangeCurrentTab) {
  yield put(appActions.changeCurrentTab(action.payload));
}

// Change tab listener
export function* watchChangeTab() {
  yield takeEvery(AppActions.CHANGE_CURRENT_TAB, changeCurrentTab);
}

// Call init app on saga load
export function* AppSaga() {
  yield put(appActions.startInitApp());
  yield call(fetchInitialData);
  yield call(watchInitialData);
  yield put(appActions.finishInitApp());
  yield put(replace('/cards'));
}
