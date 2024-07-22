import React, { createContext, useReducer, useEffect, useMemo } from "react";
import { initialState, actionTypes, shippingReducer } from "./shippingReducer";

export const ShippingContext = createContext();

export const ShippingProvider = ({ children, initialShipping = [] }) => {
  console.log("Initial Shipping Data:", initialShipping);

  const countries = initialShipping.length > 0 ? initialShipping : [];

  const [state, dispatch] = useReducer(shippingReducer, {
    ...initialState,
    shippingOptions: { countries },
  });

  useEffect(() => {
    if (countries.length > 0) {
      dispatch({
        type: actionTypes.SET_SHIPPING_OPTIONS,
        payload: { countries },
      });

      // Check localStorage for saved shipping option
      const savedShippingOption = JSON.parse(
        localStorage.getItem("selectedShippingOption")
      );

      if (savedShippingOption) {
        dispatch({
          type: actionTypes.SET_SELECTED_SHIPPING_OPTION,
          payload: savedShippingOption.name,
        });
        dispatch({
          type: actionTypes.SET_SELECTED_SHIPPING_OPTION_PACKAGE_ID,
          payload: savedShippingOption.package_id,
        });
        dispatch({
          type: actionTypes.SET_SELECTED_SHIPPING_PRICE,
          payload: savedShippingOption.price,
        });
        dispatch({
          type: actionTypes.SET_SELECTED_SHIPPING_PRICE_CURRENCY,
          payload: savedShippingOption.price_f,
        });
        dispatch({
          type: actionTypes.SET_SELECTED_SHIPPING_OPTION_IMG,
          payload: savedShippingOption.image,
        });
        dispatch({
          type: actionTypes.SET_SELECTED_SHIPPING_OPTIONS,
          payload: savedShippingOption.payments,
        });
        dispatch({
          type: actionTypes.SET_SELECTED_PAYMENT_OPTION,
          payload: null,
        });
      } else {
        const firstCountry = countries[0];
        if (firstCountry.deliveries && firstCountry.deliveries.length > 0) {
          const firstDelivery = firstCountry.deliveries[0];

          dispatch({
            type: actionTypes.SET_SELECTED_SHIPPING_OPTION,
            payload: firstDelivery.name,
          });
          dispatch({
            type: actionTypes.SET_SELECTED_SHIPPING_OPTION_PACKAGE_ID,
            payload: firstDelivery.package_id,
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
            type: actionTypes.SET_SELECTED_SHIPPING_OPTION_IMG,
            payload: firstDelivery.image,
          });
          dispatch({
            type: actionTypes.SET_SELECTED_SHIPPING_OPTIONS,
            payload: firstDelivery.payments,
          });

          // Save default shipping option to localStorage
          localStorage.setItem(
            "selectedShippingOption",
            JSON.stringify({
              name: firstDelivery.name,
              price: firstDelivery.price,
              price_f: firstDelivery.price_f,
              package_id: firstDelivery.package_id,
              image: firstDelivery.image,
              payments: firstDelivery.payments,
            })
          );
        }
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
