import { History } from 'history';
import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router';

// import cardsReducer from '../features/cards/cards-reducer';
import appReducer from '../features/app/app-reducer';
// import { decksReducer } from '../features/decks/decks-reducer';

const rootReducer = (history: History<any>) =>
  combineReducers({
    app: appReducer,
    router : connectRouter(history)
  })

export default rootReducer;
