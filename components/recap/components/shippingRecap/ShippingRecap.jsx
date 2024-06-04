import React from "react";
import { StyledShippingRecap } from "./shippingRecapStyle";

export const ShippingRecap = ({
  selectedShippingOption,
  selectedShippingPrice,
}) => {
  return (
    <StyledShippingRecap>
      <p>{selectedShippingOption}</p>
      <p>{selectedShippingPrice} Kč</p>
    </StyledShippingRecap>
  );
};
