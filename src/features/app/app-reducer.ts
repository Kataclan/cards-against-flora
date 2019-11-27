import { Actions, ActionTypes } from './app-types';
import { combineReducers } from 'redux-immutable';

export const isLoadingReducer = (state = true, action: ActionTypes): boolean => {
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
  isLoading: isLoadingReducer,
});
