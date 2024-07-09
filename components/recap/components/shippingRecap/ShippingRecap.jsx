import React from "react";
import { StyledShippingRecap } from "./shippingRecapStyle";

export const ShippingRecap = ({
  selectedShippingOption,
  selectedShippingPriceCurrency,
}) => {
  return (
    <StyledShippingRecap>
      <p>{selectedShippingOption}</p>
      <p>{selectedShippingPriceCurrency}</p>
    </StyledShippingRecap>
  );
};
