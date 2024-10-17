import React, { useState, useContext } from "react";
import CombinedProvider, {
  CombinedProviderContext,
} from "../components/CombinedProvider";
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
  const { slug } = router.query;

  let view;
  switch (slug) {
    case "vas-kosik":
      view = "cart";
      break;
    case "doprava-a-platba":
      view = "shipping";
      break;
    case "dekujeme":
      view = "thankyou";
      break;
    default:
      view = "cart";
      break;
  }

  return (
    <CombinedProvider>
      <ThemeProvider theme={theme}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
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
