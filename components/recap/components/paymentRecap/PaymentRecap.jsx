import React from "react";
import { StyledPaymentRecap } from "./paymentRecapStyle";

export const PaymentRecap = ({
  selectedPaymentOption,
  selectedPaymentOptionPriceCurrency,
}) => {
  return (
    <StyledPaymentRecap>
      <p>
        {selectedPaymentOption
          ? selectedPaymentOption
          : "Platba nebyla vybrána"}
      </p>
      <p>
        {selectedPaymentOptionPriceCurrency !== undefined &&
        selectedPaymentOptionPriceCurrency !== null
          ? `${selectedPaymentOptionPriceCurrency}`
          : ""}
      </p>
    </StyledPaymentRecap>
  );
};
