import React from "react";
import { CartItemChargeProducts } from "./CartItemChargeProducts";

export const CartItemChargeGroups = ({ surcharge_groups }) => {
  console.log("inside groups", surcharge_groups);

  return (
    <>
      {surcharge_groups.map((group, index) => {
        console.log("inside groups map", group);
        return (
          <div key={index}>
            {Object.values(group).map((g, gIndex) => (
              <div key={g.id || gIndex}>
                <CartItemChargeProducts products={g.surcharge_products} />
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
};
