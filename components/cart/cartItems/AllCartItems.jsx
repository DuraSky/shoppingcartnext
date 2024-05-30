import React from "react";
import CartItem from "./CartItem";
import {
  CartContainer,
  CartHeaders,
  CartItemRow,
  AllItems,
} from "./allCartItemsStyle";
import { Steps } from "../../steps/Steps";

export const AllCartItems = ({ cart }) => {
  return (
    <CartContainer>
      <CartHeaders>
        <h2>Produkt</h2>
        <h2>Dostupnost</h2>
        <h2>Množství</h2>
        <h2>Cena za kus</h2>
        <h2>Cena vc. DPH</h2>
      </CartHeaders>
      <AllItems>
        {cart.map((item, index) => (
          <CartItemRow key={item.bp_id}>
            <CartItem item={item} index={index} />
          </CartItemRow>
        ))}
      </AllItems>
    </CartContainer>
  );
};

export default AllCartItems;
