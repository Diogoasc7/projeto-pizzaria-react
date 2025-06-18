import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  .App {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
