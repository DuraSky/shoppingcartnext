// pages/kosik.js
import React, { useState } from "react";
import PersonalInfo from "../components/personalInfo/PersonalInfo";
import { CartProvider } from "../components/cart/CartProvider";
import { ShippingProvider } from "../components/shipping/ShippingProvider";

const InfoPage = () => {
  return (
    <CartProvider>
      <ShippingProvider>
        <PersonalInfo />
      </ShippingProvider>
    </CartProvider>
  );
};

export default InfoPage;
