
import { action } from "typesafe-actions";
import { Actions, ActionTypes } from './app-types';

export const startInitApp = (): ActionTypes => action(
	Actions.START_INIT_APP,
	{},
);

export const finishInitApp = (): ActionTypes => action(
	Actions.FINISH_INIT_APP,
	{},
);