import { State } from '../../store/types';

export const getIsLoadingApp = (state: State) => state.app.isLoading;
