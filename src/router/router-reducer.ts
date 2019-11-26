import {
  LOCATION_CHANGE,
  RouterAction,
} from 'connected-react-router';
import { fromJS } from 'immutable';

export type AllowedRouterTypes = any;

export interface MyRouterState extends Record<string, AllowedRouterTypes> {
  locationBeforeTransition: any;
}

const initialState:MyRouterState = fromJS({
  locationBeforeTransition: undefined,
});

export const routerReducer = (state = initialState, action:RouterAction): MyRouterState => {
  if (action.type === LOCATION_CHANGE) {
    return {
      ...state,
      locationBeforeTransition: action.payload,
    };
  }
  return state;
};

export default routerReducer;