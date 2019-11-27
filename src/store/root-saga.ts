import { all, fork } from 'redux-saga/effects';
import { AppSaga } from '../features/app/app-sagas';
import { DecksSaga } from '../features/decks/decks-sagas';
import { CardsSaga } from '../features/cards/cards-sagas';

export default function* rootSaga() {
  yield all([fork(AppSaga), fork(DecksSaga), fork(CardsSaga)]);
}
