import React from 'react';
import styledComponents from 'styled-components';
import styledTS from 'styled-components-ts';
import { ModalProps as MuiModalProps } from '@material-ui/core/Modal';
import MuiModal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { styled } from '@material-ui/styles';
import { FlexHContainer, FlexVContainer } from './FlexContainers';
import { TypoModalTitle } from './Typographies';

const Modal = styled(MuiModal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ModalContainer = styledTS(styledComponents.div)({
  backgroundColor: '#FFFF',
  border: '2px solid #000',
  padding: 10,
});

export type ModalProps = MuiModalProps & {
  title: string;
};

const FormModal: React.FC<ModalProps> = props => (
  <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    {...props}
    BackdropComponent={Backdrop}
    BackdropProps={{ timeout: 500 }}
  >
    <Fade in={props.open}>
      <ModalContainer>
        <FlexHContainer width={'100%'}>
          <TypoModalTitle>Transition modal</TypoModalTitle>
        </FlexHContainer>
        <FlexVContainer>{props.children}</FlexVContainer>
      </ModalContainer>
    </Fade>
  </Modal>
);

export default FormModal;
