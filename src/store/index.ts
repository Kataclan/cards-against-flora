import { applyMiddleware, createStore } from 'redux';
import { History } from 'history';

import { routerMiddleware } from 'connected-react-router/immutable';
import { createLogger } from 'redux-logger';
import createSagaMiddleWare from 'redux-saga';

import { composeEnhancers } from './utils';
import rootSaga from './root-saga';
import rootReducer from './root-reducer';

export default function configureStore(history: History) {
  //Init middlewares
  const loggerMiddleWare = createLogger({ collapsed: true });
  const sagaMiddleware = createSagaMiddleWare();
  const middlewares = [routerMiddleware(history), loggerMiddleWare, sagaMiddleware];

  //Init enhancer
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  //Store creation
  const store = createStore(rootReducer(history), enhancer);

  //Run sagas
  sagaMiddleware.run(rootSaga);

  return store;
}
