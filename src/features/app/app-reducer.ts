import { Actions, ActionTypes } from './app-types';
import { fromJS } from 'immutable';
// import { fromJS } from 'immutable';

// const initialState:AppState = fromJS({
// 	isLoading: false,
// });

export const reducer = (
	state = fromJS({ isLoading: false }),
	action: ActionTypes,
): boolean => {
	switch (action.type) {
    case Actions.START_INIT_APP:
      return true;
    case Actions.FINISH_INIT_APP:
			return false;
		default:
			return state;
	}
};

export default reducer;