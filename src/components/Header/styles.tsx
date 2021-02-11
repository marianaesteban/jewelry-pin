import styled, { css } from 'styled-components/macro';
import { transparentize, lighten, timingFunctions } from 'polished';

interface IMenuItem {
  isActive: boolean;
}

export const Container = styled.header`
  background: ${({ theme }) => transparentize(0.2, theme.colors.white)};
  color: ${({ theme }) => theme.colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  height: 60px;
  z-index: 999;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 20px;
  > ul {
    all: unset;
  }
`;

export const MenuItem = styled.li<IMenuItem>`
  all: unset;
  display: inline-flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.gray};
  margin: 0 5px;
  border-radius: 100px;
  border: 2px solid;
  border-color: transparent;
  cursor: pointer;
  transition: all ${timingFunctions('easeInQuad')} 0.25s;
  text-decoration: none;

  &:hover {
    border-color: ${({ theme }) => lighten(0.25, theme.colors.gray)};
  }

  > a {
    padding: 5px 20px;
    color: ${({ theme }) => theme.colors.gray};
    text-decoration: none;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background: ${({ theme }) => lighten(0.25, theme.colors.gray)};
      color: ${({ theme }) => theme.colors.black};

      &:hover {
        background: ${({ theme }) => lighten(0.25, theme.colors.gray)};
      }

      > a {
        color: ${({ theme }) => theme.colors.black};
      }
    `}
`;
