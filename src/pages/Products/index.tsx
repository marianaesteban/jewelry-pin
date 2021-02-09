import React from 'react';
import { IProductsEntity } from 'types/api/Product';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'components/Masonry';
import ProductCard from 'components/ProductCard';
import { useProductsContext } from 'contexts/GlobalState';

const Products = () => {
  const { products, loadMoreProducts, hasMoreProducts, isFetching } = useProductsContext();
  if (isFetching) return <div>Loading...</div>;
  return (
    //TODO: REPLACE THIS WITH A CUSTOM INTERSECTION OBSERVER - THIS LIBRARY IS THROWING WARNINGS AND THE ISSUE HASN'T BEEN SOLVED
    <InfiniteScroll dataLength={products.length} next={loadMoreProducts} hasMore={hasMoreProducts} loader={<h4>Loading...</h4>}>
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
    </InfiniteScroll>
  );
};

export default Products;
