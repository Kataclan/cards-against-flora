import React, { FC } from 'react';
import styledComponents from 'styled-components';
import styledTS from 'styled-components-ts';

import ActionBar from '../components/ActionBar';
import AppBar from '../components/AppBar';
import { FlexVContainer } from '../components/FlexContainers';

type Props = {
  renderActionsMenu?: () => JSX.Element;
};

const AppContainer = styledTS(styledComponents.div)`
  width: 100%;
  height: 100%;
`;

const Main: FC<Props> = ({ children }) => (
  <AppContainer>
    <AppBar />
    <FlexVContainer full={true}>{children}</FlexVContainer>
    <ActionBar />
  </AppContainer>
);

export default Main;
