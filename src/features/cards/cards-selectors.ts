import { State } from '../../store/types';

export const getState = (state: State) => state.get('cards');

export const getIsFetchingCards = (state: State) => getState(state).get('isFetching');

export const getCards = (state: State) => getState(state).get('cards');

export const getCard = (state: State, cardId:string) => getCards(state).get(cardId); 
