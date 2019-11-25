import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';

import { getPath } from './router-paths';
import store, { history } from './store';
import Home from './routes/Home';

class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path={getPath('home')} component={Home} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default AppRouter;
