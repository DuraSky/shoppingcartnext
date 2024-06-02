import React from "react";
import { StyledPaymentRecap } from "./paymentRecapStyle";

export const PaymentRecap = ({
  selectedPaymentOption,
  selectedPaymentOptionPrice,
}) => {
  return (
    <StyledPaymentRecap>
      {selectedPaymentOption}
      {selectedPaymentOptionPrice}
    </StyledPaymentRecap>
  );
};
