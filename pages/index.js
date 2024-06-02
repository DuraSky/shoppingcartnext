import React, { useState } from "react";
import { ShippingProvider } from "../components/shipping/ShippingProvider";
import { CartProvider } from "../components/cart/CartProvider";
import ShoppingCart from "../components/cart/Cart";
import PersonalInfo from "../components/personalInfo/PersonalInfo";
import Header from "../components/header/Header";
import { ShippingWrapper } from "../components/shipping/ShippingWrapper";
import GlobalStyle from "../components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "../components/Theme";
import { useRouter } from "next/router";
import Head from "next/head";

const App = () => {
  const [payment, setPayment] = useState("");
  const [showDiscountForm, setShowDiscountForm] = useState(true);
  const router = useRouter();
  const { view } = router.query;

  return (
    <CartProvider>
      <ShippingProvider>
        <ThemeProvider theme={theme}>
          <Head>
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
              rel="stylesheet"
            />
          </Head>
          <GlobalStyle />
          <Header currentStep={view} />
          {view === "shipping" ? (
            <ShippingWrapper payment={payment} setPayment={setPayment} />
          ) : (
            <ShoppingCart
              showDiscountForm={showDiscountForm}
              setShowDiscountForm={setShowDiscountForm}
              payment={payment}
              setPayment={setPayment}
            />
          )}
          {/* <PersonalInfo /> */}
        </ThemeProvider>
      </ShippingProvider>
    </CartProvider>
  );
};

export default App;
