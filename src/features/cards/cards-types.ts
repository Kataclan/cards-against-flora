import { Map, Record } from 'immutable';

export enum CardTypes {
  Fresh,
  Rotten,
}

export interface FreshCard extends BaseObj {
  type: typeof CardTypes.Fresh;
  fillingTxt: string;
}

export interface RottenCard extends BaseObj {
  type: typeof CardTypes.Rotten;
  declarationTxt: string;
}

export type Card = FreshCard | RottenCard;

export enum CardsActions {
  ADD_CARD = '@@cards/ADD_CARD',
  DELETE_CARD = '@@cards/DELETE_CARD',
  FETCH_CARDS_REQUEST = '@@cards/FETCH_CARDS_REQUEST',
  FETCH_CARDS_SUCCESS = '@@cards/FETCH_CARDS_SUCCESS',
  FETCH_CARDS_ERROR = '@@cards/FETCH_CARDS_ERROR',
  SET_CARDS = '@@cards/SET_CARDS',
  UPDATE_CARD = '@@cards/UPDATE_CARD',
}

export interface ActionAddCard {
  type: typeof CardsActions.ADD_CARD;
  payload: {
    card: Card;
  };
}

export interface ActionDeleteCard {
  type: typeof CardsActions.DELETE_CARD;
  payload: {
    uid: string;
  };
}

export interface ActionFetchCardsRequest {
  type: typeof CardsActions.FETCH_CARDS_REQUEST;
}

export interface ActionFetchCardsSuccess {
  type: typeof CardsActions.FETCH_CARDS_SUCCESS;
  payload: {
    cards: Card[];
  };
}

export interface ActionFetchCardsError {
  type: typeof CardsActions.FETCH_CARDS_ERROR;
  payload: {
    msg: string;
  };
}

export interface ActionSetCards {
  type: typeof CardsActions.SET_CARDS;
  payload: {
    cards: Card[];
  };
}

export interface ActionUpdateCard {
  type: typeof CardsActions.UPDATE_CARD;
  payload: {
    card: Card;
  };
}

export type CardsActionTypes =
  | ActionAddCard
  | ActionDeleteCard
  | ActionFetchCardsRequest
  | ActionFetchCardsSuccess
  | ActionFetchCardsError
  | ActionSetCards
  | ActionUpdateCard;

export type CardsState = Record<{
  isFetching: boolean;
  cards: Map<string, Card>;
}>;
