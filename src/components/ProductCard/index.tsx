import React from 'react';
import { IVariantImagesEntity } from 'types/api/Product';
import { ReactComponent as ExternalLink } from 'assets/svg/external_link.svg';
import Badge from 'components/Badge';
import LikeButton from './components/LikeButton';
import { Container, HoverContent, Image, Caption } from './styles';

export interface ICard extends React.HTMLAttributes<HTMLDivElement> {
  productImages?: IVariantImagesEntity[] | null;
  productName: string;
  productSlug: string;
  productId: number;
}
const BASE_URL = 'https://mejuri.com';
const SHOP_URL = 'https://mejuri.com/shop/products/';

const ProductCard = ({ productId, productImages, productName, productSlug, ...restProps }: ICard) => {
  return (
    <Container {...restProps}>
      {productImages && (
        <Image
          srcSet={`${BASE_URL}${productImages[0].attachment_url_medium} 480w,
          ${BASE_URL}${productImages[0].attachment_url_large} 800w`}
          sizes='(max-width: 600px) 480px,
          1280px'
          src={`${BASE_URL}${productImages[0].attachment_url_medium}`}
          alt={productName}
          loading='lazy'
        />
      )}
      <HoverContent>
        <LikeButton productId={productId} />
        <Caption>{productName}</Caption>
        <Badge as='a' href={`${SHOP_URL}${productSlug}`} target='_blank' rel='noopener noreferrer'>
          <ExternalLink />
          <span>mejuri.com</span>
        </Badge>
      </HoverContent>
    </Container>
  );
};

export default ProductCard;
