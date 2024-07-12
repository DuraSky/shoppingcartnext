import React from "react";
import Image from "next/image";
import { imageLoader } from "../../../imageLoader/imageLoader";

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
          {/* <img src={product.image} alt={product.name} /> */}
          <Image
            loader={imageLoader}
            src={product.image || "failsafe"}
            alt={product.name}
            width={100}
            height={100}
            layout="intrinsic"
          />

          {/* <img src="https://placehold.jp/150x150.png" alt="placeholder" /> */}
          <div className="checkboxAndName">
            <input
              type="checkbox"
              checked={product.checked}
              //checked={selectedProduct === product.id}
              onChange={() =>
                onSelectProduct(
                  bpId,
                  groupId,
                  product.product_surcharge_product_id,
                  !product.checked
                )
              }
            />
            <p>{product.name}</p>
          </div>
          <p>{product.price_f}</p>
        </div>
      ))}
    </>
  );
};
