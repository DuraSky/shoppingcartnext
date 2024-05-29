import React, { useState } from "react";
import Shipping from "../components/shipping/Shipping";
import { ShippingProvider } from "../components/shipping/ShippingProvider";
import { CartProvider } from "../components/cart/CartProvider";
import ShoppingCart from "../components/cart/Cart";
import PersonalInfo from "../components/personalInfo/PersonalInfo";
import Header from "../components/header/Header";
import { ShippingWrapper } from "../components/shipping/ShippingWrapper";

const App = () => {
  const [payment, setPayment] = useState("");
  const [showDiscountForm, setShowDiscountForm] = useState(true);

  // return (
  //   <CartProvider>
  //     <ShippingProvider>
  //       {/* <Header /> */}
  //       <ShoppingCart
  //         showDiscountForm={showDiscountForm}
  //         setShowDiscountForm={setShowDiscountForm}
  //       />
  //       <Shipping payment={payment} setPayment={setPayment} />
  //       <PersonalInfo />
  //     </ShippingProvider>
  //   </CartProvider>
  // );

  return (
    <CartProvider>
      <ShippingProvider>
        <Header />

        <ShoppingCart
          showDiscountForm={showDiscountForm}
          setShowDiscountForm={setShowDiscountForm}
        />
        <ShippingWrapper payment={payment} setPayment={setPayment} />
        <PersonalInfo />
      </ShippingProvider>
    </CartProvider>
  );
};

export default App;
