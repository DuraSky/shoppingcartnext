import React from "react";
import CartItem from "./CartItem";
import {
  CartContainer,
  CartHeaders,
  CartItemRow,
  CartVariantRow,
  AllItems,
} from "./allCartItemsStyle";
import { CartItemChargeGroups } from "./cartItemVariants/CartItemChargeGroups";

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
          <React.Fragment key={item.bp_id}>
            <CartItemRow hasVariants={item.surcharge_groups.length > 0}>
              <CartItem item={item} index={index} />
            </CartItemRow>
            {item.surcharge_groups.length > 0 && (
              <CartVariantRow>
                <CartItemChargeGroups
                  bpId={item.bp_id}
                  surcharge_groups={item.surcharge_groups}
                />
              </CartVariantRow>
            )}
          </React.Fragment>
        ))}
      </AllItems>
    </CartContainer>
  );
};

export default AllCartItems;
