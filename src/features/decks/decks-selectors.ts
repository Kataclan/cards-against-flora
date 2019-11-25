import { RootState } from '../../store/types';

export const getDecks = (state: RootState) => state.decks.decks;
export const getIsFetchingDecks = (state: RootState) => state.decks.isFetching;
