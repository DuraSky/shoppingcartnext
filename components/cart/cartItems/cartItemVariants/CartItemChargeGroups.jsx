import React, { useContext } from "react";
import { CartItemChargeProducts } from "./CartItemChargeProducts";
import { CartContext, actionTypes } from "../../CartProvider"; // Import the context and action types

export const CartItemChargeGroups = ({ surcharge_groups }) => {
  const { state, dispatch } = useContext(CartContext); // Use the context

  const handleSelectProduct = (groupId, productId) => {
    dispatch({
      type: actionTypes.SET_SELECTED_SURCHARGE_PRODUCT,
      payload: { groupId, productId },
    });
  };

  const selectedProducts = state.selectedSurchargeProducts; // Get the selected products from state

  return (
    <>
      {surcharge_groups.map((group, index) => {
        const groupKey = Object.keys(group)[0];
        const groupDetails = group[groupKey];

        return (
          <div key={groupKey || index} className="productGroup">
            <h3>{groupDetails.name || "Surcharge Group"}</h3>
            <CartItemChargeProducts
              groupId={groupKey}
              products={groupDetails.surcharge_products}
              selectedProduct={selectedProducts[groupKey]}
              onSelectProduct={handleSelectProduct}
            />
          </div>
        );
      })}
    </>
  );
};
