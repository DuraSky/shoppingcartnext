import React from "react";
import { StyledPaymentRecap } from "./paymentRecapStyle";

import { HiOutlineCreditCard } from "react-icons/hi2";

export const PaymentRecap = ({
  selectedPaymentOption,
  selectedPaymentOptionPriceCurrency,
}) => {
  return (
    <StyledPaymentRecap>
      <div className="mainInfo">
        <HiOutlineCreditCard style={{ width: "30px", height: "30px" }} />
        <p>
          {selectedPaymentOption
            ? selectedPaymentOption
            : "Platba nebyla vybrána"}
        </p>
        <p className="price">
          {selectedPaymentOptionPriceCurrency !== undefined &&
          selectedPaymentOptionPriceCurrency !== null
            ? `${selectedPaymentOptionPriceCurrency}`
            : ""}
        </p>
      </div>
    </StyledPaymentRecap>
  );
};
