import { ActionType } from 'typesafe-actions';
import { AppState } from '../features/app/app-types';
import { CardsState } from '../features/cards/cards-types';
import { DecksState } from '../features/decks/decks-types';
import { RouterState } from 'connected-react-router';
import { Record } from 'immutable';

export type StateStructure = {
  app: AppState;
  cards: CardsState;
  decks: DecksState;
  router: RouterState;
};

export type State = Record<StateStructure>;

declare module 'typesafe-actions' {
  interface Types {
    RootAction: ActionType<typeof import('./root-action').default>;
  }
}
