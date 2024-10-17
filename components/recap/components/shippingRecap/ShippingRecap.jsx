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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0M571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93"
            />
          </svg>{" "}
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
