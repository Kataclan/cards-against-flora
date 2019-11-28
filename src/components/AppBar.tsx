import * as React from 'react';
import { AppBar as MuiAppBar, styled } from '@material-ui/core';
import { TypoAppTitle } from './Typographies';

const AppBarStyled = styled(MuiAppBar)({
  position: 'fixed',
  padding: '10px 0px',
});

const AppBar: React.FC = () => (
  <AppBarStyled>
    <TypoAppTitle align="center" variant="h5">
      CARDS AGAINST FLORA
    </TypoAppTitle>
  </AppBarStyled>
);

export default AppBar;
