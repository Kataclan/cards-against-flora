
import { Reducer } from 'typesafe-actions';
import { combineReducers } from 'redux';
import { Actions, ActionTypes } from './app-types';

export const isLoading:Reducer<boolean, ActionTypes> = (
	state = true,
	action: ActionTypes,
) => {
	switch (action.type) {
    case Actions.START_INIT_APP:
      return true;
    case Actions.FINISH_INIT_APP:
			return false;
		default:
			return state;
	}
};

export default combineReducers({
	isLoading: isLoading,
});