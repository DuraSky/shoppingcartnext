import React from "react";
import { StyledPaymentRecap } from "./paymentRecapStyle";

export const PaymentRecap = ({
  selectedPaymentOption,
  selectedPaymentOptionPrice,
}) => {
  return (
    <StyledPaymentRecap>
      <p>{selectedPaymentOption} </p>
      <p>{selectedPaymentOptionPrice} Kč</p>
    </StyledPaymentRecap>
  );
};
