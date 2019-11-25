
import { Reducer } from 'typesafe-actions';
import { ActionTypes, Actions, Card } from "./cards-types";
import { combineReducers } from 'redux';
import { Map } from 'immutable';

export const cards:Reducer<Map<string, Card>, ActionTypes> = (
  state = Map(),
  action: ActionTypes,
) => {
  switch(action.type){
		case Actions.ADD_CARD:
			return state.update(action.payload.card.uid, () => action.payload.card);
		case Actions.DELETE_CARD:
			return state.remove(action.payload.uid);
    case Actions.FETCH_CARDS_SUCCESS:
			action.payload.cards.forEach(card => state.set(card.uid, card));
			return state;
		case Actions.UPDATE_CARD:
			return state.setIn(action.payload.card.uid, action.payload.card);
    default: return state;
  }
};

export const isFetching:Reducer<boolean, ActionTypes> = (
	state = false,
	action: ActionTypes,
) => {
	switch (action.type) {
    case Actions.FETCH_CARDS_REQUEST:
      return true;
    case Actions.FETCH_CARDS_SUCCESS:
			return false;
		case Actions.FETCH_CARDS_ERROR:
			return false;
		default:
			return state;
	}
};

export default combineReducers({
	isFetching: isFetching,
	cards: cards,
});