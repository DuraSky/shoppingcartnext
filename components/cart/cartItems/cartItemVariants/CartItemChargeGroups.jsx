import React, { useContext } from "react";
import { CartItemChargeProducts } from "./CartItemChargeProducts";
import { CartContext } from "../../CartProvider";

export const CartItemChargeGroups = ({ bpId, surcharge_groups }) => {
  const { state, onSurchargeChange } = useContext(CartContext);

  const handleSelectProduct = async (bpId, groupId, productId, checked) => {
    const group = surcharge_groups.find((group) => group.id === groupId);
    const currentlyCheckedProduct = group.surcharge_products.find(
      (product) => product.checked
    );
    const prevProductId = currentlyCheckedProduct
      ? currentlyCheckedProduct.product_surcharge_product_id
      : null;

    await onSurchargeChange(bpId, groupId, productId, checked, prevProductId);
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
