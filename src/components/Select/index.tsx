import styled from 'styled-components/macro';
import { lighten } from 'polished';
import Select from 'react-select';
import { Container as HeaderContainer } from 'components/Header/styles';

const StyledSelect = styled(Select).attrs({
  classNamePrefix: 'select'
})`
  ${HeaderContainer} & {
    flex: 1;
    margin-right: 10px;
  }

  .select {
    &__control {
      border-radius: 0;
      border: 1px solid ${({ theme }) => lighten(0.9, theme.colors.black)};
      font-size: 12px;
      color: ${({ theme }) => theme.colors.black};
      letter-spacing: 1px;
      box-shadow: none;
      &:hover {
        border: 1px solid ${({ theme }) => lighten(0.75, theme.colors.black)};
      }
      ${HeaderContainer} & {
        min-width: 100px;
      }
    }
    &__placeholder,
    &__single-value {
      position: static;
      top: auto;
      left: auto;
      transform: none;
      max-width: none;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.black};
    }
    &__input input {
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.black};
    }
    &__indicator-separator {
      display: none;
    }
    &__dropdown-indicator svg {
      fill: ${({ theme }) => theme.colors.black};
      width: 16px;
    }
    &__menu {
      margin-top: 0;
      white-space: nowrap;
      width: auto;
      min-width: 100%;
      border-radius: 0;
    }
    &__option {
      color: ${({ theme }) => theme.colors.black};
      &--is-focused {
        background-color: ${({ theme }) => lighten(0.3, theme.colors.black)};
        color: ${({ theme }) => theme.colors.white};
        @media (max-width: ${({ theme }) => theme.device.sm}) {
          background-color: ${({ theme }) => theme.colors.white};
          color: ${({ theme }) => theme.colors.black};
        }
      }
      &:active,
      &--is-selected {
        background-color: ${({ theme }) => lighten(0.2, theme.colors.black)};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
export default StyledSelect;
