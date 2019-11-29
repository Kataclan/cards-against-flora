import React from 'react';
import { connect } from 'react-redux';

import { State } from '../../store/types';
import * as cardsSelectors from '../../features/cards/cards-selectors';

import CardList from '../../features/cards/components/CardList';
import LoadingFLower from '../../components/LoadingFlower';

const mapStateToProps = (state: State) => ({
  isFetchingCards: cardsSelectors.getIsFetchingCards(state),
});

type Props = ReturnType<typeof mapStateToProps>;

const CardsPage: React.FC<Props> = ({ isFetchingCards }) =>
  isFetchingCards ? <LoadingFLower full={true} /> : <CardList />;

export default connect(mapStateToProps)(CardsPage);
