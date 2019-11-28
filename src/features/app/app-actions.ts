import { createAction } from 'typesafe-actions';
import { AppActions } from './app-types';

export const startInitApp = createAction(AppActions.START_INIT_APP)<void>();

export const finishInitApp = createAction(AppActions.FINISH_INIT_APP)<void>();

export const openMenu = createAction(AppActions.OPEN_MENU)<void>();

export const closeMeny = createAction(AppActions.CLOSE_MENU)<void>();
