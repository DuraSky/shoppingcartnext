import React from "react";
import { useContext } from "react";
import { ShippingContext, actionTypes } from "../ShippingProvider";
import Image from "next/image";

import { StyledPriceOption } from "./shippingPriceOptionStyle";

const ShippingPriceOptions = () => {
  const { state, dispatch } = useContext(ShippingContext);
  const { selectedShippingOptions, selectedPaymentOption } = state;

  const handlePriceMethodChange = (name, price) => {
    dispatch({ type: actionTypes.SET_SELECTED_PAYMENT_OPTION, payload: name });
    dispatch({
      type: actionTypes.SET_SELECTED_PAYMENT_OPTION_PRICE,
      payload: price,
    });
  };

  return (
    <>
      {selectedShippingOptions.map((option, index) => (
        <StyledPriceOption key={index} className="payOption">
          <label>
            <input
              type="radio"
              name="shippingPriceMethod"
              value={option.method}
              onChange={() => {
                handlePriceMethodChange(option.method, option.price);
              }}
              checked={selectedPaymentOption === option.method}
            />
            <Image
              src={option.imgUrl}
              alt="Obrazek platby"
              width={100}
              height={100}
              layout="intrinsic"
            />
            <p>{option.method}</p>
            <p className="price">{option.price} Kč</p>
          </label>
        </StyledPriceOption>
      ))}
    </>
  );
};

export default ShippingPriceOptions;
