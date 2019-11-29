import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, Route, Switch } from 'react-router';

import { State } from '../store/types';
import * as cardsSelectors from '../features/cards/cards-selectors';

import CardList from '../features/cards/components/CardList';
import CardModal from '../features/cards/components/CardModal';
import LoadingFlower from '../components/LoadingFlower';
import Main from '../layouts/Main';
import { FlexHContainer } from '../components/FlexContainers';
// import FormModal from '../../components/FormModal';

const mapStateToProps = (state: State) => ({
  isFetchingCards: cardsSelectors.getIsFetchingCards(state),
});

type Props = ReturnType<typeof mapStateToProps> & RouteComponentProps;

const CardsPage: React.FC<Props> = ({ isFetchingCards, match }) => (
  <Main>
    {isFetchingCards ? (
      <LoadingFlower />
    ) : (
      <FlexHContainer full={true} overflow={'auto'} flexWrap={'wrap'}>
        <CardList />
        <Switch>
          <Route path={`${match.url}/create`} component={CardModal} />
          <Route path={`${match.url}/edit`} component={CardModal} />
        </Switch>
      </FlexHContainer>
    )}
  </Main>
);

export default connect(mapStateToProps)(CardsPage);
