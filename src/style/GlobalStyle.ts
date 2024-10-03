import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
  *, *::before, *::after {
    font-family : "MaplestoryLight";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
