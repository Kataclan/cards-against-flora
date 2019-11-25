
import { Reducer } from 'typesafe-actions';
import { ActionTypes, Actions, Deck } from "./decks-types";
import { combineReducers } from 'redux';
import { Map } from 'immutable';

export const decks:Reducer<Map<string, Deck>, ActionTypes> = (
  state = Map(),
  action: ActionTypes,
): Map<string, Deck> => {
  switch(action.type){
		case Actions.ADD_DECK:
			return state.update(action.payload.deck.uid, () => action.payload.deck);
		case Actions.DELETE_DECK:
			return state.remove(action.payload.uid);
    case Actions.FETCH_DECKS_SUCCESS:
			action.payload.decks.forEach(deck => state.set(deck.uid, deck));
			return state;
		case Actions.UPDATE_DECK:
			return state.setIn(action.payload.deck.uid, action.payload.deck);
    default: return state;
  }
};

export const isFetching:Reducer<boolean, ActionTypes> = (
	state = false,
	action: ActionTypes,
) => {
	switch (action.type) {
    case Actions.FETCH_DECKS_REQUEST:
      return true;
    case Actions.FETCH_DECKS_SUCCESS:
			return false;
		case Actions.FETCH_DECKS_ERROR:
			return false;
		default:
			return state;
	}
};

export default combineReducers({
	isFetching: isFetching,
	decks: decks,
});