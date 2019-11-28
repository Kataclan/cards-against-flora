import { State } from '../../../store/types';
import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../cards-selectors';

import { ItemList } from '../../../components/ItemList';
import { FlexVContainer } from '../../../components/FlexContainers';
import EmptyPage from '../../../components/EmptyPage';
import { Card } from '../cards-types';

const mapStateToProps = (state: State) => ({
  cards: selectors.getCards(state),
});

const dispatchProps = {};

type ListProps = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const CardListItem: React.FC<Card> = card => <div>{card.uid}</div>;

const CardList: React.FC<ListProps> = ({ cards }) => {
  if (cards.count() === 0) {
    return <EmptyPage txt={`There's no cards created yet`} />;
  }

  return (
    <FlexVContainer>
      <ItemList items={cards.toIndexedSeq().toArray()} itemRenderer={CardListItem} />
    </FlexVContainer>
  );
};

export default connect(mapStateToProps, dispatchProps)(CardList);
