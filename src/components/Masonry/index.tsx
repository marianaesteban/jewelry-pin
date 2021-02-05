import styled from 'styled-components/macro';

const Masonry = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  grid-auto-rows: calc((100vw / 5) - ((5 - 1) * 10px));
  > *:nth-child(2n) {
    grid-row: span 2;
  }
`;

export default Masonry;
