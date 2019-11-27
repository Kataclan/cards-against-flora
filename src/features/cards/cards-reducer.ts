import { ActionTypes, Actions, Card } from './cards-types';
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';

export const isFetchingReducer = (state = false, action: ActionTypes): boolean => {
  switch (action.type) {
    case Actions.FETCH_CARDS_REQUEST:
      return true;
    case Actions.FETCH_CARDS_SUCCESS:
    case Actions.FETCH_CARDS_ERROR:
      return false;
    default:
      return state;
  }
};

export const cardsReducer = (state = Map<string, Card>(), action: ActionTypes): Map<string, Card> => {
  switch (action.type) {
    case Actions.ADD_CARD:
    case Actions.UPDATE_CARD:
      return state.update(action.payload.card.uid, () => action.payload.card);
    case Actions.DELETE_CARD:
      return state.remove(action.payload.uid);
    case Actions.FETCH_CARDS_SUCCESS:
      action.payload.cards.forEach(card => state.set(card.uid, card));
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  isFetching: isFetchingReducer,
  cards: cardsReducer,
});
