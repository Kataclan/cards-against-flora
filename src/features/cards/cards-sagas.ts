import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as actions from './cards-actions';
import { CardsActions, Card, CardTypes } from './cards-types';
import { history } from '../../router';

const cardsFake: Card[] = [
  {
    dateAdded: new Date(),
    uid: '1',
    __type: CardTypes.Fresh,
    text:
      'Lorem fistrum ese que llega diodenoo ahorarr ese hombree fistro papaar papaar. Al ataquerl no puedor ese que llega amatomaa al ataquerl amatomaa.',
  },
  {
    dateAdded: new Date(),
    uid: '2',
    __type: CardTypes.Fresh,
    text:
      'Benemeritaar va usté muy cargadoo ese que llega ahorarr. Está la cosa muy malar mamaar de la pradera a gramenawer va usté muy cargadoo apetecan sexuarl. La caidita benemeritaar a gramenawer ahorarr está la cosa muy malar quietooor fistro ese que llega pecador apetecan. Ahorarr condemor ese pedazo de ese que llega no te digo trigo por no llamarte Rodrigor llevame al sircoo mamaar.',
  },
  {
    dateAdded: new Date(),
    uid: '3',
    __type: CardTypes.Fresh,
    text:
      'La caidita benemeritaar a gramenawer ahorarr está la cosa muy malar quietooor fistro ese que llega pecador apetecan',
  },
  {
    dateAdded: new Date(),
    uid: '4',
    __type: CardTypes.Fresh,
    text:
      'Ese hombree me cago en tus muelas apetecan torpedo a wan pecador. Me cago en tus muelas a wan va usté muy cargadoo caballo blanco caballo negroorl al ataquerl hasta luego Lucas mamaar no te digo trigo por no llamarte',
  },
  {
    dateAdded: new Date(),
    uid: '5',
    __type: CardTypes.Fresh,
    text:
      'Diodenoo jarl se calle ustée no puedor jarl tiene musho peligro a gramenawer diodenoo. Amatomaa te va a hasé pupitaa jarl por la gloria de mi madre ese que llega a wan.',
  },
  { dateAdded: new Date(), uid: '10', __type: CardTypes.Rotten, text: 'Al ataquerl ___' },
  { dateAdded: new Date(), uid: '11', __type: CardTypes.Rotten, text: 'No puedor ____' },
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

// Change tab listener
function backToCards() {
  history.replace('/cards');
}

function* watchCardModify() {
  yield all([takeEvery(CardsActions.ADD_CARD, backToCards), takeEvery(CardsActions.UPDATE_CARD, backToCards)]);
}

function* watchFetchRequest() {
  yield takeEvery(CardsActions.FETCH_CARDS_REQUEST, handleFetch);
}

// Export our root saga.
// We can also use `fork()` here to split our saga into multiple watchers.
export function* CardsSaga() {
  yield all([fork(watchFetchRequest), fork(watchCardModify)]);
}
