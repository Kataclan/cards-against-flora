import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import decksReducer from '../features/decks/decks-reducer';
import cardsReducer from '../features/cards/cards-reducer';
import appReducer from '../features/app/app-reducer';

const rootReducer = (history: History<any>) =>
  combineReducers({
    router: connectRouter(history),
    app: appReducer,
    decks: decksReducer,
    cards: cardsReducer,
  });

export default rootReducer;
