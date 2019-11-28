import { AppActions, AppActionTypes, AppState, AppTab } from './app-types';
import { createReducer } from 'typesafe-actions';
import { fromJS } from 'immutable';

const initialState: AppState = fromJS({
  isLoading: false,
  currentTab: AppTab.Cards,
});

const isLoadingReducer = createReducer<AppState, AppActionTypes>(initialState)
  .handleType(AppActions.START_INIT_APP, state => state.set('isLoading', true))
  .handleType(AppActions.FINISH_INIT_APP, state => state.set('isLoading', false));

const currentTabReducer = createReducer<AppState, AppActionTypes>(
  initialState,
).handleType(AppActions.CHANGE_CURRENT_TAB, (state, action) => state.set('currentTab', action.payload));

export default createReducer<AppState, AppActionTypes>(initialState, {
  ...isLoadingReducer.handlers,
  ...currentTabReducer.handlers,
});
