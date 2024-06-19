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
import { VoucherRecap } from "./voucherRecap/VoucherRecap";

const Recap = () => {
  const { state: cartState } = useContext(CartContext);
  const { state: shippingState } = useContext(ShippingContext);

  const { cart, cartTotal, selectedSurchargeProducts, appliedVouchers } =
    cartState;
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

      <ItemListing
        cart={cart}
        selectedSurchargeProducts={selectedSurchargeProducts}
      />

      {appliedVouchers.length > 0 && (
        <div className="recapVoucher">
          <VoucherRecap appliedVouchers={appliedVouchers} />
        </div>
      )}

      <div className="recapOption">
        <img src="/assets/truck5.svg" width="30px" alt="" />
        <ShippingRecap
          selectedShippingOption={selectedShippingOption}
          selectedShippingPrice={selectedShippingPrice}
        />
      </div>

      <div className="recapOption">
        <img src="/assets/card.png" width="30px" alt="" />
        <PaymentRecap
          selectedPaymentOption={selectedPaymentOption}
          selectedPaymentOptionPrice={selectedPaymentOptionPrice}
        />
      </div>

      <div className="recapOption final">
        <h3>Celkem</h3>
        <CartAndShippingTotal cartTotalCalc={cartTotalCalc} />
      </div>
    </StyledRecap>
  );
};

export default Recap;
