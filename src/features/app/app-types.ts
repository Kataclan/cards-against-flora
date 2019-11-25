import { Action } from "typesafe-actions";

export enum Actions {
  START_INIT_APP = '@@app/START_INIT_APP',
  FINISH_INIT_APP = '@@app/FINISH_INIT_APP',
}

export interface IActionStartInitApp extends Action {
  type: Actions.START_INIT_APP;
}

export interface IActionFinishInitApp extends Action {
  type: Actions.FINISH_INIT_APP;
}

export type ActionTypes =
  IActionStartInitApp |
  IActionFinishInitApp;

export type State = {
  isLoadingApp: boolean
}