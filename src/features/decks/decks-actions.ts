
import { action } from "typesafe-actions";
import { Actions, ActionTypes, Deck } from './decks-types';

export const addDeck = (deck: Deck): ActionTypes => action(
	Actions.ADD_DECK,
	{ deck: deck }
);

export const deleteDeck = (uid: string): ActionTypes => action(
	Actions.DELETE_DECK,
	{ uid: uid }
);

export const fetchDecksRequest = (): ActionTypes => action(
	Actions.FETCH_DECKS_REQUEST,
	{},
);

export const fetchDecksSuccess = (decks: Deck[]): ActionTypes => action(
	Actions.FETCH_DECKS_SUCCESS,
	{ decks: decks },
);

export const fetchDecskError = (msg: string): ActionTypes => action(
	Actions.FETCH_DECKS_ERROR,
	{ msg: msg }
);

export const updateDeck = (deck: Deck): ActionTypes => action(
	Actions.UPDATE_DECK,
	{ deck: deck }
);