import React, { useCallback } from 'react';
import { ReactComponent as Favorite } from 'assets/svg/favorite.svg';
import { ReactComponent as FavoriteOutlined } from 'assets/svg/favorite_border.svg';
import { StyledLikeButton } from './styles';
import { useProductsContext } from 'contexts/GlobalState';
interface IProps {
  productId: number;
}

const LikeButton = ({ productId }: IProps) => {
  const { favorites, addFavorite } = useProductsContext();
  const handleFavorite = () => {
    addFavorite(productId);
  };
  const isFavorite = favorites.find((favorite: any) => favorite.id === productId);
  return (
    <StyledLikeButton title='Like' onClick={handleFavorite}>
      {isFavorite ? <Favorite /> : <FavoriteOutlined />}
    </StyledLikeButton>
  );
};

export default LikeButton;
