import React, { useContext } from "react";
import { StyledCartAndShippingTotal } from "./cartAndShippingTotalStyle";

import { CartContext } from "../../../cart/CartProvider";

export const CartAndShippingTotal = ({ cartTotalCalc }) => {
  const { state } = useContext(CartContext);
  //console.log("Cart state:", state); // Log state to check its values

  const { cart_total_with_shipping } = state;
  return (
    <StyledCartAndShippingTotal>
      {cart_total_with_shipping}
    </StyledCartAndShippingTotal>
  );
};
