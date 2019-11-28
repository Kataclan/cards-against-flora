import { DecksActionTypes, DecksActions, DecksState } from './decks-types';
import { Map, fromJS } from 'immutable';
import { createReducer } from 'typesafe-actions';

const initialState: DecksState = fromJS({
  isFetching: false,
  decks: Map(),
});

const isFetchingReducer = createReducer<DecksState, DecksActionTypes>(initialState)
  .handleType(DecksActions.FETCH_DECKS_REQUEST, state => state.set('isFetching', true))
  .handleType([DecksActions.FETCH_DECKS_SUCCESS, DecksActions.FETCH_DECKS_ERROR], state =>
    state.set('isFetching', true),
  );

const decksReducer = createReducer<DecksState, DecksActionTypes>(initialState)
  .handleType(DecksActions.FETCH_DECKS_REQUEST, state => state.set('isFetching', true))
  .handleType(DecksActions.FETCH_DECKS_SUCCESS, (state, action) =>
    state.setIn(
      'decks',
      action.payload.decks.forEach(deck => state.get('decks').set(deck.uid, deck)),
    ),
  )
  .handleType([DecksActions.ADD_DECK, DecksActions.UPDATE_DECK], (state, action) =>
    state.setIn(
      'decks',
      state.get('decks').update(action.payload.deck.uid, () => action.payload.deck),
    ),
  )
  .handleType(DecksActions.DELETE_DECK, (state, action) =>
    state.setIn('decks', state.get('decks').remove(action.payload.uid)),
  );

export default createReducer<DecksState, DecksActionTypes>(initialState, {
  ...isFetchingReducer.handlers,
  ...decksReducer.handlers,
});
