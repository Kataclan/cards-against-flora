import * as React from 'react';
import { Fab } from '@material-ui/core';
import { FabProps as MuiFabProps } from '@material-ui/core/Fab';
import { styled as styledMui } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export enum Fabs {
  ADD = 'ADD',
  EDIT = 'EDIT',
  DELETE = 'DELETE',
}

type FabProps = MuiFabProps & {
  onClickAction: () => any;
};

const FabWithMargin = styledMui(Fab)({
  marginRight: 10,
});

const FabAdd: React.FC<FabProps> = props => (
  <FabWithMargin {...props} color="secondary" aria-label="add" onClick={() => props.onClickAction()}>
    <AddIcon />
  </FabWithMargin>
);

const FabEdit: React.FC<FabProps> = props => (
  <FabWithMargin {...props} color="secondary" aria-label="edit" onClick={() => props.onClickAction()}>
    <EditIcon />
  </FabWithMargin>
);

const FabDelete: React.FC<FabProps> = props => (
  <Fab {...props} color="secondary" aria-label="delete" onClick={() => props.onClickAction()}>
    <DeleteIcon />
  </Fab>
);

export type FabTypes = typeof FabAdd | typeof FabEdit | typeof FabDelete;

export { FabAdd, FabEdit, FabDelete };
