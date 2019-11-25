import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import * as actions from './decks-actions';
// import { API_ROOT_URL } from '../../store/utils';
import { Actions as ActionTypes } from './decks-types';

// const DECKS_ENDPOINT = 
//   `${process.env.REACT_APP_API_ENDPOINT}/decks` ||
//   `${API_ROOT_URL}/decks`;

const fakeDecks = [
  { uid: '001', displayName: 'Sample Deck 1', rottenCards: [], freshCards: []},
  { uid: '002', displayName: 'Sample Deck 2', rottenCards: [], freshCards: []},
  { uid: '003', displayName: 'Sample Deck 3', rottenCards: [], freshCards: []},
  { uid: '004', displayName: 'Sample Deck 4', rottenCards: [], freshCards: []},
];

const fakeFetch = ():Promise<any> => new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        decks: fakeDecks,
      });
    }, 4000);
  });

function* handleFetch() {
  try {
    const res = yield call(fakeFetch);

    if (res.error) {
      yield put(actions.fetchDecskError(res.error))
    } else {
      yield put(actions.fetchDecksSuccess(res.decks))
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(actions.fetchDecskError(err.stack!))
    } else {
      yield put(actions.fetchDecskError('An unknown error occured.'))
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  yield takeEvery(ActionTypes.FETCH_DECKS_REQUEST, handleFetch);
}

// Export our root saga.
// We can also use `fork()` here to split our saga into multiple watchers.
export function* DecksSaga() {
  yield all([fork(watchFetchRequest)])
}