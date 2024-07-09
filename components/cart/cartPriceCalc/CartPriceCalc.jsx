import React, { useContext } from "react";
import { StyledPriceCalc } from "./cartPriceCalcStyle";
import { CartContext } from "../CartProvider";

// export const CartPriceCalc = ({ cartTotal }) => {
export const CartPriceCalc = () => {
  const { state } = useContext(CartContext);
  //console.log("Cart state:", state); // Log state to check its values

  const { cart_total_f } = state;
  return (
    <StyledPriceCalc>
      <h3>Celková cena:</h3>
      <p> {cart_total_f}</p>
    </StyledPriceCalc>
  );
};
