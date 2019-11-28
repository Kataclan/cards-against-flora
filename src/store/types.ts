import { AppState } from '../features/app/app-types';
import { CardsState } from '../features/cards/cards-types';
import { DecksState } from '../features/decks/decks-types';
import { RouterState } from 'connected-react-router';
import { Record } from 'immutable';
import { ActionType } from 'typesafe-actions';

export type State = Record<{
  app: AppState;
  cards: CardsState;
  decks: DecksState;
  router: RouterState;
}>;

export type RootAction = ActionType<typeof import('./root-action').default>;
