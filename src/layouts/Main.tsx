import React, { FC } from 'react';
import ActionBar from '../components/ActionBar';
import AppBar from '../components/AppBar';

type Props = {
  renderActionsMenu?: () => JSX.Element;
};

const Main: FC<Props> = ({ children }) => (
  <div className="App">
    <AppBar />
    <main className="App-main">{children}</main>
    <ActionBar />
  </div>
);

export default Main;
