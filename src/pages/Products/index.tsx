import React from 'react';
import { useFetchProducts } from 'hooks/useFetchProducts';
import { IProducts, IProductsEntity } from 'types/api/Product';
import Masonry from 'components/Masonry';
import ProductCard from 'components/ProductCard';

const Products = () => {
  const { isFetching, products } = useFetchProducts();
  if (isFetching) return null;
  return (
    <Masonry>
      {products.map((category: IProducts) =>
        category.products?.map(
          (product: IProductsEntity, index) =>
            index === 1 && (
              <ProductCard key={product.id} productImages={product.variant_images} productName={product.name} productSlug={product.slug} />
            )
        )
      )}
    </Masonry>
  );
};

export default Products;
