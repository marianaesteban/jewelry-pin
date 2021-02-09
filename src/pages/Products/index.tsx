import React from 'react';
import { IProductsEntity } from 'types/api/Product';
import { Waypoint } from 'react-waypoint';
import Masonry from 'components/Masonry';
import ProductCard from 'components/ProductCard';
import { useProductsContext } from 'contexts/GlobalState';

const Products = () => {
  const { products, loadMoreProducts, hasMoreProducts, isFetching } = useProductsContext();
  if (isFetching) return <div>Loading...</div>;
  return (
    <>
      <Masonry>
        {products.map((product: IProductsEntity) => (
          <ProductCard
            key={product.id}
            productId={product.id}
            productImages={product.variant_images}
            productName={product.name}
            productSlug={product.slug}
          />
        ))}
      </Masonry>
      {hasMoreProducts && <Waypoint onEnter={loadMoreProducts} />}
    </>
  );
};

export default Products;
