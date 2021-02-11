import React from 'react';
import { IProductsEntity } from 'types/api/Product';
import { Waypoint } from 'react-waypoint';
import Masonry from 'components/Masonry';
import ProductCard from 'components/ProductCard';
import Flex from 'components/Flex';
import Loading from 'components/Loading';
import { useProductsContext } from 'contexts/GlobalState';

const Products = () => {
  const { products, loadMoreProducts, hasMoreProducts, isFetching } = useProductsContext();
  if (isFetching)
    return (
      <Flex alignItems='center'>
        <Loading />
      </Flex>
    );
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
      <Waypoint onEnter={loadMoreProducts}>{hasMoreProducts ? <div>Loading...</div> : null}</Waypoint>
    </>
  );
};

export default Products;
