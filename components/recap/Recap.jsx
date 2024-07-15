import React, { useContext } from "react";
import { CartContext } from "../cart/CartProvider";
import { ShippingContext } from "../shipping/ShippingProvider";
import { ItemListing } from "./components/itemListing/ItemListing";
import { ShippingRecap } from "./components/shippingRecap/ShippingRecap";
import { PaymentRecap } from "./components/paymentRecap/PaymentRecap";
import { CartAndShippingTotal } from "./components/cartAndShippingTotal/CartAndShippingTotal";
import { StyledRecap } from "./recapStyle";
import { PageControl } from "../pageControl/PageControl";
import { StyledNextButton, StyledButtonWrapper } from "../Theme";
import Link from "next/link";
import { VoucherRecap } from "./voucherRecap/VoucherRecap";

const Recap = ({ handleGoBack, handleSubmit, buttonText }) => {
  const { state: cartState } = useContext(CartContext);
  const { state: shippingState } = useContext(ShippingContext);

  const { cart, cart_total, selectedSurchargeProducts, vouchers } = cartState;
  const {
    selectedShippingOption,
    selectedShippingPrice,
    selectedShippingPriceCurrency,
    selectedPaymentOption,
    selectedPaymentOptionPrice,
    selectedPaymentOptionPriceCurrency,
  } = shippingState;

  const cartTotalCalc = () => {
    console.log(
      "in calc" +
        cart_total +
        selectedPaymentOptionPrice +
        selectedShippingPrice
    );
    const result =
      cart_total + selectedPaymentOptionPrice + selectedShippingPrice;
    return result;
  };

  console.log("inside recap", cart);

  return (
    <StyledRecap>
      <h2>Rekaputilace objednavky</h2>

      <ItemListing
        cart={cart}
        selectedSurchargeProducts={selectedSurchargeProducts}
      />

      {vouchers.length > 0 && (
        <div className="recapVoucher">
          <VoucherRecap vouchers={vouchers} />
        </div>
      )}

      <div className="recapOption">
        <img src="/assets/truck5.svg" width="30px" alt="" />
        <ShippingRecap
          selectedShippingOption={selectedShippingOption}
          selectedShippingPriceCurrency={selectedShippingPriceCurrency}
        />
      </div>

      <div className="recapOption">
        <img src="/assets/card.png" width="30px" alt="" />
        <PaymentRecap
          selectedPaymentOption={selectedPaymentOption}
          selectedPaymentOptionPriceCurrency={
            selectedPaymentOptionPriceCurrency
          }
        />
      </div>

      <div className="recapOption final">
        <h3>Celkem</h3>
        <CartAndShippingTotal cartTotalCalc={cartTotalCalc} />
      </div>

      <PageControl
        handleGoBack={handleGoBack}
        handleSubmit={handleSubmit}
        buttonText={buttonText}
      />
    </StyledRecap>
  );
};

export default Recap;
