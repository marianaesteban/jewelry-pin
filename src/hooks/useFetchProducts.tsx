import { useState, useEffect } from 'react';
import { IProducts } from 'types/api/Product';
import { API_ENDPOINTS } from './apiEndpoints';

const useFetchProducts = (endpoint: string) => {
  const [data, setData] = useState<IProducts[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const apiUrl = `${API_ENDPOINTS.BASE_URL}${endpoint}.json`;

  useEffect(() => {
    setIsFetching(true);
    fetch(apiUrl)
      .then(res => res.json())
      .then(products => {
        setData(products);
        setIsFetching(false);
      });
  }, [setData, setIsFetching]);

  return { products: data, isFetching: isFetching };
};

export const useFetchAllProducts = () => useFetchProducts(API_ENDPOINTS.ALL);
export const useFetchBracelets = () => useFetchProducts(API_ENDPOINTS.BRACELETS);
export const useFetchEarrings = () => useFetchProducts(API_ENDPOINTS.EARRIGNS);
export const useFetchSingleEarrings = () => useFetchProducts(API_ENDPOINTS.SINGLE_EARRIGNS);
export const useFetchPendants = () => useFetchProducts(API_ENDPOINTS.PENDANTS);
export const useFetchRings = () => useFetchProducts(API_ENDPOINTS.RINGS);
