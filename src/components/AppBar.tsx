import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppBar as MuiAppBar, styled } from '@material-ui/core';

import { State, RootAction } from '../store/types';
import { AppTab } from '../features/app/app-types';

import * as appActions from '../features/app/app-actions';
import * as appSelectors from '../features/app/app-selectors';

import AppTabs from './AppTabs';
import { TypoAppTitle } from './Typographies';

const AppBarStyled = styled(MuiAppBar)({
  position: 'fixed',
  paddingTop: 10,
});

const mapStateToProps = (state: State) => {
  return {
    currentTab: appSelectors.getCurrentTab(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => ({
  onChangeTab: (tab: AppTab) => dispatch(appActions.changeCurrentTab(tab)),
});

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const AppBar: React.FC<Props> = ({ currentTab, onChangeTab }) => (
  <AppBarStyled>
    <TypoAppTitle align="center" variant="h5" gutterBottom={true}>
      CARDS AGAINST FLORA
    </TypoAppTitle>
    <AppTabs currentTab={currentTab} onChangeTab={onChangeTab} />
  </AppBarStyled>
);

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
