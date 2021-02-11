import React from 'react';
import { RenderResult, waitFor, screen } from '@testing-library/react';
import { render } from 'helpers/testHelper';
import ProductCard, { ICard } from '.';

const setup = (props: ICard) => render(<ProductCard {...props} />);

const initialProps = {
  productImages: [
    {
      attachment_url_original: '/system/spree/products/18347/original/BoldHoops_earring_yg_hero_0189.jpg',
      attachment_url_mini: '/system/spree/products/18347/mini/BoldHoops_earring_yg_hero_0189.jpg',
      attachment_url_small: '/system/spree/products/18347/small/BoldHoops_earring_yg_hero_0189.jpg',
      attachment_url_medium: '/system/spree/products/18347/product/BoldHoops_earring_yg_hero_0189.jpg',
      attachment_url_large: '/system/spree/products/18347/large/BoldHoops_earring_yg_hero_0189.jpg'
    },
    {
      attachment_url_original: '/system/spree/products/6056/original/October_19_-_Studio-0136.jpg',
      attachment_url_mini: '/system/spree/products/6056/mini/October_19_-_Studio-0136.jpg',
      attachment_url_small: '/system/spree/products/6056/small/October_19_-_Studio-0136.jpg',
      attachment_url_medium: '/system/spree/products/6056/product/October_19_-_Studio-0136.jpg',
      attachment_url_large: '/system/spree/products/6056/large/October_19_-_Studio-0136.jpg'
    },
    {
      attachment_url_original: '/system/spree/products/6057/original/October_19_-_Studio-0140.jpg',
      attachment_url_mini: '/system/spree/products/6057/mini/October_19_-_Studio-0140.jpg',
      attachment_url_small: '/system/spree/products/6057/small/October_19_-_Studio-0140.jpg',
      attachment_url_medium: '/system/spree/products/6057/product/October_19_-_Studio-0140.jpg',
      attachment_url_large: '/system/spree/products/6057/large/October_19_-_Studio-0140.jpg'
    },
    {
      attachment_url_original: '/system/spree/products/18096/original/BoldHoops_earring_yg_hero_0189.jpg',
      attachment_url_mini: '/system/spree/products/18096/mini/BoldHoops_earring_yg_hero_0189.jpg',
      attachment_url_small: '/system/spree/products/18096/small/BoldHoops_earring_yg_hero_0189.jpg',
      attachment_url_medium: '/system/spree/products/18096/product/BoldHoops_earring_yg_hero_0189.jpg',
      attachment_url_large: '/system/spree/products/18096/large/BoldHoops_earring_yg_hero_0189.jpg'
    },
    {
      attachment_url_original: '/system/spree/products/18478/original/BoldHoops_earring_yg_alt1_0195.jpg',
      attachment_url_mini: '/system/spree/products/18478/mini/BoldHoops_earring_yg_alt1_0195.jpg',
      attachment_url_small: '/system/spree/products/18478/small/BoldHoops_earring_yg_alt1_0195.jpg',
      attachment_url_medium: '/system/spree/products/18478/product/BoldHoops_earring_yg_alt1_0195.jpg',
      attachment_url_large: '/system/spree/products/18478/large/BoldHoops_earring_yg_alt1_0195.jpg'
    },
    {
      attachment_url_original: '/system/spree/products/18489/original/BoldHoops_earring_yg_alt2_0175_(1).jpg',
      attachment_url_mini: '/system/spree/products/18489/mini/BoldHoops_earring_yg_alt2_0175_(1).jpg',
      attachment_url_small: '/system/spree/products/18489/small/BoldHoops_earring_yg_alt2_0175_(1).jpg',
      attachment_url_medium: '/system/spree/products/18489/product/BoldHoops_earring_yg_alt2_0175_(1).jpg',
      attachment_url_large: '/system/spree/products/18489/large/BoldHoops_earring_yg_alt2_0175_(1).jpg'
    }
  ],
  productName: 'Bold Hoops',
  productSlug: 'bold-hoops',
  productId: 546
};

describe('GIVEN ProductCard', () => {
  let wrapper: RenderResult;
  beforeEach(() => {
    wrapper = setup(initialProps);
  });

  it('should render a product image', () => {
    expect(wrapper.getByRole('img')).toBeInTheDocument();
    expect(wrapper.getByRole('img').getAttribute('src')).toBe(`https://mejuri.com${initialProps.productImages[0].attachment_url_medium}`);
  });

  it('should render the product name', () => {
    expect(wrapper.getByText('Bold Hoops')).toBeInTheDocument();
  });

  it('should render the product link', () => {
    expect(wrapper.getByText('mejuri.com').closest('a')?.href).toBe(`https://mejuri.com/shop/products/${initialProps.productSlug}`);
  });
});
