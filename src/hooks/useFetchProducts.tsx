import React, { useState, useEffect } from 'react';

export const useFetchProducts = () => {
  const [data, setData] = useState<any>([]); //TODO: Type data response
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    setIsFetching(true);
    const apiUrl = `http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/shop_all.json`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(products => {
        setData(products);
        setIsFetching(false);
      });
  }, [setData, setIsFetching]);

  return { products: data, isFetching: isFetching };
};
