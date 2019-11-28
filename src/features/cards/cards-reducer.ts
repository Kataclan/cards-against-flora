import { CardsActionTypes, CardsActions, CardsState } from './cards-types';
import { Map, fromJS } from 'immutable';
import { createReducer } from 'typesafe-actions';

const initialState: CardsState = fromJS({
  isFetching: false,
  cards: Map(),
});

const isFetchingReducer = createReducer<CardsState, CardsActionTypes>(initialState)
  .handleType(CardsActions.FETCH_CARDS_REQUEST, state => state.set('isFetching', true))
  .handleType([CardsActions.FETCH_CARDS_SUCCESS, CardsActions.FETCH_CARDS_ERROR], state =>
    state.set('isFetching', true),
  );

const cardsReducer = createReducer<CardsState, CardsActionTypes>(initialState)
  .handleType(CardsActions.FETCH_CARDS_REQUEST, state => state.set('isFetching', true))
  .handleType(CardsActions.FETCH_CARDS_SUCCESS, (state, action) =>
    state.setIn(
      'cards',
      action.payload.cards.forEach(card => state.get('cards').set(card.uid, card)),
    ),
  )
  .handleType([CardsActions.ADD_CARD, CardsActions.UPDATE_CARD], (state, action) =>
    state.setIn(
      'cards',
      state.get('cards').update(action.payload.card.uid, () => action.payload.card),
    ),
  )
  .handleType(CardsActions.DELETE_CARD, (state, action) =>
    state.setIn('cards', state.get('cards').remove(action.payload.uid)),
  );

export default createReducer<CardsState, CardsActionTypes>(initialState, {
  ...isFetchingReducer.handlers,
  ...cardsReducer.handlers,
});
