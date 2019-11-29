import { compose } from 'redux';
import { Map } from 'immutable';

export const composeEnhancers =
  (process.env.NODE_ENV === 'development' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const API_ROOT_URL = 'http://localhost:3000';

export function createMapFromArray<T extends BaseObj>(array: T[]) {
  let map = Map<string, T>();
  array.forEach(item => (map = map.set(item.uid, item)));
  return map;
}
