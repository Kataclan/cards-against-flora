import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as actions from './cards-actions';
import { CardsActions, Card, CardTypes } from './cards-types';

const cardsFake: Card[] = [
  {
    uid: '1',
    __type: CardTypes.Fresh,
    fillingTxt:
      'Lorem fistrum ese que llega diodenoo ahorarr ese hombree fistro papaar papaar. Al ataquerl no puedor ese que llega amatomaa al ataquerl amatomaa.',
  },
  {
    uid: '2',
    __type: CardTypes.Fresh,
    fillingTxt:
      'Benemeritaar va usté muy cargadoo ese que llega ahorarr. Está la cosa muy malar mamaar de la pradera a gramenawer va usté muy cargadoo apetecan sexuarl. La caidita benemeritaar a gramenawer ahorarr está la cosa muy malar quietooor fistro ese que llega pecador apetecan. Ahorarr condemor ese pedazo de ese que llega no te digo trigo por no llamarte Rodrigor llevame al sircoo mamaar.',
  },
  {
    uid: '3',
    __type: CardTypes.Fresh,
    fillingTxt:
      'La caidita benemeritaar a gramenawer ahorarr está la cosa muy malar quietooor fistro ese que llega pecador apetecan',
  },
  {
    uid: '4',
    __type: CardTypes.Fresh,
    fillingTxt:
      'Ese hombree me cago en tus muelas apetecan torpedo a wan pecador. Me cago en tus muelas a wan va usté muy cargadoo caballo blanco caballo negroorl al ataquerl hasta luego Lucas mamaar no te digo trigo por no llamarte',
  },
  {
    uid: '5',
    __type: CardTypes.Fresh,
    fillingTxt:
      'Diodenoo jarl se calle ustée no puedor jarl tiene musho peligro a gramenawer diodenoo. Amatomaa te va a hasé pupitaa jarl por la gloria de mi madre ese que llega a wan.',
  },
  { uid: '10', __type: CardTypes.Rotten, declarationTxt: 'Al ataquerl' },
  { uid: '11', __type: CardTypes.Rotten, declarationTxt: 'No puedor' },
  { uid: '12', __type: CardTypes.Rotten, declarationTxt: 'Al ataquerl' },
  { uid: '13', __type: CardTypes.Rotten, declarationTxt: 'No puedor' },
  { uid: '14', __type: CardTypes.Rotten, declarationTxt: 'No puedor' },
];

const fakeFetch = (): Promise<any> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        cards: cardsFake,
      });
    }, 2000);
  });

function* handleFetch() {
  try {
    const res: any = yield call(fakeFetch);

    if (res.error) {
      yield put(actions.fetchCardsError(res.error));
    } else {
      yield put(actions.fetchCardsSuccess(res.cards));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(actions.fetchCardsError((err.stack as string).toString()));
    } else {
      yield put(actions.fetchCardsError('An unknown error occured.'));
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  yield takeEvery(CardsActions.FETCH_CARDS_REQUEST, handleFetch);
}

// Export our root saga.
// We can also use `fork()` here to split our saga into multiple watchers.
export function* CardsSaga() {
  yield all([fork(watchFetchRequest)]);
}
