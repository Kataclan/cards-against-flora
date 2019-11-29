import { CardsActionTypes, CardsActions, CardsState, Card } from './cards-types';
import { Map, fromJS } from 'immutable';
import { createReducer } from 'typesafe-actions';
import { createMapFromArray } from '../../store/utils';

const initialState: CardsState = fromJS({
  isFetching: false,
  cards: Map<string, Card>(),
  selectedCard: '',
});

const isFetchingReducer = createReducer<CardsState, CardsActionTypes>(initialState)
  .handleType(CardsActions.FETCH_CARDS_REQUEST, state => state.set('isFetching', true))
  .handleType(CardsActions.FETCH_CARDS_ERROR, state => state.set('isFetching', false));

const cardsReducer = createReducer<CardsState, CardsActionTypes>(initialState)
  .handleType(CardsActions.FETCH_CARDS_SUCCESS, (state, action) =>
    state.merge({
      isFetching: false,
      cards: createMapFromArray(action.payload),
    }),
  )
  .handleType(CardsActions.ADD_CARD, (state, action) =>
    state.setIn(
      ['cards'],
      state.get('cards').update(action.payload.uid, () => action.payload),
    ),
  )
  .handleType(CardsActions.UPDATE_CARD, (state, action) =>
    state.merge({
      selectedCard: '',
      cards: state.get('cards').update(action.payload.uid, () => action.payload),
    }),
  )
  .handleType(CardsActions.DELETE_CARD, (state, action) =>
    state.merge({
      selectedCard: '',
      cards: state.get('cards').remove(action.payload),
    }),
  );

const selectCardReducer = createReducer<CardsState, CardsActionTypes>(initialState).handleType(
  CardsActions.SELECT_CARD,
  (state, action) => state.set('selectedCard', action.payload === state.get('selectedCard') ? '' : action.payload),
);

export default createReducer<CardsState, CardsActionTypes>(initialState, {
  ...isFetchingReducer.handlers,
  ...cardsReducer.handlers,
  ...selectCardReducer.handlers,
});
