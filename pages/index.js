// pages/index.js
import React, { useState, useEffect } from "react";
import CombinedProvider from "../components/CombinedProvider";
import ShoppingCart from "../components/cart/Cart";
import Header from "../components/header/Header";
import { ShippingWrapper } from "../components/shipping/ShippingWrapper";
import GlobalStyle from "../components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "../components/Theme";
import { useRouter } from "next/router";
import Head from "next/head";
import { ThankYou } from "../components/thankyouPage/ThankYou";

const App = () => {
  const [formErrors, setFormErrors] = useState({});
  const router = useRouter();
  const { asPath } = router;



  let view;
  if (asPath === "/vas-kosik") {
    view = "cart";
  } else if (asPath === "/doprava-a-platba") {
    view = "shipping";
  } else if (asPath === "/dekujeme") {
    view = "thankyou";
  } else {
    view = "cart"; // Default view
  }

  return (
      <CombinedProvider>
        <ThemeProvider theme={theme}>
          <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
                rel="stylesheet"
            ></link>
          </Head>
          <GlobalStyle />
          <Header currentStep={view} />
          {view === "shipping" ? (
              <ShippingWrapper
                  formErrors={formErrors}
                  setFormErrors={setFormErrors}
              />
          ) : view === "thankyou" ? (
              <ThankYou />
          ) : (
              <ShoppingCart />
          )}
        </ThemeProvider>
      </CombinedProvider>
  );
};

export default App;
