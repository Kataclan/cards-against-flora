import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import * as actions from './cards-actions';
import { Actions as ActionTypes, Card, CardTypes } from './cards-types';

const fakeError = true;
const cardsFake:Card[] = [
  { uid: '1', type: CardTypes.Fresh, fillingTxt: 'FreshCard 1'},
  { uid: '2', type: CardTypes.Fresh, fillingTxt: 'FreshCard 2'},
  { uid: '3', type: CardTypes.Fresh, fillingTxt: 'FreshCard 3'},
  { uid: '4', type: CardTypes.Fresh, fillingTxt: 'FreshCard 4'},
  { uid: '5', type: CardTypes.Fresh, fillingTxt: 'FreshCard 5'},
  { uid: '1', type: CardTypes.Rotten, declarationTxt: 'Rotten 1'},
  { uid: '2', type: CardTypes.Rotten, declarationTxt: 'Rotten 2'},
];

const fakeFetch = ():Promise<any> => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (fakeError){
      reject('ERROR FETCHING CARDS')
    }
    resolve({
      cards: cardsFake,
    });
  }, 3000);
});

function* handleFetch() {
  try {
    const res = yield call(fakeFetch);

    if (res.error) {
      yield put(actions.fetchCardsError(res.error))
    } else {
      yield put(actions.fetchCardsSuccess(res.cards))
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(actions.fetchCardsError(err.stack!))
    } else {
      yield put(actions.fetchCardsError('An unknown error occured.'))
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  yield takeEvery(ActionTypes.FETCH_CARDS_REQUEST, handleFetch);
}

// Export our root saga.
// We can also use `fork()` here to split our saga into multiple watchers.
export function* CardsSaga() {
  yield all([fork(watchFetchRequest)])
}