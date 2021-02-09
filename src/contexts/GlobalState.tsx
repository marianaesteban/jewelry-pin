import React, { createContext, useState, useEffect } from 'react';
import {
  useFetchAllProducts,
  useFetchBracelets,
  useFetchEarrings,
  useFetchSingleEarrings,
  useFetchPendants,
  useFetchRings
} from 'hooks/useFetchProducts';
import { IProducts, IProductsEntity } from 'types/api/Product';

interface IContextValue {
  isFetching: boolean;
  products: IProducts[];
  allProducts: IProducts[];
  bracelets: IProducts[];
  earrings: IProducts[];
  singleEarrings: IProducts[];
  pendants: IProducts[];
  rings: IProducts[];
  favorites: IProducts[];
  loadMoreProducts: () => void;
  hasMoreProducts: boolean;
  getProducts: (products: IProducts[]) => void;
  addFavorite: (favorite: number) => void;
}

interface IProvider {
  children: React.ReactNode;
}

const initialState = {
  isFetching: false,
  products: [],
  allProducts: [],
  bracelets: [],
  earrings: [],
  singleEarrings: [],
  pendants: [],
  rings: [],
  favorites: [],
  loadMoreProducts: () => {},
  hasMoreProducts: false,
  getProducts: () => [],
  addFavorite: () => []
};

const ProductsContext = createContext<IContextValue>(initialState);

export const ProductsProvider = ({ children }: IProvider) => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [productLimit, setProductLimit] = useState<number>(15);
  const [favoritesIds, setFavoritesIds] = useState<number[]>([]);
  const [hasMoreProducts, setHasMoreProducts] = useState<boolean>(false);
  const { products: allProducts, isFetching } = useFetchAllProducts();
  const { products: bracelets } = useFetchBracelets();
  const { products: earrings } = useFetchEarrings();
  const { products: singleEarrings } = useFetchSingleEarrings();
  const { products: pendants } = useFetchPendants();
  const { products: rings } = useFetchRings();

  const filterList = (products: IProducts[]) => {
    const productList = products
      .map((category: IProducts) => (!category.products ? [] : category.products.map((product: IProductsEntity) => product)))
      .flat();

    return productList.filter(
      (item: IProductsEntity, index: number, array: IProducts[]) =>
        array.findIndex((element: IProducts) => element.id === item.id) === index
    );
  };

  const loadMoreProducts = () => {
    setProductLimit((current: number) => current + 15);
    setHasMoreProducts(filterList(products).length > productLimit);
  };

  const filteredList = filterList(products).slice(0, productLimit);
  const favoritesList = filterList(allProducts)
    .filter(({ id }: IProducts) => favoritesIds.includes(id))
    .slice(0, productLimit);

  useEffect(() => {
    setProducts(allProducts);
    setHasMoreProducts(filterList(allProducts).length > productLimit);
  }, [allProducts, hasMoreProducts]);

  //TODO: CONSIDER USING USEREDUCER FOR HANDLING THIS
  const addFavorite = (favorite: number) => setFavoritesIds((current: number[]) => [...current, favorite]);

  const getProducts = (productList: IProducts[]) => {
    setProducts(productList);
    setProductLimit(15);
    setHasMoreProducts(filterList(products).length > productLimit);
  };

  return (
    <ProductsContext.Provider
      value={{
        isFetching: isFetching,
        products: filteredList,
        allProducts: allProducts,
        bracelets: bracelets,
        earrings: earrings,
        singleEarrings: singleEarrings,
        pendants: pendants,
        rings: rings,
        favorites: favoritesList,
        loadMoreProducts,
        hasMoreProducts,
        getProducts,
        addFavorite
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = (): any => {
  const context = React.useContext(ProductsContext);
  if (!context) {
    throw new Error('useFavoritesContext must be used in a component within a FavoritesProvider.');
  }
  return context;
};
