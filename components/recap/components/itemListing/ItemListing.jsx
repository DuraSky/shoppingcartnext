import React from "react";
import { StyledProductRecap } from "./ItemListingStyle";
import Image from "next/image";

export const ItemListing = ({ cart }) => {
  return (
    <>
      {cart.map((item, index) => {
        return (
          <StyledProductRecap key={index}>
            <div className="itemImage">
              <Image
                src={item.img}
                alt={item.name}
                width={100}
                height={100}
                layout="intrinsic"
              />
            </div>
            <div className="itemDetails">
              <p className="itemName">{item.name}</p>
              <div className="itemListingQuantity">
                <p>{item.quantity}x</p>
                <p>{item.price} Kč </p>
              </div>
            </div>
            <p className="listingPrice"> {item.price * item.quantity} Kč</p>
          </StyledProductRecap>
        );
      })}
    </>
  );
};
