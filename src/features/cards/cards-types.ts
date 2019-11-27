import { Action } from 'typesafe-actions';
import { Map, Record } from 'immutable';

export enum CardTypes {
  Fresh,
  Rotten,
}

export interface BaseCard extends BaseObj {
  type: CardTypes;
}

export interface FreshCard extends BaseCard {
  type: typeof CardTypes.Fresh;
  fillingTxt: string;
}

export interface RottenCard extends BaseCard {
  type: typeof CardTypes.Rotten;
  declarationTxt: string;
}

export type Card = FreshCard | RottenCard;

export enum Actions {
  ADD_CARD = '@@cards/ADD_CARD',
  DELETE_CARD = '@@cards/DELETE_CARD',
  FETCH_CARDS_REQUEST = '@@cards/FETCH_CARDS_REQUEST',
  FETCH_CARDS_SUCCESS = '@@cards/FETCH_CARDS_SUCCESS',
  FETCH_CARDS_ERROR = '@@cards/FETCH_CARDS_ERROR',
  SET_CARDS = '@@cards/SET_CARDS',
  UPDATE_CARD = '@@cards/UPDATE_CARD',
}

export interface ActionAddCard extends Action {
  type: Actions.ADD_CARD;
  payload: {
    card: Card;
  };
}

export interface ActionDeleteCard extends Action {
  type: Actions.DELETE_CARD;
  payload: {
    uid: string;
  };
}

export interface ActionFetchCardsRequest extends Action {
  type: Actions.FETCH_CARDS_REQUEST;
}

export interface ActionFetchCardsSuccess extends Action {
  type: typeof Actions.FETCH_CARDS_SUCCESS;
  payload: {
    cards: Card[];
  };
}

export interface ActionFetchCardsError extends Action {
  type: typeof Actions.FETCH_CARDS_ERROR;
  payload: {
    msg: string;
  };
}

export interface ActionSetCards extends Action {
  type: typeof Actions.SET_CARDS;
  payload: {
    cards: Card[];
  };
}

export interface ActionUpdateCard extends Action {
  type: typeof Actions.UPDATE_CARD;
  payload: {
    card: Card;
  };
}

export type ActionTypes =
  | ActionAddCard
  | ActionDeleteCard
  | ActionFetchCardsRequest
  | ActionFetchCardsSuccess
  | ActionFetchCardsError
  | ActionSetCards
  | ActionUpdateCard;

export type State = {
  isFetching: boolean;
  cards: Map<string, Card>;
};

export type CardsState = Record<State>;
