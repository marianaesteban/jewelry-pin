import React from 'react';
import { IProductsEntity } from 'types/api/Product';
import { useProductsContext } from 'contexts/GlobalState';
import { Link } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';
import { ReactComponent as Favorite } from 'assets/svg/favorite.svg';
import Masonry from 'components/Masonry';
import ProductCard from 'components/ProductCard';
import Button from 'components/Button';
import Flex from 'components/Flex';
import Loading from 'components/Loading';
import { Message } from './styles';

const Favorites = () => {
  const { isFetching, loadMoreProducts, hasMoreProducts, favorites } = useProductsContext();

  if (isFetching)
    return (
      <Flex alignItems='center'>
        <Loading />
      </Flex>
    );
  return (
    <>
      {favorites.length === 0 ? (
        <Flex flexDirection='column' alignItems='center'>
          <h2>You have no favorites saved</h2>
          <Message>
            Add some you like by clicking the <Favorite width='12px' height='12px' /> button on the images
          </Message>
          <Button as={Link} to={'/'}>
            See all products
          </Button>
        </Flex>
      ) : (
        <>
          <Masonry>
            {favorites.map((product: IProductsEntity) => (
              <ProductCard
                key={product.id}
                productId={product.id}
                productImages={product.variant_images}
                productName={product.name}
                productSlug={product.slug}
              />
            ))}
          </Masonry>
          <Waypoint onEnter={hasMoreProducts && loadMoreProducts} />
        </>
      )}
    </>
  );
};

export default Favorites;
