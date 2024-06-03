import React, { useContext } from "react";
import { CartContext } from "../cart/CartProvider";
import { ShippingContext } from "../shipping/ShippingProvider";
import { ItemListing } from "./components/itemListing/ItemListing";
import { ShippingRecap } from "./components/shippingRecap/ShippingRecap";
import { PaymentRecap } from "./components/paymentRecap/PaymentRecap";
import { CartAndShippingTotal } from "./components/cartAndShippingTotal/CartAndShippingTotal";
import { StyledRecap } from "./recapStyle";

import { StyledNextButton, StyledButtonWrapper } from "../Theme";
import Link from "next/link";

const Recap = () => {
  const { state: cartState } = useContext(CartContext);
  const { state: shippingState } = useContext(ShippingContext);

  const { cart, cartTotal } = cartState;
  const {
    selectedShippingOption,
    selectedShippingPrice,
    selectedPaymentOption,
    selectedPaymentOptionPrice,
  } = shippingState;

  const cartTotalCalc = () => {
    console.log(
      "in calc" + cartTotal + selectedPaymentOptionPrice + selectedShippingPrice
    );
    const result =
      cartTotal + selectedPaymentOptionPrice + selectedShippingPrice;
    return result;
  };

  return (
    <StyledRecap>
      <h2>Rekaputilace objednavky</h2>
      <div className="borderRecap"></div>

      <ItemListing cart={cart} />
      <div className="borderRecap"></div>

      <div className="recapOption">
        <h3>Doprava </h3>
        <ShippingRecap
          selectedShippingOption={selectedShippingOption}
          selectedShippingPrice={selectedShippingPrice}
        />
      </div>
      <div className="borderRecap"></div>

      <div className="recapOption">
        <h3>Platba</h3>
        <PaymentRecap
          selectedPaymentOption={selectedPaymentOption}
          selectedPaymentOptionPrice={selectedPaymentOptionPrice}
        />
      </div>
      <div className="borderRecap"></div>

      <div className="recapOption">
        <h3>Celkem</h3>
        <CartAndShippingTotal cartTotalCalc={cartTotalCalc} />
      </div>
    </StyledRecap>
  );
};

export default Recap;
