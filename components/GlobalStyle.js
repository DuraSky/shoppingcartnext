// src/components/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  body {
    //font-family: 'Roboto', sans-serif;
    font-family: "Roboto", sans-serif;
    height:100vh;
    width:100vw;
    background-color: ${({ theme }) => theme.tertiaryColor};
    //background-color: #ccc;
  }
`;

export default GlobalStyle;
