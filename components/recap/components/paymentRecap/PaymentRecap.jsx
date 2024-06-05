import React from "react";
import { StyledPaymentRecap } from "./paymentRecapStyle";

export const PaymentRecap = ({
  selectedPaymentOption,
  selectedPaymentOptionPrice,
}) => {
  return (
    <StyledPaymentRecap>
      <p>
        {selectedPaymentOption
          ? selectedPaymentOption
          : "Platba nebyla vybrana"}
      </p>
      <p>
        {selectedPaymentOptionPrice !== undefined &&
        selectedPaymentOptionPrice !== null
          ? `${selectedPaymentOptionPrice} Kč`
          : ""}
      </p>
    </StyledPaymentRecap>
  );
};
