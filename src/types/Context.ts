import { IProducts } from 'types/api/Product';

export interface IContextValue {
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

export interface IProvider {
  children: React.ReactNode;
}
