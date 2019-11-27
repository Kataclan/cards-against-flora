import { History } from 'history';
import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router';

import appReducer from '../features/app/app-reducer';
import decksReducer from '../features/decks/decks-reducer';
import cardsReducer from '../features/cards/cards-reducer';

const rootReducer = (history: History<any>) =>
  combineReducers({
    app: appReducer,
    decks: decksReducer,
    cards: cardsReducer,
    router: connectRouter(history),
  });

export default rootReducer;
