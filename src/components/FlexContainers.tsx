import React from 'react';
import styledComponents from 'styled-components';
import styledTS from 'styled-components-ts';

type FlexContainerProps = React.CSSProperties & {
  full?: boolean;
  flex?: string;
  vertical?: boolean;
  alignItems?: string;
  justifyContent?: string;
  alignSelf?: string;
  flexWrap?: string;
  overflow?: string;
};

export const FlexContainer = styledTS<FlexContainerProps>(styledComponents.div)`
    display: flex;
    flex-direction: ${props => (props.vertical ? 'column' : 'row')};
    ${props => (props.flex ? `flex: ${props.flex}` : '')};
    ${props => (props.flexWrap ? `flex-wrap: ${props.flexWrap}` : '')};
    ${props => (props.full ? 'width:100%;height:100%;' : '')};
    ${props => (props.alignItems ? `align-items: ${props.alignItems}` : '')};
    ${props => (props.justifyContent ? `justify-content: ${props.justifyContent}` : '')};
    ${props => (props.alignSelf ? `align-self: ${props.alignSelf}` : '')};
    ${props => (props.overflow ? `overflow: ${props.overflow}` : '')};
`;

export const FlexVContainer: React.FC<FlexContainerProps> = props => <FlexContainer {...props} vertical={true} />;

export const FlexHContainer: React.FC<FlexContainerProps> = props => <FlexContainer {...props} vertical={false} />;

export const FlexGrow = styledTS(styledComponents.div)`
  flex-grow: 1;
`;
