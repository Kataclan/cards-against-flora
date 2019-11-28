import { Action } from 'typesafe-actions';
import { Record } from 'immutable';

export enum AppActions {
  START_INIT_APP = '@@app/START_INIT_APP',
  FINISH_INIT_APP = '@@app/FINISH_INIT_APP',
  CHANGE_CURRENT_TAB = '@@app/CHANGE_CURRENT_TAB',
}

export interface ActionStartInitApp extends Action {
  type: AppActions.START_INIT_APP;
}

export interface ActionFinishInitApp extends Action {
  type: AppActions.FINISH_INIT_APP;
}

export interface ActionChangeCurrentTab extends Action {
  type: AppActions.CHANGE_CURRENT_TAB;
  payload: AppTab;
}

export type AppActionTypes = ActionStartInitApp | ActionFinishInitApp | ActionChangeCurrentTab;

export enum AppTab {
  Cards = 0,
  Decks,
}

export type AppState = Record<{
  isLoading: boolean;
  currentTab: AppTab;
}>;
