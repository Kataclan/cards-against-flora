import { State } from '../../store/types';

export const getDecks = (state: State) => state.decks.decks;

export const getIsFetchingDecks = (state: State) => state.decks.isFetching;
