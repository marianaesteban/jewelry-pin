import styled from 'styled-components/macro';
import { lighten, timingFunctions } from 'polished';

const Button = styled.button`
  display: flex;
  padding: 5px 12px;
  font-size: 14px;
  line-height: 30px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 4%);
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  fill: ${({ theme }) => theme.colors.white};
  transition: all ${timingFunctions('easeInQuad')} 0.25s;
  text-align: center;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => lighten(0.2, theme.colors.black)};
  }
`;

export default Button;
