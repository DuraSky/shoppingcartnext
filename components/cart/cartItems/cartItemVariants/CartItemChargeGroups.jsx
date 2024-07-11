import React, { useContext } from "react";
import { CartItemChargeProducts } from "./CartItemChargeProducts";
import { CartContext } from "../../CartProvider";

export const CartItemChargeGroups = ({ bpId, surcharge_groups }) => {
  const { state, onSurchargeChange } = useContext(CartContext);

  const handleSelectProduct = async (bpId, productId, checked) => {
    await onSurchargeChange(bpId, productId, checked);
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
            onSelectProduct={handleSelectProduct}
          />
        </div>
      ))}
    </>
  );
};
