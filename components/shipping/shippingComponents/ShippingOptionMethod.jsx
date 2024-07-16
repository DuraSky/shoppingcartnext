import React from "react";
import { useContext, useState, useEffect } from "react";
import { ShippingContext } from "../ShippingProvider";
import { useDeliveryVendors } from "../deliveryVendorsApis/DeliveryVendorsProvider";
import Image from "next/image";
import {
  StyledShippingMethod,
  StyledSelectedBranch,
} from "./shippingOptionMethodStyle";
import { imageLoader } from "../../imageLoader/imageLoader";

import { PacketaWidget } from "../deliveryVendorsApis/zasilkovna/PacketaWidget";

export const ShippingOptionMethod = ({ delivery, onSelectMethod }) => {
  const { state } = useContext(ShippingContext);
  const { selectedShippingOption } = state;
  const [openWidget, setOpenWidget] = useState(false);
  const { selectedVendor } = useDeliveryVendors();

  useEffect(() => {
    if (selectedShippingOption === "Zásilkovna" && openWidget) {
      setOpenWidget(false);
    }
  }, [selectedShippingOption, openWidget]);

  const handleChange = (delivery) => {
    onSelectMethod(delivery);
    if (delivery.name === "Zásilkovna") {
      const savedVendor = JSON.parse(localStorage.getItem("selectedVendor"));
      if (!savedVendor || savedVendor.vendorName !== "Zásilkovna") {
        setOpenWidget(true);
      }
    }
  };

  if (!delivery || !delivery.name) {
    return null;
  }

  const handleBranchChange = () => {
    setOpenWidget(true);
  };

  return (
    <StyledShippingMethod>
      <label>
        <input
          type="radio"
          name="shippingMethod"
          value={delivery.name}
          onChange={() => handleChange(delivery)}
          checked={selectedShippingOption === delivery.name}
        />
        <Image
          loader={imageLoader}
          src={delivery.image}
          alt={delivery.name}
          layout="intrinsic"
          width={100}
          height={100}
        />
        <div>
          <p>{delivery.name}</p>
          <p>
            <span>{delivery.delivery_date}</span>
          </p>
        </div>
        <p className="price">{delivery.price} Kč</p>
        {delivery.name === "Zásilkovna" && openWidget && <PacketaWidget />}
        {selectedVendor && selectedVendor.vendorName === delivery.name && (
          //temp solution width 100
          <div className="wrapper" style={{ width: "100%" }}>
            <StyledSelectedBranch>
              <p>
                <span>Zvolená pobočka:</span> {selectedVendor.name}
              </p>
              <button onClick={handleBranchChange}>Změnit pobočku</button>
            </StyledSelectedBranch>
          </div>
        )}
      </label>
    </StyledShippingMethod>
  );
};
