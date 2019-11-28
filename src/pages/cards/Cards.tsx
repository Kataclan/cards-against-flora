import { State } from '../../store/types';
import React from 'react';
import { connect } from 'react-redux';

import Main from '../../layouts/Main';
import * as cardsSelectors from '../../features/cards/cards-selectors';
// import LoadingFLower from '../../components/LoadingFlower';
import CardList from '../../features/cards/components/CardList';

const mapStateToProps = (state: State) => {
  return {
    isFetchingCards: cardsSelectors.getIsFetchingCards(state),
  };
};

type Props = ReturnType<typeof mapStateToProps>;

const CardsPage: React.FC<Props> = ({ isFetchingCards }) => (
  // <Main>{isFetchingCards ? <LoadingFLower full={true} /> : <CardList />}</Main>
  <Main>{<CardList />}</Main>
);

export default connect(mapStateToProps)(CardsPage);
