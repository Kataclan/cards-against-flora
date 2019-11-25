import { compose } from 'redux';
import * as _ from 'lodash';

export const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const API_ROOT_URL = 'http://localhost:3000';

export function insertBaseObjInArray<T extends BaseObj>(
  array: T[],
  item:T
): T[] {
  let newArray = array.slice();
  newArray.push(item);
  return newArray;
}

export function removeBaseObjFromArray<T extends BaseObj>(
  array: T[],
  uid:string
): T[] {
  let newArray = array.slice();
  return _.remove(newArray, (obj) => obj.uid === uid);
}

export function updateBaseObjInArray<T extends BaseObj>(
  array: T[],
  itemToUpdate:T
): T[] {
  return array.map((item) => item.uid === itemToUpdate.uid ? itemToUpdate : item);
};