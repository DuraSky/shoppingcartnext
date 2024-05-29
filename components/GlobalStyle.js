// src/components/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background: #f0ece2;

;
    //line-height: 1.6;
    //background-color: #f0f0f0; /* Optional: set a default background color */
  }

  /* Additional global styles can go here */
`;

export default GlobalStyle;
