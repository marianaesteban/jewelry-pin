import React from 'react';
import { RenderResult } from '@testing-library/react';
import { render } from 'helpers/testHelper';
import App from './App';

describe('GIVEN App', () => {
  let wrapper: RenderResult;
  beforeEach(() => {
    wrapper = render(<App />);
  });
  test('should render 1 header', () => {
    expect(wrapper.getAllByTestId('app-header')).toHaveLength(1);
  });
  test('should render 1 main section', () => {
    expect(wrapper.getAllByTestId('app-main')).toHaveLength(1);
  });
});
