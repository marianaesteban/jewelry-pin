import styled from 'styled-components/macro';
import { lighten, transparentize } from 'polished';
import Button from 'components/Button';

export const StyledLikeButton = styled(Button)`
  padding: 5px;
  align-self: flex-end;
  background-color: ${({ theme }) => lighten(0.95, theme.colors.black)};
  border: 1px solid transparent;
  box-shadow: 0 1px 4px ${({ theme }) => transparentize(0.75, theme.colors.black)};
  fill: ${({ theme }) => theme.colors.gray};

  &:hover {
    background-color: ${({ theme }) => lighten(0.9, theme.colors.black)};
  }

  > svg {
    width: 20px;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    padding: 8px;
  }
`;
