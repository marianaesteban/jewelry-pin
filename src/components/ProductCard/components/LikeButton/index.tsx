import React from 'react';
import { useProductsContext } from 'contexts/GlobalState';
import { IProductsEntity } from 'types/api/Product';
import { ReactComponent as Favorite } from 'assets/svg/favorite.svg';
import { ReactComponent as FavoriteOutlined } from 'assets/svg/favorite_border.svg';
import { StyledLikeButton } from './styles';
interface ILikeButton {
  productId: number;
}

const LikeButton = ({ productId }: ILikeButton) => {
  const { favorites, addFavorite } = useProductsContext();
  const handleFavorite = () => {
    addFavorite(productId);
  };
  const isFavorite = favorites.find((favorite: IProductsEntity) => favorite.id === productId);
  return (
    <StyledLikeButton title='Like' onClick={handleFavorite}>
      {isFavorite ? <Favorite /> : <FavoriteOutlined />}
    </StyledLikeButton>
  );
};

export default LikeButton;
