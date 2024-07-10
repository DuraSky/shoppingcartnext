import React from "react";
import { useContext } from "react";
import { ShippingContext } from "../ShippingProvider";
import Image from "next/image";
import { StyledShippingMethod } from "./shippingOptionMethodStyle";
import { imageLoader } from "../../imageLoader/imageLoader";

export const ShippingOptionMethod = ({ delivery, onSelectMethod }) => {
  const { state } = useContext(ShippingContext);
  const { selectedShippingOption } = state;

  // Safeguard to ensure delivery object is defined
  if (!delivery || !delivery.name) {
    return null;
  }

  return (
    <StyledShippingMethod>
      <label>
        <input
          type="radio"
          name="shippingMethod"
          value={delivery.name}
          onChange={() => onSelectMethod(delivery)}
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
      </label>
    </StyledShippingMethod>
  );
};
