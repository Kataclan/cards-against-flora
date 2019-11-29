import { Map, Record } from 'immutable';

export enum CardTypes {
  Fresh,
  Rotten,
}

export interface FreshCard extends BaseObj {
  __type: CardTypes.Fresh;
  fillingTxt: string;
}

export interface RottenCard extends BaseObj {
  __type: CardTypes.Rotten;
  declarationTxt: string;
}

export type Card = FreshCard | RottenCard;

export enum CardsActions {
  ADD_CARD = '@@cards/ADD_CARD',
  DELETE_CARD = '@@cards/DELETE_CARD',
  FETCH_CARDS_REQUEST = '@@cards/FETCH_CARDS_REQUEST',
  FETCH_CARDS_SUCCESS = '@@cards/FETCH_CARDS_SUCCESS',
  FETCH_CARDS_ERROR = '@@cards/FETCH_CARDS_ERROR',
  SELECT_CARD = '@@cards/SELECT_CARD',
  UPDATE_CARD = '@@cards/UPDATE_CARD',
}

export interface ActionAddCard {
  type: typeof CardsActions.ADD_CARD;
  payload: Card;
}

export interface ActionDeleteCard {
  type: typeof CardsActions.DELETE_CARD;
  payload: string;
}

export interface ActionFetchCardsRequest {
  type: typeof CardsActions.FETCH_CARDS_REQUEST;
}

export interface ActionFetchCardsSuccess {
  type: typeof CardsActions.FETCH_CARDS_SUCCESS;
  payload: Card[];
}

export interface ActionFetchCardsError {
  type: typeof CardsActions.FETCH_CARDS_ERROR;
  payload: string;
}

export interface ActionSelectCard {
  type: typeof CardsActions.SELECT_CARD;
  payload: string;
}

export interface ActionUpdateCard {
  type: typeof CardsActions.UPDATE_CARD;
  payload: Card;
}

export type CardsActionTypes =
  | ActionAddCard
  | ActionDeleteCard
  | ActionFetchCardsRequest
  | ActionFetchCardsSuccess
  | ActionFetchCardsError
  | ActionSelectCard
  | ActionUpdateCard;

export type CardsState = Record<{
  isFetching: boolean;
  cards: Map<string, Card>;
  selectedCard: string;
}>;
