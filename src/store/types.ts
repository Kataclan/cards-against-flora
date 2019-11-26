import { ActionType } from 'typesafe-actions';
import { AppState } from '../features/app/app-types';
import { CardsState } from '../features/cards/cards-types';
import { DecksState } from '../features/decks/decks-types';
import { RouterState } from 'connected-react-router';

export type AllowedStateTypes = 
  AppState |
  CardsState |
  DecksState |
  RouterState;

export interface State extends Record<string, AllowedStateTypes> {
  app: AppState,
  cards: CardsState,
  decks: DecksState,
  router: RouterState,
};

declare module 'typesafe-actions' {
  interface Types {
    RootAction: ActionType<typeof import('./root-action').default>;
  }
}
