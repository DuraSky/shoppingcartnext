import React from "react";

export const CartItemChargeProducts = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="productVariant">
          <img src={product.image} alt="" />
          <div className="checkboxAndName">
            <input type="checkbox" />
            <p>{product.name}</p>
          </div>
          <p>{product.price} Kč</p>
        </div>
      ))}
    </>
  );
};
