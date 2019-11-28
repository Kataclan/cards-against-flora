import { State } from '../../store/types';

export const getState = (state: State) => state.get('app');

export const getIsLoadingApp = (state: State) => getState(state).get('isLoading');

export const getCurrentTab = (state: State) => getState(state).get('currentTab');
