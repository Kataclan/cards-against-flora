import { State } from '../store/types';
import React from 'react';
import { connect } from 'react-redux';

import Main from '../layouts/Main';
import * as appSelectors from '../features/app/app-selectors';
import { LoadingComponent } from '../components/LoadingFlower';

const mapStateToProps = (state: State) => ({
  isLoadingApp: appSelectors.getIsLoadingApp(state),
});

type Props = ReturnType<typeof mapStateToProps>;

const Home = (props:Props) =>
  props.isLoadingApp
  ? <LoadingComponent full={true} />
  : (
    <Main>
      HOME
    </Main>
  );

export default connect(mapStateToProps)(Home);