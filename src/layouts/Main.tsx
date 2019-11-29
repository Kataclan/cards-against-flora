import React from 'react';

import ActionBar from '../components/ActionBar';
import AppBar from '../components/AppBar';
import { FlexVContainer } from '../components/FlexContainers';

const Main: React.FC = ({ children }) => (
  <FlexVContainer full={true}>
    <FlexVContainer>
      <AppBar />
    </FlexVContainer>
    <FlexVContainer full={true}>{children}</FlexVContainer>
    <FlexVContainer>
      <ActionBar />
    </FlexVContainer>
  </FlexVContainer>
);

export default Main;
