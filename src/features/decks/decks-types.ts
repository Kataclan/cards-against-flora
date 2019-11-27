import { Action } from 'typesafe-actions';
import { Map, Record } from 'immutable';

export interface Deck extends BaseObj {
  displayName: string;
  rottenCards: string[];
  freshCards: string[];
}

export enum Actions {
  ADD_DECK = '@@decks/ADD_DECK',
  DELETE_DECK = '@@decks/DELETE_DECK',
  FETCH_DECKS_REQUEST = '@@decks/FETCH_DECKS_REQUEST',
  FETCH_DECKS_SUCCESS = '@@decks/FETCH_DECKS_SUCCESS',
  FETCH_DECKS_ERROR = '@@decks/FETCH_DECKS_ERROR',
  UPDATE_DECK = '@@decks/UPDATE_DECK',
}

export interface ActionAddDeck extends Action {
  type: Actions.ADD_DECK;
  payload: {
    deck: Deck;
  };
}

export interface ActionDeleteDeck extends Action {
  type: Actions.DELETE_DECK;
  payload: {
    uid: string;
  };
}

export interface ActionFetchDecksRequest extends Action {
  type: Actions.FETCH_DECKS_REQUEST;
}

export interface ActionFetchDecksSuccess extends Action {
  type: typeof Actions.FETCH_DECKS_SUCCESS;
  payload: {
    decks: Deck[];
  };
}

export interface ActionFetchDecksError extends Action {
  type: typeof Actions.FETCH_DECKS_ERROR;
  payload: {
    msg: string;
  };
}

export interface ActionUpdateDeck extends Action {
  type: Actions.UPDATE_DECK;
  payload: {
    deck: Deck;
  };
}

export type ActionTypes =
  | ActionAddDeck
  | ActionDeleteDeck
  | ActionFetchDecksRequest
  | ActionFetchDecksSuccess
  | ActionFetchDecksError
  | ActionUpdateDeck;

export type State = {
  isFetching: boolean;
  decks: Map<string, Deck>;
};

export type DecksState = Record<State>;
