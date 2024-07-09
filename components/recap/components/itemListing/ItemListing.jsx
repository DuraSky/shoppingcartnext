import React from "react";
import { StyledProductRecap } from "./ItemListingStyle";
import Image from "next/image";

export const ItemListing = ({ cart, selectedSurchargeProducts }) => {
  return (
    <>
      {cart.map((item, index) => {
        const surchargeGroups = item.surcharge_groups || [];
        const selectedSurchargeItems = surchargeGroups.flatMap((group) => {
          const groupId = group.id; // Access group ID directly
          const selectedProductId =
            selectedSurchargeProducts?.[item.bp_id]?.[groupId];
          if (selectedProductId) {
            const selectedProduct = group.surcharge_products.find(
              (p) => p.id === selectedProductId
            );
            return selectedProduct ? [selectedProduct] : [];
          }
          return [];
        });

        return (
          <StyledProductRecap key={index}>
            <div className="itemImage">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                layout="intrinsic"
              />
            </div>
            <div className="itemDetails">
              <p className="itemName">{item.name}</p>
              <div className="flexWrapper">
                <div className="itemListingQuantity">
                  <p>{item.quantity}x</p>
                  <p>{item.price_f} </p>
                </div>
                {/* <p className="listingPrice"> {item.price * item.quantity} Kč</p> */}
                <p className="listingPrice"> {item.total_price_f}</p>
              </div>
              {selectedSurchargeItems.map((surchargeItem, idx) => (
                <div key={idx} className="surchargeItem">
                  <Image
                    src={surchargeItem.image || "/placeholder.png"}
                    alt={surchargeItem.name}
                    width={50}
                    height={50}
                    layout="intrinsic"
                  />
                  <div className="surchargeDetails">
                    <p className="itemName">{surchargeItem.name}</p>
                    <p className="listingPrice"> {surchargeItem.price_f}</p>
                  </div>
                </div>
              ))}
            </div>
          </StyledProductRecap>
        );
      })}
    </>
  );
};
