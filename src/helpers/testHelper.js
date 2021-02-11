import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { themes } from 'styles/theme';

const renderHelper = ui => {
  return {
    ...render(<ThemeProvider theme={themes.main}>{ui}</ThemeProvider>)
  };
};
// override render method
export { renderHelper as render };
