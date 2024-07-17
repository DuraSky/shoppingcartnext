import React, { useContext, useState, useEffect } from "react";
import { ShippingContext } from "../ShippingProvider";
import { useDeliveryVendors } from "../deliveryVendorsApis/DeliveryVendorsProvider";
import Image from "next/image";
import {
  StyledShippingMethod,
  StyledSelectedBranch,
} from "./shippingOptionMethodStyle";
import { imageLoader } from "../../imageLoader/imageLoader";
import { PacketaWidget } from "../deliveryVendorsApis/zasilkovna/PacketaWidget";
import { BalikovnaWidget } from "../deliveryVendorsApis/balikovna/BalikovnaWidget";
import { PPLWidget } from "../deliveryVendorsApis/ppl/PPLWidget";

import Modal from "../deliveryVendorsApis/Modal";

export const ShippingOptionMethod = ({ delivery, onSelectMethod }) => {
  const { state } = useContext(ShippingContext);
  const { selectedShippingOption } = state;
  const [openWidget, setOpenWidget] = useState(false);
  const { selectedVendor } = useDeliveryVendors();

  useEffect(() => {
    if (selectedShippingOption !== delivery.name) {
      setOpenWidget(false);
    }
  }, [selectedShippingOption, delivery.name]);

  const handleChange = (delivery) => {
    onSelectMethod(delivery);
    const savedVendor = JSON.parse(localStorage.getItem("selectedVendor"));
    if (
      (delivery.name === "Zásilkovna" &&
        (!savedVendor || savedVendor.vendorName !== "Zásilkovna")) ||
      (delivery.name === "Balíkovna" &&
        (!savedVendor || savedVendor.vendorName !== "Balíkovna")) ||
      (delivery.name === "PPL ParcelShop" &&
        (!savedVendor || savedVendor.vendorName !== "PPL ParcelShop"))
    ) {
      setOpenWidget(true);
    } else {
      setOpenWidget(false);
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
        {delivery.name === "Zásilkovna" && openWidget && (
          <PacketaWidget closeWidget={() => setOpenWidget(false)} />
        )}
        {delivery.name !== "Zásilkovna" && openWidget && (
          <Modal onClose={() => setOpenWidget(false)}>
            {delivery.name === "Balíkovna" && (
              <BalikovnaWidget closeWidget={() => setOpenWidget(false)} />
            )}
            {delivery.name === "PPL ParcelShop" && (
              <PPLWidget closeWidget={() => setOpenWidget(false)} />
            )}
          </Modal>
        )}
        {selectedVendor && selectedVendor.vendorName === delivery.name && (
          <StyledSelectedBranch>
            <p>
              <span>Zvolená pobočka:</span> {selectedVendor.name}
            </p>
            <button onClick={handleBranchChange}>Změnit pobočku</button>
          </StyledSelectedBranch>
        )}
      </label>
    </StyledShippingMethod>
  );
};
