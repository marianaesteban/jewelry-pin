import { ReactComponent as Logo } from 'assets/svg/logo.svg';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {opacity: 0}
  50% {opacity: 1}
  100% {opacity: 0}
`;

const Loading = styled(Logo)`
  animation: ${fadeIn} 2s ease-in-out infinite;
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 20px 0;
  width: 150px;
`;

export default Loading;
