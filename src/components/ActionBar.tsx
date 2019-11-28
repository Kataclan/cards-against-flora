import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import { AppBar as MuiAppBar, Toolbar, Fab } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import { FlexGrow } from './FlexContainers';

const AppBar = styled(MuiAppBar)({
  top: 'auto',
  bottom: 0,
});

const FabButton = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

const ActionBar = () => (
  <AppBar position="fixed" color="primary">
    <Toolbar>
      <FabButton color="secondary" aria-label="add">
        <AddIcon />
      </FabButton>
      <FlexGrow />
    </Toolbar>
  </AppBar>
);

export default ActionBar;
