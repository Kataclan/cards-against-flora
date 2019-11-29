import { State } from '../../../store/types';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as selectors from '../cards-selectors';
import * as actions from '../cards-actions';

import { ItemList } from '../../../components/ItemList';
import EmptyPage from '../../../components/EmptyPage';
import CardListItem from './CardListItem';

const mapStateToProps = (state: State) => ({
  cards: selectors.getCards(state),
  selectedCardId: selectors.getSelectedCardId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onClickCard: (cardId: string) => dispatch(actions.selectCard(cardId)),
});

type ListProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const CardList: React.FC<ListProps> = ({ cards, selectedCardId, onClickCard }) =>
  cards.count() === 0 ? (
    <EmptyPage txt={`There's no cards created yet`} />
  ) : (
    <ItemList
      items={cards.toIndexedSeq().toArray()}
      itemRenderer={item => (
        <CardListItem onClickCard={onClickCard} card={item} isSelected={item.uid === selectedCardId} />
      )}
    />
  );

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
