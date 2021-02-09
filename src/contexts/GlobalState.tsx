import React, { createContext, useState, useEffect } from 'react';
import {
  useFetchAllProducts,
  useFetchBracelets,
  useFetchEarrings,
  useFetchSingleEarrings,
  useFetchPendants,
  useFetchRings
} from 'hooks/useFetchProducts';
import { IProducts } from 'types/api/Product';
import { IContextValue, IProvider } from 'types/Context';
import { filterList } from 'helpers/listHelper';

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

  useEffect(() => {
    setProducts(allProducts);
    setHasMoreProducts(filterList(allProducts).length > productLimit);
  }, [allProducts]);

  const loadMoreProducts = () => {
    setProductLimit((current: number) => current + 15);
    setHasMoreProducts(filterList(products).length > productLimit);
  };

  //Limiting array of loaded products
  const filteredList = filterList(products).slice(0, productLimit);
  const favoritesList = filterList(allProducts)
    .filter(({ id }: IProducts) => favoritesIds.includes(id))
    .slice(0, productLimit);

  //TODO: CONSIDER USING USEREDUCER FOR HANDLING THIS
  const addFavorite = (favorite: number) => {
    //Check if favorite is already added
    const isFavorite = favoritesIds.some(favoriteId => favoriteId === favorite);
    //If already added then remove from array, if not, add it
    isFavorite
      ? setFavoritesIds((current: number[]) => current.filter(favoriteId => favoriteId !== favorite))
      : setFavoritesIds((current: number[]) => [...current, favorite]);
  };

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
