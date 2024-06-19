import React, { useContext } from "react";
import { CartItemChargeProducts } from "./CartItemChargeProducts";
import { CartContext, actionTypes } from "../../CartProvider";

export const CartItemChargeGroups = ({ bpId, surcharge_groups }) => {
  const { state, dispatch } = useContext(CartContext); // Use the context

  const handleSelectProduct = (bpId, groupId, productId) => {
    dispatch({
      type: actionTypes.SET_SELECTED_SURCHARGE_PRODUCT,
      payload: { bpId, groupId, productId },
    });
  };

  const selectedProducts = state.selectedSurchargeProducts[bpId] || {};

  return (
    <>
      {surcharge_groups.map((group, index) => (
        <div key={group.id || index} className="productGroup">
          <h3>{group.name || "Doplňkové služby"}</h3>
          <CartItemChargeProducts
            bpId={bpId}
            groupId={group.id}
            products={group.surcharge_products}
            selectedProduct={selectedProducts[group.id]}
            onSelectProduct={handleSelectProduct}
          />
        </div>
      ))}
    </>
  );
};
