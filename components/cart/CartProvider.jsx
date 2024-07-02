import React, { createContext, useReducer, useEffect, useMemo } from "react";
import { initialState, actionTypes, cartReducer } from "./cartReducer";

export const CartContext = createContext();

export const CartProvider = ({
  children,
  initialCart = { cart_products: [], vouchers: [] },
  onCartUpdate,
  updateLoading,
}) => {
  const [state, dispatch] = useReducer(cartReducer, {
    ...initialState,
    cart: initialCart.cart_products || [],
    vouchers: initialCart.vouchers || [],
  });

  useEffect(() => {
    if (initialCart && initialCart.cart_products && initialCart.vouchers) {
      dispatch({
        type: actionTypes.SET_CART,
        payload: {
          cart_products: initialCart.cart_products,
          vouchers: initialCart.vouchers,
        },
      });
    }
  }, [initialCart]);

  const value = useMemo(
    () => ({ state, dispatch, onCartUpdate, updateLoading }),
    [state, onCartUpdate, updateLoading]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { actionTypes };
