import { State } from '../../../store/types';
import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../decks-selectors';

const mapStateToProps = (state: State) => ({
  isLoading: selectors.getIsFetchingDecks(state),
  decks: selectors.getDecks(state),
});

const dispatchProps = {};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const DeckList: React.FC<Props> = ({ isLoading, decks }) => {
  if (isLoading) {
    return <p style={{ textAlign: 'center' }}>Loading decks...</p>;
  }

  if (decks.count() === 0) {
    return <p style={{ textAlign: 'center' }}>No decks yet, please create new...</p>;
  }

  return (
    <ul>
      {decks.map(deck => (
        <li key={deck.uid}>{deck.displayName}</li>
      ))}
    </ul>
  );
};

export default connect(mapStateToProps, dispatchProps)(DeckList);
