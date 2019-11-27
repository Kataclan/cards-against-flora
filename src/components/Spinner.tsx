import styledComponents from 'styled-components';
import styledTS from 'styled-components-ts';
import { GIFFlowerLoading } from '../assets';

export type SpinnerSrcs = typeof GIFFlowerLoading;

export enum SpinnerSizes {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  BIG = 'BIG',
}

export type SpinnerProps = {
  gifSize?: SpinnerSizes;
  src?: SpinnerSrcs;
};

const Spinner = styledTS<SpinnerProps>(styledComponents.img)`
  url: ${props => `(${props.src})`};
`;

export default Spinner;
