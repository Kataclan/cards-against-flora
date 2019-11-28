import * as React from 'react';
import { TypoAppTitle } from './Typographies';
import { FlexVContainer } from './FlexContainers';

const EmptyPage: React.FC<{
  txt: string;
}> = ({ txt }) => (
  <FlexVContainer full={true} alignItems="center" justifyContent="center">
    <TypoAppTitle align="center" variant="h5" gutterBottom={true}>
      {txt}
    </TypoAppTitle>
  </FlexVContainer>
);

export default EmptyPage;
