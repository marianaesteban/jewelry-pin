import styled from 'styled-components/macro';
import { transparentize, cover, timingFunctions } from 'polished';

export const Container = styled.figure`
  margin: 0;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`;

export const HoverContent = styled.div`
  background: ${({ theme }) => transparentize(0.6, theme.colors.primary)};
  ${cover()}
  display: flex;
  flex-direction: column;
  padding: 10px;
  opacity: 0;
  transition: opacity ${timingFunctions('easeInQuad')} 0.4s;

  ${Container}:hover & {
    opacity: 1;
  }
`;

export const Caption = styled.figcaption`
  margin: auto;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;
