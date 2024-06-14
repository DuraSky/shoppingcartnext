import {
  removeFromCart,
  changeQuantity,
  getCartPrice,
} from "../../utils/cartUtil";

const initialState = {
  cart: [],
  cartTotal: 0,
  voucher: null,
  selectedSurchargeProducts: {}, // Add this to handle selected surcharge products
};

const actionTypes = {
  SET_CART: "SET_CART",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CHANGE_QUANTITY: "CHANGE_QUANTITY",
  UPDATE_CART_TOTAL: "UPDATE_CART_TOTAL",
  SET_SELECTED_SURCHARGE_PRODUCT: "SET_SELECTED_SURCHARGE_PRODUCT", // Add this action type
};

const getSurchargeProductPrice = (surchargeProducts, selectedProduct) => {
  if (!surchargeProducts || !selectedProduct) return 0;
  const product = surchargeProducts.find((p) => p.id === selectedProduct);
  return product ? product.price : 0;
};

const calculateCartTotal = (cart, selectedSurchargeProducts) => {
  const cartTotal = getCartPrice(cart);
  const surchargeTotal = Object.values(selectedSurchargeProducts).reduce(
    (total, productId) => {
      cart.forEach((item) => {
        item.surcharge_groups.forEach((group) => {
          const groupKey = Object.keys(group)[0];
          const groupDetails = group[groupKey];
          total += getSurchargeProductPrice(
            groupDetails.surcharge_products,
            productId
          );
        });
      });
      return total;
    },
    0
  );
  return cartTotal + surchargeTotal;
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_CART:
      const { cart_products, voucher } = action.payload;
      return {
        ...state,
        cart: cart_products,
        cartTotal: calculateCartTotal(
          cart_products,
          state.selectedSurchargeProducts
        ),
        voucher: voucher,
      };

    case actionTypes.REMOVE_FROM_CART:
      const updatedCartRemove = removeFromCart(state.cart, action.payload);
      return {
        ...state,
        cart: updatedCartRemove,
        cartTotal: calculateCartTotal(
          updatedCartRemove,
          state.selectedSurchargeProducts
        ),
      };

    case actionTypes.CHANGE_QUANTITY:
      const updatedCartQuantity = changeQuantity(
        state.cart,
        action.payload.value,
        action.payload.index
      );
      return {
        ...state,
        cart: updatedCartQuantity,
        cartTotal: calculateCartTotal(
          updatedCartQuantity,
          state.selectedSurchargeProducts
        ),
      };

    case actionTypes.SET_SELECTED_SURCHARGE_PRODUCT:
      const currentSelectedProduct =
        state.selectedSurchargeProducts[action.payload.groupId];
      const newSelectedSurchargeProducts = {
        ...state.selectedSurchargeProducts,
        [action.payload.groupId]:
          currentSelectedProduct === action.payload.productId
            ? null
            : action.payload.productId,
      };
      return {
        ...state,
        selectedSurchargeProducts: newSelectedSurchargeProducts,
        cartTotal: calculateCartTotal(state.cart, newSelectedSurchargeProducts),
      };

    default:
      return state;
  }
};

export { initialState, actionTypes, cartReducer };
