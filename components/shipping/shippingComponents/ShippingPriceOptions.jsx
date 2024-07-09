import React from "react";
import { useContext } from "react";
import { ShippingContext, actionTypes } from "../ShippingProvider";
import Image from "next/image";
import { StyledPriceOption } from "./shippingPriceOptionStyle";

const ShippingPriceOptions = () => {
  const { state, dispatch } = useContext(ShippingContext);
  const { selectedShippingOptions, selectedPaymentOption } = state;

  const handlePriceMethodChange = (name, price, imgUrl, price_f) => {
    dispatch({ type: actionTypes.SET_SELECTED_PAYMENT_OPTION, payload: name });
    dispatch({
      type: actionTypes.SET_SELECTED_PAYMENT_OPTION_IMG,
      payload: imgUrl,
    });
    dispatch({
      type: actionTypes.SET_SELECTED_PAYMENT_OPTION_PRICE,
      payload: price,
    });
    dispatch({
      type: actionTypes.SET_SELECTED_PAYMENT_OPTION_PRICE_CURRENCY,
      payload: price_f,
    });
  };

  return (
    <>
      {selectedShippingOptions &&
        selectedShippingOptions.map((option, index) => (
          <StyledPriceOption key={index} className="payOption">
            <label>
              <input
                type="radio"
                name="shippingPriceMethod"
                value={option.name}
                onChange={() => {
                  handlePriceMethodChange(
                    option.name,
                    option.price,
                    option.imgUrl,
                    option.price_f
                  );
                }}
                checked={selectedPaymentOption === option.name}
              />
              <Image
                src={option.imgUrl}
                alt="Obrazek platby"
                width={100}
                height={100}
                layout="intrinsic"
              />
              <p>{option.name}</p>
              <p className="price">{option.price_f}</p>
            </label>
          </StyledPriceOption>
        ))}
    </>
  );
};

export default ShippingPriceOptions;
