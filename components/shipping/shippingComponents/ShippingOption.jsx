import React, { useContext } from "react";
import { ShippingContext, actionTypes } from "../ShippingProvider";
import { ShippingOptionMethod } from "./ShippingOptionMethod";
import { PPLWidget } from "../deliveryVendorsApis/ppl/PPLWidget";

const ShippingOption = () => {
  const { state, dispatch } = useContext(ShippingContext);
  const { shippingOptions } = state;

  const handleMethodSelection = (delivery) => {
    console.log("Method selected:", delivery); // Debug log
    dispatch({
      type: actionTypes.SET_SELECTED_SHIPPING_OPTION,
      payload: delivery.name,
    });
    dispatch({
      type: actionTypes.SET_SELECTED_SHIPPING_OPTION_PACKAGE_ID,
      payload: delivery.package_id,
    });
    dispatch({
      type: actionTypes.SET_SELECTED_SHIPPING_OPTION_IMG,
      payload: delivery.image,
    });
    dispatch({
      type: actionTypes.SET_SELECTED_SHIPPING_OPTIONS,
      payload: delivery.payments,
    });
    dispatch({
      type: actionTypes.SET_SELECTED_PAYMENT_OPTION,
      payload: null,
    });

    localStorage.setItem(
      "selectedShippingOption",
      JSON.stringify({
        name: delivery.name,
        package_id: delivery.package_id,
        image: delivery.image,
        payments: delivery.payments,
      })
    );
  };

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
