import { useProductsContext } from 'contexts/GlobalState';

export const useMenuItems = () => {
  const { allProducts, bracelets, earrings, singleEarrings, pendants, rings } = useProductsContext();

  return [
    {
      name: 'All',
      value: 'all',
      productList: allProducts
    },
    {
      name: 'Bracelets',
      value: 'bracelets',
      productList: bracelets
    },
    {
      name: 'Earrings',
      value: 'earrings',
      productList: earrings
    },
    {
      name: 'Single Earrings',
      value: 'singleEarrings',
      productList: singleEarrings
    },
    {
      name: 'Pendants',
      value: 'pendants',
      productList: pendants
    },
    {
      name: 'Rings',
      value: 'rings',
      productList: rings
    }
  ];
};
