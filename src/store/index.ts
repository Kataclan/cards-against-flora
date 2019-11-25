import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import { composeEnhancers } from './utils';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';
import { createLogger } from 'redux-logger';
import { Collection } from 'immutable';

export const history = createBrowserHistory();
const sagaMiddleWare = createSagaMiddleware();
const loggerMiddleWare = createLogger({ collapsed: true });
const middlewares = [routerMiddleware(history), sagaMiddleWare, loggerMiddleWare];

// compose enhancers
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const initialState = Collection<any>({});

const store = createStore(rootReducer(history), initialState, enhancer);

// run middlewares
sagaMiddleWare.run(rootSaga);

export default store;