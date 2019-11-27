import { Action } from 'typesafe-actions';
import { Record } from 'immutable';

export enum Actions {
  START_INIT_APP = '@@app/START_INIT_APP',
  FINISH_INIT_APP = '@@app/FINISH_INIT_APP',
}

export interface ActionStartInitApp extends Action {
  type: Actions.START_INIT_APP;
}

export interface ActionFinishInitApp extends Action {
  type: Actions.FINISH_INIT_APP;
}

export type ActionTypes = ActionStartInitApp | ActionFinishInitApp;

export type State = {
  isLoading: boolean;
};

export type AppState = Record<State>;
