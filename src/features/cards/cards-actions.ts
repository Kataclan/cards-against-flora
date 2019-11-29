import { createAction } from 'typesafe-actions';
import { CardsActions, Card } from './cards-types';

export const addCard = createAction(CardsActions.ADD_CARD)<Card>();

export const deleteCard = createAction(CardsActions.DELETE_CARD)<string>();

export const fetchCardsRequest = createAction(CardsActions.FETCH_CARDS_REQUEST)<void>();

export const fetchCardsSuccess = createAction(CardsActions.FETCH_CARDS_SUCCESS)<Card[]>();

export const fetchCardsError = createAction(CardsActions.FETCH_CARDS_ERROR)<string>();

export const selectCard = createAction(CardsActions.SELECT_CARD)<string>();

export const updateCard = createAction(CardsActions.UPDATE_CARD)<Card>();
