import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
  *, *::before, *::after {
    font-family : Maplestory;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #FFF8EB;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
