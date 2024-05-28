import React, { useState } from "react";
import Shipping from "../components/shipping/Shipping";
import { ShippingProvider } from "../components/shipping/ShippingProvider";
import { CartProvider } from "../components/cart/CartProvider";

const DopravaPage = () => {
  const [payment, setPayment] = useState("");

  return (
    <CartProvider>
      <ShippingProvider>
        <Shipping payment={payment} setPayment={setPayment} />
      </ShippingProvider>
    </CartProvider>
  );
};

export default DopravaPage;
