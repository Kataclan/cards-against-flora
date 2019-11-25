import React from 'react';
import { FlexVContainer } from './FlexContainers';

import { GIFFlowerLoading } from '../assets';
import Spinner, { SpinnerSizes } from './Spinner';

type Props = {
  full?: boolean;
};

export const LoadingComponent:React.FC<Props> = 
({
  full,
}) => (<FlexVContainer full={full ? full : false}>
  <Spinner src={GIFFlowerLoading}  gifSize={SpinnerSizes.MEDIUM} />
</FlexVContainer>)
