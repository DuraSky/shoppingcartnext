import React from "react";

export const CartItemChargeProducts = ({
  groupId,
  products,
  selectedProduct,
  onSelectProduct,
}) => {
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="productVariant">
          <img src={product.image} alt="" />
          <div className="checkboxAndName">
            <input
              type="checkbox"
              checked={selectedProduct === product.id}
              onChange={() => onSelectProduct(groupId, product.id)}
            />
            <p>{product.name}</p>
          </div>
          <p>{product.price} Kč</p>
        </div>
      ))}
    </>
  );
};
