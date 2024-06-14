import React from "react";
import { CartItemChargeProducts } from "./CartItemChargeProducts";

export const CartItemChargeGroups = ({ surcharge_groups }) => {
  return (
    <>
      {surcharge_groups.map((group, index) => {
        // Extract the single group object
        const groupKey = Object.keys(group)[0];
        const groupDetails = group[groupKey];

        return (
          <div key={groupKey || index} className="productGroup">
            <h3>{groupDetails.name || "Surcharge Group"}</h3>
            <CartItemChargeProducts
              products={groupDetails.surcharge_products}
            />
          </div>
        );
      })}
    </>
  );
};
