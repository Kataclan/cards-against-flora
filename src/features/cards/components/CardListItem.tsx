import React from 'react';
import styledComponents from 'styled-components';
import { styled as styledMui } from '@material-ui/core/styles';

import MuiCard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { Card, CardTypes } from '../cards-types';
import { FlexVContainer } from '../../../components/FlexContainers';
import { TypoCardContent } from '../../../components/Typographies';

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
  boxSizing: 'border-box',
});

const CardListItem: React.FC<{
  card: Card;
  isSelected: boolean;
  onClickCard: (id: string) => any;
}> = ({ card, isSelected, onClickCard }) => {
  const cardColors =
    card.__type === CardTypes.Rotten
      ? { txt: card.text, backGroundColor: '#000000', textColor: '#FFFFFF' }
      : { txt: card.text, backGroundColor: '#FFFFFF', textColor: '#000000' };
  return (
    <CardContainer>
      <CardListItemStyled
        onClick={() => onClickCard(card.uid)}
        style={{
          border: isSelected ? '2px solid brown' : 'none',
          backgroundColor: cardColors.backGroundColor,
          color: cardColors.textColor,
        }}
      >
        <FlexVContainer>
          <CardContent>
            <TypoCardContent variant="subtitle1">{cardColors.txt}</TypoCardContent>
          </CardContent>
        </FlexVContainer>
      </CardListItemStyled>
    </CardContainer>
  );
};

export default CardListItem;
