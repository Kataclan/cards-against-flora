import { State } from '../../store/types';

export const getCards = (state: State) => state.cards.cards;

export const getIsFetchingCards = (state: State) => state.cards.isFetching;

export const getCard = (state: State, cardId:string) => getCards(state).get(cardId); 
