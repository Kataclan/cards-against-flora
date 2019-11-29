import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import styledComponents from 'styled-components';
import { styled as styledMui } from '@material-ui/core/styles';
import { AppBar as MuiAppBar, Toolbar } from '@material-ui/core';

import { State } from '../store/types';

import { FlexGrow } from './FlexContainers';
import * as cardsActions from '../features/cards/cards-actions';
import { getSelectedCardId } from '../features/cards/cards-selectors';
import { push } from 'connected-react-router/immutable';
import { FabAdd, FabDelete, FabEdit } from './AppFabs';

const StyledActionBar = styledMui(MuiAppBar)({
  position: 'relative',
  display: 'flex',
  alignSelf: 'flex-end',
});

const ActionButtonsContainer = styledComponents.div({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
});

const mapStateToProps = (state: State) => ({
  selectedCardId: getSelectedCardId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onClickAdd: () => dispatch(push('/cards/create')),
  onClickDelete: (cardId: string) => dispatch(cardsActions.deleteCard(cardId)),
  onClickEdit: () => dispatch(push('/cards/edit')),
});

type ActionBarProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const ActionBar: React.FC<ActionBarProps> = ({ selectedCardId, onClickAdd, onClickDelete, onClickEdit }) => (
  <StyledActionBar>
    <Toolbar>
      <ActionButtonsContainer>
        {selectedCardId !== '' ? (
          [
            <FabEdit key="fab-edit" onClick={onClickEdit} />,
            <FabDelete key="fab-delete" onClick={() => onClickDelete(selectedCardId)} />,
          ]
        ) : (
          <FabAdd onClick={onClickAdd} />
        )}
      </ActionButtonsContainer>
      <FlexGrow />
    </Toolbar>
  </StyledActionBar>
);

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar);
