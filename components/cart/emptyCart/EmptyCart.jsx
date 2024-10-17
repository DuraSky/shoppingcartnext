import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../GlobalStyle";
import { theme } from "../../Theme";
import { WrapperWithTopBar } from "../../header/wrapper/WrapperWithTopBar";
import { StyledEmptyCart } from "./emptyCartStyle";

export const YourCartIsEmpty = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WrapperWithTopBar />
      <StyledEmptyCart>
        <p>Váš košík je prázdný</p>
        <a href="https://www.zanapo.cz/">Zpět do eshopu</a>
      </StyledEmptyCart>
    </ThemeProvider>
  );
};
