import { State } from '../store/types';
import React from 'react';
import { connect } from 'react-redux';

import Main from '../layouts/Main';
import * as appSelectors from '../features/app/app-selectors';
import LoadingFlower from '../components/LoadingFlower';

const mapStateToProps = (state: State) => {
  return {
    isLoadingApp: appSelectors.getIsLoadingApp(state),
  };
};

type Props = ReturnType<typeof mapStateToProps>;

const Home: React.FC<Props> = (props: Props) =>
  props.isLoadingApp ? <LoadingFlower full={true} /> : <Main>HOME</Main>;

export default connect(mapStateToProps)(Home);
