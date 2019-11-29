import React from 'react';
import { connect } from 'react-redux';

import { State } from '../store/types';
import * as appSelectors from '../features/app/app-selectors';

import LoadingFLower from '../components/LoadingFlower';

const mapStateToProps = (state: State) => ({
  isLoadingApp: appSelectors.getIsLoadingApp(state),
});

type Props = ReturnType<typeof mapStateToProps>;

const AppPage: React.FC<Props> = ({ isLoadingApp }) => (isLoadingApp ? <LoadingFLower full={true} /> : null);

export default connect(mapStateToProps)(AppPage);
