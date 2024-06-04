import React from "react";
import { StyledCartAndShippingTotal } from "./cartAndShippingTotalStyle";

export const CartAndShippingTotal = ({ cartTotalCalc }) => {
  return (
    <StyledCartAndShippingTotal>
      {cartTotalCalc()} Kč
    </StyledCartAndShippingTotal>
  );
};
