import { Action } from 'typesafe-actions';
import { Record } from 'immutable';

export enum AppActions {
  START_INIT_APP = '@@app/START_INIT_APP',
  FINISH_INIT_APP = '@@app/FINISH_INIT_APP',
  OPEN_MENU = '@@app/OPEN_MENU',
  CLOSE_MENU = '@@app/CLOSE_MENU',
}

export interface ActionStartInitApp extends Action {
  type: AppActions.START_INIT_APP;
}

export interface ActionFinishInitApp extends Action {
  type: AppActions.FINISH_INIT_APP;
}

export interface ActionCloseMenu extends Action {
  type: AppActions.CLOSE_MENU;
}

export interface ActionOpenMenu extends Action {
  type: AppActions.OPEN_MENU;
}

export type AppActionTypes = ActionStartInitApp | ActionFinishInitApp | ActionCloseMenu | ActionOpenMenu;

export type AppState = Record<{
  isLoading: boolean;
  isMenuOpen: boolean;
}>;
