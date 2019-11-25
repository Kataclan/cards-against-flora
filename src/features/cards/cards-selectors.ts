import { RootState } from '../../store/types';

export const getCards = (state: RootState) => state.cards.cards;

export const getIsFetchingCards = (state: RootState) => state.cards.isFetching;

export const getCard = (state: RootState, cardId:string) => getCards(state).get(cardId); 
