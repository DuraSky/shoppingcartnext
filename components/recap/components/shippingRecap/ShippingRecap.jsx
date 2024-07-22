import React from "react";
import { StyledShippingRecap } from "./shippingRecapStyle";
import { useDeliveryVendors } from "../../../shipping/deliveryVendorsApis/DeliveryVendorsProvider";

export const ShippingRecap = ({
  selectedShippingOption,
  selectedShippingPriceCurrency,
}) => {
  const { selectedVendor } = useDeliveryVendors();
  console.log(
    "adgfadsgadfgadgadgfadgadfgadfgadgdafg",
    selectedShippingPriceCurrency
  );

  return (
    <StyledShippingRecap>
      <div className="mainInfo">
        <img src="/assets/truck5.svg" width="30px" alt="" />
        <p>{selectedShippingOption}</p>
        <p className="price">{selectedShippingPriceCurrency}</p>
      </div>
      {selectedVendor.vendorName === selectedShippingOption && (
        <div className="branchInfo">
          <h4>Zvolená pobočka:</h4>
          <p>{selectedVendor.name}</p>
          {/* <p>Address Code: {selectedVendor.branchCode}</p> */}
        </div>
      )}
    </StyledShippingRecap>
  );
};
