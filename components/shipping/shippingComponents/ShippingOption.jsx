import React, { useContext, useEffect } from "react";
import { ShippingContext, actionTypes } from "../ShippingProvider";
import { ShippingOptionMethod } from "./ShippingOptionMethod";

const ShippingOption = () => {
  const { state, dispatch } = useContext(ShippingContext);
  const { shippingOptions } = state;

  const handleMethodSelection = (delivery) => {
    dispatch({
      type: actionTypes.SET_SELECTED_SHIPPING_OPTION,
      payload: delivery.name,
    });
    dispatch({
      type: actionTypes.SET_SELECTED_SHIPPING_OPTION_IMG,
      payload: delivery.imgUrl,
    });
    dispatch({
      type: actionTypes.SET_SELECTED_SHIPPING_PRICE,
      payload: delivery.price,
    });
    dispatch({
      type: actionTypes.SET_SELECTED_SHIPPING_PRICE_CURRENCY,
      payload: delivery.price_f,
    });
    dispatch({
      type: actionTypes.SET_SELECTED_SHIPPING_OPTIONS,
      payload: delivery.payments,
    });
    dispatch({
      type: actionTypes.SET_SELECTED_PAYMENT_OPTION,
      payload: null,
    });
  };

  // Ensure shippingOptions is defined to avoid errors
  const firstCountry = shippingOptions?.countries[0];
  const deliveryOptions = firstCountry ? firstCountry.deliveries : [];

  return (
    <>
      {deliveryOptions.map((delivery, index) => (
        <ShippingOptionMethod
          delivery={delivery}
          key={index}
          onSelectMethod={handleMethodSelection}
        />
      ))}
    </>
  );
};

export default ShippingOption;
