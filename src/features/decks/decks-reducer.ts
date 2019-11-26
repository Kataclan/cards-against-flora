
import { ActionTypes, Actions, Deck, DecksState } from "./decks-types";
import { combineReducers } from 'redux-immutable';
import { Map, fromJS } from 'immutable';

export const isFetchingReducer = (
	state = false,
	action: ActionTypes,
): boolean => {
	switch (action.type) {
    case Actions.FETCH_DECKS_REQUEST:
      return true;
    case Actions.FETCH_DECKS_SUCCESS:
		case Actions.FETCH_DECKS_ERROR:
			return false;
		default:
			return state;
	}
};

export const decksReducer = (
  state = Map<string, Deck>(),
  action: ActionTypes,
): Map<string, Deck> => {
  switch(action.type){
		case Actions.ADD_DECK:
		case Actions.UPDATE_DECK:
			return state.update(action.payload.deck.uid, () => action.payload.deck);
		case Actions.DELETE_DECK:
			return state.remove(action.payload.uid);
    case Actions.FETCH_DECKS_SUCCESS:
			action.payload.decks.forEach(deck => state.set(deck.uid, deck));
			return state;
    default: return state;
  }
};

export default combineReducers<DecksState>(fromJS({
	isFetching: isFetchingReducer,
	decks: decksReducer,
}));