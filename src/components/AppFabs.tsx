import * as React from 'react';
import { Fab } from '@material-ui/core';
import { styled as styledMui } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export enum Fabs {
  ADD = 'ADD',
  EDIT = 'EDIT',
  DELETE = 'DELETE',
}

type FabProps = {
  onClick: (e: any) => any;
};

const FabWithMargin = styledMui(Fab)({
  marginRight: 10,
});

const FabAdd: React.FC<FabProps> = ({ onClick }) => (
  <FabWithMargin color="secondary" aria-label="add" onClick={onClick}>
    <AddIcon />
  </FabWithMargin>
);

const FabEdit: React.FC<FabProps> = ({ onClick }) => (
  <FabWithMargin color="secondary" aria-label="edit" onClick={onClick}>
    <EditIcon />
  </FabWithMargin>
);

const FabDelete: React.FC<FabProps> = ({ onClick }) => (
  <Fab color="secondary" aria-label="delete" onClick={onClick}>
    <DeleteIcon />
  </Fab>
);

export type FabTypes = typeof FabAdd | typeof FabEdit | typeof FabDelete;

export { FabAdd, FabEdit, FabDelete };
