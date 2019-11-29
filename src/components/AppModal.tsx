import styledComponents from 'styled-components';
import styledTS from 'styled-components-ts';
import MuiModal from '@material-ui/core/Modal';
import { styled } from '@material-ui/styles';

export const Modal = styled(MuiModal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ModalContainer = styledTS(styledComponents.div)({
  backgroundColor: '#FFFF',
  border: '2px solid #000',
  padding: 10,
});
