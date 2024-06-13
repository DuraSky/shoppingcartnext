import React from "react";

export const CartItemChargeProducts = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <p> {product.name}</p>
          <p>Cena {product.price}</p>
        </div>
      ))}
    </>
  );
};
