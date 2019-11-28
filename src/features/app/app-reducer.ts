import { AppActions, AppActionTypes, AppState } from './app-types';
import { createReducer } from 'typesafe-actions';
import { fromJS } from 'immutable';

const initialState: AppState = fromJS({
  isLoading: false,
  isMenuOpen: false,
});

const isLoadingReducer = createReducer<AppState, AppActionTypes>(initialState)
  .handleType(AppActions.START_INIT_APP, state => state.set('isLoading', true))
  .handleType(AppActions.FINISH_INIT_APP, state => state.set('isLoading', false));

const isMenuOpenReducer = createReducer<AppState, AppActionTypes>(initialState)
  .handleType(AppActions.OPEN_MENU, state => state.set('isMenuOpen', true))
  .handleType(AppActions.CLOSE_MENU, state => state.set('isMenuOpen', false));

export default createReducer<AppState, AppActionTypes>(initialState, {
  ...isLoadingReducer.handlers,
  ...isMenuOpenReducer.handlers,
});
