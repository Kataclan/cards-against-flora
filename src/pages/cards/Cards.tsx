import React from 'react';
import { connect } from 'react-redux';

import { State } from '../../store/types';
import * as cardsSelectors from '../../features/cards/cards-selectors';

import CardList from '../../features/cards/components/CardList';
import LoadingFlower from '../../components/LoadingFlower';
import Main from '../../layouts/Main';
import { FlexHContainer } from '../../components/FlexContainers';

const mapStateToProps = (state: State) => ({
  isFetchingCards: cardsSelectors.getIsFetchingCards(state),
});

type Props = ReturnType<typeof mapStateToProps>;

const CardsPage: React.FC<Props> = ({ isFetchingCards }) => (
  <Main>
    {isFetchingCards ? (
      <LoadingFlower />
    ) : (
      <FlexHContainer full={true} overflow={'auto'} flexWrap={'wrap'}>
        <CardList />
      </FlexHContainer>
    )}
  </Main>
);

export default connect(mapStateToProps)(CardsPage);
