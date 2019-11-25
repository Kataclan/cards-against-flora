import { RootState } from '../../store/types';

export const getIsLoadingApp = (state: RootState) => state.app.isLoading;
