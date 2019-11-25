import { action } from "typesafe-actions";
import { Actions, ActionTypes, Card } from './cards-types';

export const addCard = (card: Card): ActionTypes => action(
	Actions.ADD_CARD,
	{ card: card },
)

export const deleteCard = (uid: string): ActionTypes => action(
	Actions.DELETE_CARD,
	{ uid: uid },
)

export const fetchCardsRequest = (): ActionTypes => action(
	Actions.FETCH_CARDS_REQUEST,
	{},
);

export const fetchCardsSuccess = (cards: Card[]): ActionTypes => action(
	Actions.FETCH_CARDS_SUCCESS,
	{ cards: cards },
);

export const fetchCardsError = (msg: string): ActionTypes => action(
	Actions.FETCH_CARDS_ERROR,
	{ msg: msg }
);

export const updateCard = (card: Card): ActionTypes => action(
	Actions.UPDATE_CARD,
	{ card: card },
)