import React from "react";

export const CartItemChargeProducts = ({
  bpId,
  groupId,
  products,
  selectedProduct,
  onSelectProduct,
}) => {
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="productVariant">
          <img src={product.image} alt={product.name} />
          {/* <img src="https://placehold.jp/150x150.png" alt="placeholder" /> */}
          <div className="checkboxAndName">
            <input
              type="checkbox"
              checked={selectedProduct === product.id}
              onChange={() => onSelectProduct(bpId, groupId, product.id)}
            />
            <p>{product.name}</p>
          </div>
          <p>{product.price} Kč</p>
        </div>
      ))}
    </>
  );
};
