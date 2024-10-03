import { createGlobalStyle } from 'styled-components';
import NexonMaplestoryBold from '../fonts/NexonMaplestoryBold.woff2';
import NexonMaplestoryLight from '../fonts/NexonMaplestoryLight.woff2';

const GlobalFont = createGlobalStyle`
  @font-face {
      font-family: 'MaplestoryLight';
      src: local('MaplestoryLight'), url(${NexonMaplestoryLight}) format('woff2');
  }
    
  @font-face {
    font-family: 'MaplestoryBold';
    src: local('MaplestoryBold'), url(${NexonMaplestoryBold}) format('woff2');
  }
`;

export default GlobalFont;
