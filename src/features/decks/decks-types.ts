import { Action } from "typesafe-actions";
import { Map } from 'immutable';

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

export interface IActionAddDeck extends Action {
  type: Actions.ADD_DECK,
  payload: {
    deck: Deck;
  }
}

export interface IActionDeleteDeck extends Action {
  type: Actions.DELETE_DECK,
  payload: {
    uid: string;
  }
}

export interface IActionFetchDecksRequest extends Action {
  type: Actions.FETCH_DECKS_REQUEST;
}

export interface IActionFetchDecksSuccess extends Action {
  type: typeof Actions.FETCH_DECKS_SUCCESS;
  payload: {
    decks: Deck[];
  }
}

export interface IActionFetchDecksError extends Action {
  type: typeof Actions.FETCH_DECKS_ERROR;
  payload: {
    msg: string;
  }
}

export interface IActionUpdateDeck extends Action {
  type: Actions.UPDATE_DECK,
  payload: {
    deck: Deck;
  }
}

export type ActionTypes =
  IActionAddDeck |
  IActionDeleteDeck |
  IActionFetchDecksRequest |
  IActionFetchDecksSuccess |
  IActionFetchDecksError |
  IActionUpdateDeck;

export type DecksStateTypes =
  boolean |
  Map<string, Deck>;

export interface DecksState extends Record<string, DecksStateTypes> {
  isFetching: boolean;
  decks: Map<string, Deck>;
};