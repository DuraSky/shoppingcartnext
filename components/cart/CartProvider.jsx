import React, { createContext, useReducer, useEffect, useMemo } from "react";
import { initialState, actionTypes, cartReducer } from "./cartReducer";

export const CartContext = createContext();

export const CartProvider = ({
  children,
  initialCart = {
    cart_products: [],
    vouchers: [],
    total_price: 0,
    total_f: "",
  },
  onCartUpdate,
  onDiscountCode,
  updateLoading,
}) => {
  const [state, dispatch] = useReducer(cartReducer, {
    ...initialState,
    cart: initialCart.cart_products || [],
    vouchers: initialCart.vouchers || [],
    cart_total: initialCart.total_price || 0,
    cart_total_f: initialCart.total_f || "",
  });

  useEffect(() => {
    if (initialCart && initialCart.cart_products && initialCart.vouchers) {
      dispatch({
        type: actionTypes.SET_CART,
        payload: {
          cart_products: initialCart.cart_products,
          vouchers: initialCart.vouchers,
          total_price: initialCart.total_price,
          total_f: initialCart.total_f,
        },
      });
    }
  }, [initialCart]);

  const value = useMemo(
    () => ({ state, dispatch, onCartUpdate, onDiscountCode, updateLoading }),
    [state, onCartUpdate, onDiscountCode, updateLoading]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { actionTypes };
