import React from 'react';
import { ReactComponent as Favorite } from 'assets/svg/favorite.svg';
import { ReactComponent as FavoriteOutlined } from 'assets/svg/favorite_border.svg';
import { StyledLikeButton } from './styles';

const LikeButton = () => {
  return (
    <StyledLikeButton title='Like'>
      <FavoriteOutlined />
    </StyledLikeButton>
  );
};

export default LikeButton;
