import styled from 'styled-components/macro';
import { transparentize, lighten, timingFunctions } from 'polished';
import { Container as ProductCard } from 'components/ProductCard/styles';

interface IBadge {
  href?: string;
  to?: string;
}

const Badge = styled.div<IBadge>`
  display: flex;
  padding: 5px 12px;
  font-size: 12px;
  line-height: 20px;
  border-radius: 100px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 4%);
  background-color: ${({ theme }) => transparentize(0.5, theme.colors.black)};
  color: ${({ theme }) => theme.colors.white};
  fill: ${({ theme }) => theme.colors.white};
  transition: all ${timingFunctions('easeInQuad')} 0.25s;
  text-align: center;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  cursor: ${props => (props.onClick || props.to || props.href ? 'pointer' : 'default')};

  &:hover {
    background-color: ${({ theme }) => lighten(0.2, theme.colors.black)};
  }

  > svg {
    height: 18px;
    width: auto;
    &:first-child {
      margin-right: 5px;
    }
    &:last-child {
      margin-left: 5px;
    }
  }

  ${ProductCard} & {
    align-self: flex-start;
  }
`;

export default Badge;
