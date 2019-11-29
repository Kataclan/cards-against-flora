import React from 'react';
import styledComponents from 'styled-components';
import { styled as styledMui } from '@material-ui/core/styles';

import MuiCard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { Card, CardTypes, RottenCard, FreshCard } from '../cards-types';
import { FlexVContainer } from '../../../components/FlexContainers';
import { TypoCardTitle, TypoCardContent } from '../../../components/Typographies';

const CardContainer = styledComponents.div`
  width: 50%;
  padding: 10px;
  height: 200px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 25%;
  }
`;

const CardListItemStyled = styledMui(MuiCard)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

const CardListItem: React.FC<{
  card: Card;
  isSelected: boolean;
  onClickCard: (id: string) => any;
}> = ({ card, isSelected, onClickCard }) => (
  <CardContainer key={`card-list-item-${card.uid}`}>
    <CardListItemStyled
      onClick={() => onClickCard(card.uid)}
      style={{ border: isSelected ? '2px solid black' : 'none' }}
    >
      <FlexVContainer>
        <CardContent>
          <TypoCardTitle color="primary">{card.uid}</TypoCardTitle>
          <TypoCardContent variant="subtitle1" color="textSecondary">
            {card.__type === CardTypes.Rotten ? (card as RottenCard).declarationTxt : (card as FreshCard).fillingTxt}
          </TypoCardContent>
        </CardContent>
      </FlexVContainer>
    </CardListItemStyled>
  </CardContainer>
);

export default CardListItem;
