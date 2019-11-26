import { State } from '../../store/types';

export const getState = (state: State) => state.get('decks');

export const getIsFetchingDecks = (state: State) => getState(state).get('isFetching');

export const getDecks = (state: State) => getState(state).get('decks');
