// pages/kosik.js
import React, { useState } from "react";
import ShoppingCart from "../components/cart/Cart";
import { CartProvider } from "../components/cart/CartProvider";

const KosikPage = () => {
  const [showDiscountForm, setShowDiscountForm] = useState(true);

  return (
    <CartProvider>
      <ShoppingCart
        showDiscountForm={showDiscountForm}
        setShowDiscountForm={setShowDiscountForm}
      />
    </CartProvider>
  );
};

export default KosikPage;
