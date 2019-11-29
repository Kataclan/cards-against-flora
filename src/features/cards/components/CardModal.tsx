import React from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { history } from '../../../router';

import { CardTypes, Card } from '../cards-types';

import { ModalContainer } from '../../../components/AppModal';
import { FlexVContainer, FlexHContainer, FlexGrow } from '../../../components/FlexContainers';
import { TextField, Button, Modal, Fade, Backdrop } from '@material-ui/core';
import { ModalProps } from '@material-ui/core/Modal';
import { TypoModalTitle } from '../../../components/Typographies';

import * as selectors from '../cards-selectors';
import * as actions from '../cards-actions';

import { styled } from '@material-ui/styles';
import CardTypeSelector from './CardTypeSelector';
import { State } from '../../../store/types';
import { Dispatch } from 'redux';

export const TextFieldContainer = styled(TextField)({
  width: '100%',
  height: 100,
});

const mapStateToProps = (state: State) => ({
  card: selectors.getCard(state, selectors.getSelectedCardId(state)),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onClickSave: (cardType: CardTypes, cardTxt: string) =>
    dispatch(
      actions.addCard({
        uid: uuid.v1(),
        __type: cardType,
        text: cardTxt,
        dateAdded: new Date(),
        dateModified: new Date(),
      } as Card),
    ),
  onClickEdit: (card: Card) => dispatch(actions.updateCard(card)),
  onClickClose: () => history.goBack(),
});

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & ModalProps;

const CardModal: React.FC<Props> = props => {
  const { card, onClickSave, onClickClose, onClickEdit, ...rest } = props;

  const [selectedCardType, setCardType] = React.useState(card ? card.__type : CardTypes.Fresh);

  const [cardText, setCardsText] = React.useState(
    card ? (card.__type === CardTypes.Rotten ? card.text : card.text) : '',
  );

  const handleChangeCardType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardType(e.target.value === CardTypes.Fresh ? CardTypes.Fresh : CardTypes.Rotten);
  };

  const handleChangeCardTxt = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardsText(e.target.value);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      {...rest}
      open={true}
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
      onBackdropClick={onClickClose}
    >
      <Fade in={true}>
        <ModalContainer>
          <FlexHContainer width={'100%'}>
            <TypoModalTitle>{card ? 'Edit Card' : 'Create Card'}</TypoModalTitle>
          </FlexHContainer>
          <FlexVContainer>
            <CardTypeSelector selectedValue={selectedCardType} handleChange={handleChangeCardType} />
            <TextFieldContainer
              id="cards-text-textfield"
              label="Text"
              value={cardText}
              onChange={handleChangeCardTxt}
              multiline
              inputProps={{ style: { color: '#000' } }}
              rowsMax="4"
            />
          </FlexVContainer>
          <FlexHContainer alignItems={'flex-end'}>
            <FlexGrow />
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                if (card) {
                  card.__type = selectedCardType;
                  card.text = cardText;
                  onClickEdit(card);
                } else {
                  onClickSave(selectedCardType, cardText);
                }
              }}
            >
              Save
            </Button>
            <Button variant="contained" onClick={onClickClose}>
              Close
            </Button>
          </FlexHContainer>
        </ModalContainer>
      </Fade>
    </Modal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);
