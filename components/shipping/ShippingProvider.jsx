import React, { createContext, useReducer, useEffect, useMemo } from "react";
import { initialState, actionTypes, shippingReducer } from "./shippingReducer";

export const ShippingContext = createContext();

export const ShippingProvider = ({ children, initialShipping = [] }) => {
  console.log("Initial Shipping Data:", initialShipping);

  const countries = initialShipping.length > 0 ? initialShipping : [];
  console.log("Extracted countries:", countries);

  const [state, dispatch] = useReducer(shippingReducer, {
    ...initialState,
    shippingOptions: { countries },
  });

  useEffect(() => {
    if (countries.length > 0) {
      console.log(
        "Dispatching SET_SHIPPING_OPTIONS with countries:",
        countries
      );
      dispatch({
        type: actionTypes.SET_SHIPPING_OPTIONS,
        payload: { countries },
      });

      const firstCountry = countries[0];
      if (firstCountry.deliveries && firstCountry.deliveries.length > 0) {
        const firstDelivery = firstCountry.deliveries[0];
        console.log("Dispatching default delivery:", firstDelivery);

        dispatch({
          type: actionTypes.SET_SELECTED_SHIPPING_OPTION,
          payload: firstDelivery.name,
        });
        dispatch({
          type: actionTypes.SET_SELECTED_SHIPPING_OPTION_IMG,
          payload: firstDelivery.imgUrl,
        });
        dispatch({
          type: actionTypes.SET_SELECTED_SHIPPING_PRICE,
          payload: firstDelivery.price,
        });
        dispatch({
          type: actionTypes.SET_SELECTED_SHIPPING_PRICE_CURRENCY,
          payload: firstDelivery.price_f,
        });
        dispatch({
          type: actionTypes.SET_SELECTED_SHIPPING_OPTIONS,
          payload: firstDelivery.payments,
        });
      }
    }
  }, [countries]);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <ShippingContext.Provider value={value}>
      {children}
    </ShippingContext.Provider>
  );
};

export { actionTypes };
