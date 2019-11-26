import { State } from '../../store/types';

export const get = (state: State) => state.get('decks');
export const getDecks = (state: State) => get(state).decks
export const getIsFetchingDecks = (state: State) => get(state).isFetching;
