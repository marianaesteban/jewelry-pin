import React from 'react';
import { fireEvent, RenderResult } from '@testing-library/react';
import { render } from 'helpers/testHelper';
import LikeButton from '.';
import { ProductsContext, useProductsContext, ProductsProvider } from 'contexts/GlobalState';

describe('GIVEN App', () => {
  let wrapper: RenderResult;

  const initialValue = {
    isFetching: false,
    products: [],
    allProducts: [],
    bracelets: [],
    earrings: [],
    singleEarrings: [],
    pendants: [],
    rings: [],
    favorites: [],
    loadMoreProducts: jest.fn(),
    hasMoreProducts: false,
    getProducts: jest.fn(),
    addFavorite: jest.fn()
  };

  beforeEach(() => {
    wrapper = render(
      <ProductsContext.Provider value={initialValue}>
        <LikeButton productId={1} />
        <ProductsContext.Consumer>{value => value.favorites}</ProductsContext.Consumer>
      </ProductsContext.Provider>
    );
  });
  it('should render a button', () => {
    expect(wrapper.getByRole('button')).toBeInTheDocument();
  });
  it('should render call addFavorite on click', () => {
    const submitButton = wrapper.getByRole('button');
    fireEvent.click(submitButton);

    expect(initialValue.addFavorite).toHaveBeenCalledTimes(1);
  });
});
