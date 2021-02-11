import styled, { css } from 'styled-components/macro';

interface IFlex {
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  display?: 'inline-flex' | 'flex';
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexFlow?: string | null;
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  width?: string;
}

const Flex = styled.div<IFlex>`
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ alignItems }) => alignItems};
  display: ${({ display }) => display};
  ${({ flexFlow }) =>
    !flexFlow &&
    css<IFlex>`
      flex-direction: ${({ flexDirection }) => flexDirection};
      flex-wrap: ${({ flexWrap }) => flexWrap};
    `}
  ${({ flexFlow }) =>
    flexFlow &&
    css<IFlex>`
      flex-flow: ${flexFlow};
    `}
  justify-content: ${({ justifyContent }) => justifyContent};
  width: ${({ width }) => width};
`;

Flex.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  display: 'flex',
  flexDirection: 'row',
  flexFlow: null,
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  width: 'auto'
};

export default Flex;
