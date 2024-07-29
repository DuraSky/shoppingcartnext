import React from "react";
import { StyledShippingRecap } from "./shippingRecapStyle";
import { useDeliveryVendors } from "../../../shipping/deliveryVendorsApis/DeliveryVendorsProvider";

import { FaTruckFast } from "react-icons/fa6";

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
        {/* <img src="/assets/truck5.svg" width="30px" alt="" /> */}
        <FaTruckFast
          style={{ width: "30px", height: "30px", marginRight: "10px" }}
        />

        <p>{selectedShippingOption}</p>
        <p className="price">{selectedShippingPriceCurrency}</p>
      </div>
      {selectedVendor.vendorName === selectedShippingOption && (
        <div className="branchInfo">
          <img src="/assets/home2.svg" width="30px" alt="" />
          {/* <p>Pobočka:</p> */}
          <p>{selectedVendor.name}</p>
          <p></p>
          {/* empty P tag here as rule last child was causing issues */}
          {/* <p>Address Code: {selectedVendor.branchCode}</p> */}
        </div>
      )}
    </StyledShippingRecap>
  );
};
