import React, { FC } from 'react';

type Props = {
  renderActionsMenu?: () => JSX.Element;
};

const Main: FC<Props> = ({ children }) => (
  <div className="App">
    <header className="App-header">
      DEMO APP
    </header>
    <main className="App-main">
      {children}
    </main>
  </div>
);

export default Main;
