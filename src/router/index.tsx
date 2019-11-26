import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { Switch, Route } from 'react-router';

import { getPath } from './router-paths';
import configureStore from '../store';
import { createBrowserHistory } from 'history';
import Home from '../pages/Home';

export const history = createBrowserHistory();
export const store = configureStore(history);

class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path={getPath('home')} render={() => <Home />} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default AppRouter;
