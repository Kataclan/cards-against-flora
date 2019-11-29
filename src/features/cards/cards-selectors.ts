import { State } from '../../store/types';

export const getState = (state: State) => state.get('cards');

export const getIsFetchingCards = (state: State) => getState(state).get('isFetching');

export const getCards = (state: State) => getState(state).get('cards');

export const getCard = (state: State, cardId: string) => getCards(state).get(cardId);

export const getSelectedCardId = (state: State) => getState(state).get('selectedCard');

export const getSelectedCard = (state: State) => getCard(state, getSelectedCardId(state));
