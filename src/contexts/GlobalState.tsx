import React, { createContext, useState, useCallback, useEffect, useMemo } from 'react';
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
  favorites: IProducts[];
  addFavorite: (favorite: number) => void;
  loadMoreProducts: () => void;
  getAllProducts: (products: IProducts[]) => void;
  getBracelets: (products: IProducts[]) => void;
  getEarrings: (products: IProducts[]) => void;
  getSingleEarrings: (products: IProducts[]) => void;
  getPendants: (products: IProducts[]) => void;
  getRings: (products: IProducts[]) => void;
}

interface IProvider {
  children: React.ReactNode;
}

const initialState = {
  isFetching: false,
  products: [],
  favorites: [],
  addFavorite: () => [],
  loadMoreProducts: () => {},
  getAllProducts: () => [],
  getBracelets: () => [],
  getEarrings: () => [],
  getSingleEarrings: () => [],
  getPendants: () => [],
  getRings: () => []
};

const ProductsContext = createContext<IContextValue>(initialState);

export const ProductsProvider = ({ children }: IProvider) => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [productLimit, setProductLimit] = useState<number>(15);
  const [favoritesIds, setFavoritesIds] = useState<number[]>([]);
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

  const loadMoreProducts = () => setProductLimit((current: number) => current + 15);

  const filteredList = useMemo(() => filterList(products).slice(0, productLimit), [products, productLimit]);
  const favoritesList = useMemo(
    () =>
      filterList(allProducts)
        .filter(({ id }: IProducts) => favoritesIds.includes(id))
        .slice(0, productLimit),
    [favoritesIds]
  );

  useEffect(() => {
    setProducts(allProducts);
  }, [allProducts]);

  //TODO: CONSIDER USING USEREDUCER FOR HANDLING THIS
  const addFavorite = useCallback(favorite => setFavoritesIds((current: number[]) => [...current, favorite]), [setFavoritesIds, products]);

  //TODO: THIS COULD PROBABLY BE IMPROVED TO PREVENT REPETITION
  const getBracelets = () => {
    setProducts(bracelets);
    setProductLimit(15);
  };
  const getEarrings = () => {
    setProducts(earrings);
    setProductLimit(15);
  };
  const getSingleEarrings = () => {
    setProducts(singleEarrings);
    setProductLimit(15);
  };
  const getPendants = () => {
    setProducts(pendants);
    setProductLimit(15);
  };
  const getRings = () => {
    setProducts(rings);
    setProductLimit(15);
  };
  const getAllProducts = () => {
    setProducts(allProducts);
    setProductLimit(15);
  };

  return (
    <ProductsContext.Provider
      value={{
        isFetching: isFetching,
        products: filteredList,
        favorites: favoritesList,
        loadMoreProducts,
        getAllProducts,
        getBracelets,
        getEarrings,
        getSingleEarrings,
        getPendants,
        getRings,
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
