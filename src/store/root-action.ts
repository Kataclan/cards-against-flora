import { routerActions } from 'connected-react-router';
import * as appActions from '../features/app/app-actions';
import * as decksActions from '../features/decks/decks-actions';

export default {
  app: appActions,
  decks: decksActions,
  router: routerActions,
};
