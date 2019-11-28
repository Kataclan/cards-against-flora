import { createAction } from 'typesafe-actions';
import { AppActions, AppTab } from './app-types';

export const startInitApp = createAction(AppActions.START_INIT_APP)<void>();

export const finishInitApp = createAction(AppActions.FINISH_INIT_APP)<void>();

export const changeCurrentTab = createAction(AppActions.CHANGE_CURRENT_TAB)<AppTab>();
