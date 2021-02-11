import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { themes } from './theme';

type ThemeType = typeof themes.main;

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${normalize()}

  body {
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSizes.default};
    font-family: ${({ theme }) => theme.fontFamilies.default};
  }

  main {
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 20px;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    outline: inherit;
    background: transparent;
    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;
    line-height: normal;
    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none; 
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
