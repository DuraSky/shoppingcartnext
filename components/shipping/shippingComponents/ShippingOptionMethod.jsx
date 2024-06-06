import React from "react";
import { ShippingContext } from "../ShippingProvider";
import { useContext } from "react";
import Image from "next/image";

import { StyledShippingMethod } from "./shippingOptionMethodStyle";

export const ShippingOptionMethod = ({ methods, onSelectMethod }) => {
  const { state } = useContext(ShippingContext);
  const { selectedShippingOption } = state;
  return (
    <>
      {methods.map((method, index) => (
        <StyledShippingMethod key={index}>
          <label>
            <input
              type="radio"
              name="shippingMethod"
              value={method.name}
              onChange={() => onSelectMethod(method)}
              checked={selectedShippingOption === method.name}
            />
            <Image
              src={method.imgUrl}
              alt={method.name}
              layout="intrinsic"
              width={100}
              height={100}
            />
            <div>
              <p>{method.name}</p>
              <p>
                <span>{method.canShipDate}</span>
              </p>
            </div>
            <p className="price">{method.price} Kč</p>
          </label>
        </StyledShippingMethod>
      ))}
    </>
  );
};
