import { AppState } from '../features/app/app-types';
import { CardsState } from '../features/cards/cards-types';
import { DecksState } from '../features/decks/decks-types';
import { RouterState } from 'connected-react-router';
import { Record } from 'immutable';

export type State = Record<{
  app: AppState;
  cards: CardsState;
  decks: DecksState;
  router: RouterState;
}>;
