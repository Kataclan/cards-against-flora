import { createAction } from 'typesafe-actions';
import { DecksActions, Deck } from './decks-types';

export const addDeck = createAction(DecksActions.ADD_DECK)<Deck>();

export const deleteDeck = createAction(DecksActions.DELETE_DECK)<string>();

export const fetchDecksRequest = createAction(DecksActions.FETCH_DECKS_REQUEST)<void>();

export const fetchDecksSuccess = createAction(DecksActions.FETCH_DECKS_SUCCESS)<Deck[]>();

export const fetchDecksError = createAction(DecksActions.FETCH_DECKS_ERROR)<string>();

export const updateDeck = createAction(DecksActions.UPDATE_DECK)<Deck>();
