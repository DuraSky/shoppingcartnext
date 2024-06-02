import React from "react";
import { StyledProductRecap } from "./ItemListingStyle";

export const ItemListing = ({ cart }) => {
  return (
    <>
      {cart.map((item, index) => {
        return (
          <StyledProductRecap key={index}>
            <img src={item.img} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <div className="itemListingQuantity">
                <p>{item.quantity}x</p>
                <p>{item.price * item.quantity} Kč</p>
              </div>
            </div>
            <p className="listingPrice">{item.price} Kč</p>
          </StyledProductRecap>
        );
      })}
    </>
  );
};
