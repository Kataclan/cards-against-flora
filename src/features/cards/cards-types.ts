import { Action } from "typesafe-actions";
import { Map, Record } from 'immutable';

export enum CardTypes {
  Fresh,
  Rotten
}

export interface ICard extends BaseObj {
  type: CardTypes;
}

interface IFreshCard extends ICard{
  type: typeof CardTypes.Fresh;
  fillingTxt: string;
}
interface IRottenCard extends ICard{
  type: typeof CardTypes.Rotten;
  declarationTxt: string;
}

export type Card = IFreshCard | IRottenCard;

export enum Actions {
  ADD_CARD = '@@cards/ADD_CARD',
  DELETE_CARD = '@@cards/DELETE_CARD',
  FETCH_CARDS_REQUEST = '@@cards/FETCH_CARDS_REQUEST',
  FETCH_CARDS_SUCCESS = '@@cards/FETCH_CARDS_SUCCESS',
  FETCH_CARDS_ERROR = '@@cards/FETCH_CARDS_ERROR',
  SET_CARDS = '@@cards/SET_CARDS',
  UPDATE_CARD = '@@cards/UPDATE_CARD',
}

export interface IActionAddCard extends Action {
  type: Actions.ADD_CARD,
  payload: {
    card: Card
  }
}

export interface IActionDeleteCard extends Action {
  type: Actions.DELETE_CARD,
  payload: {
    uid: string
  }
}

export interface IActionFetchCardsRequest extends Action {
  type: Actions.FETCH_CARDS_REQUEST;
}

export interface IActionFetchCardsSuccess extends Action {
  type: typeof Actions.FETCH_CARDS_SUCCESS;
  payload: {
    cards: Card[],
  }
}

export interface IActionFetchCardsError extends Action {
  type: typeof Actions.FETCH_CARDS_ERROR;
  payload: {
    msg: string;
  }
}

export interface IActionSetCards extends Action {
  type: typeof Actions.SET_CARDS;
  payload: {
    cards: Card[],
  }
}

export interface IActionUpdateCard extends Action {
  type: typeof Actions.UPDATE_CARD;
  payload: {
    card: Card,
  }
}

export type ActionTypes =
  IActionAddCard |
  IActionDeleteCard |
  IActionFetchCardsRequest |
  IActionFetchCardsSuccess |
  IActionFetchCardsError |
  IActionSetCards |
  IActionUpdateCard;

  export type State = {
    isFetching: boolean;
    cards: Map<string, Card>;
  }
  
  export type CardsState = Record<State>;