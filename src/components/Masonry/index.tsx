import styled, { keyframes } from 'styled-components/macro';

const delayAnimation = (i: number, duration: number) => `
    &:nth-child(${i + 1}) {
      animation-delay: ${`${duration * (i + 50)}ms`};
    }
  `;

const getDelayAnimation = () => {
  let str = '';
  for (let index = 0; index < 10; index += 1) {
    str += delayAnimation(index, index);
  }
  return str;
};

const scaleUp = keyframes`
	0% { opacity: 0; }
	100% { -webkit-transform: scale(1); transform: scale(1); opacity: 1; }
`;

const Masonry = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  grid-auto-rows: calc((100vw / 5) - ((5 - 1) * 10px));

  > *:nth-child(2n) {
    grid-row: span 2;
  }

  > * {
    transform: scale(0);
    animation: ${scaleUp} 0.5s ease-in-out forwards;
    ${getDelayAnimation()};
  }

  @media (max-width: ${({ theme }) => theme.device.md}) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: calc((100vw / 4) - ((4 - 1) * 10px));
  }
  @media (max-width: ${({ theme }) => theme.device.sm}) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: calc((100vw / 3) - ((3 - 1) * 10px));
  }
  @media (max-width: ${({ theme }) => theme.device.xs}) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: calc((100vw / 2) - 10px);
  }
`;

export default Masonry;
