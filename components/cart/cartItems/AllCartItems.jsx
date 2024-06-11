import React from "react";
import CartItem from "./CartItem";
import {
  CartContainer,
  CartHeaders,
  CartItemRow,
  AllItems,
} from "./allCartItemsStyle";

export const AllCartItems = ({ cart }) => {
  return (
    <CartContainer>
      <CartHeaders>
        <h2 className="produktName" aria-hidden="true"></h2>
        <h2 className="dostupnost">Dostupnost</h2>
        <h2 className="quantityControlWrapper">Množství</h2>
        <h2 className="itemPrice">Cena za kus</h2>
        <h2 className="priceCalc">Cena vc. DPH</h2>
        <h2 className="removeFromCart" aria-hidden="true"></h2>
        {/* Placeholder for alignment */}
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
