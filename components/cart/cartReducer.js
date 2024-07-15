import {
  removeFromCart,
  changeQuantity,
  getCartPrice,
} from "../../utils/cartUtil";

const initialState = {
  cart: [],
  selectedSurchargeProducts: {}, // { bpId: { groupId: selectedProductId } }
  vouchers: [],
  cart_total: 0,
  cart_total_f: "",
  cart_total_with_shipping: "",
};

const actionTypes = {
  SET_CART: "SET_CART",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CHANGE_QUANTITY: "CHANGE_QUANTITY",
  UPDATE_CART_TOTAL: "UPDATE_CART_TOTAL",
  SET_SELECTED_SURCHARGE_PRODUCT: "SET_SELECTED_SURCHARGE_PRODUCT",
  APPLY_VOUCHER: "APPLY_VOUCHER",
  REMOVE_VOUCHER: "REMOVE_VOUCHER",
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_CART:
      const { cart_products, vouchers, total_price, total_product_price_f } =
        action.payload;

      // Extract selected surcharge products from cart data
      const selectedSurchargeProducts = {};
      cart_products.forEach((product) => {
        if (product.surcharge_groups) {
          product.surcharge_groups.forEach((group) => {
            const selectedProduct = group.surcharge_products.find(
              (p) => p.checked
            );
            if (selectedProduct) {
              if (!selectedSurchargeProducts[product.bp_id]) {
                selectedSurchargeProducts[product.bp_id] = {};
              }
              selectedSurchargeProducts[product.bp_id][group.id] =
                selectedProduct.id;
            }
          });
        }
      });

      return {
        ...state,
        cart: cart_products,
        vouchers: vouchers,
        cart_total: total_price,
        cart_total_f: total_product_price_f,
        selectedSurchargeProducts, // Update the selected surcharge products
      };

    case actionTypes.REMOVE_FROM_CART:
      const updatedCartRemove = removeFromCart(state.cart, action.payload);
      return {
        ...state,
        cart: updatedCartRemove,
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
      };

    case actionTypes.SET_SELECTED_SURCHARGE_PRODUCT:
      const { bpId, groupId, productId } = action.payload;
      const updatedSelectedSurchargeProducts = {
        ...state.selectedSurchargeProducts,
      };

      if (!updatedSelectedSurchargeProducts[bpId]) {
        updatedSelectedSurchargeProducts[bpId] = {};
      }

      // If the productId is already selected, we deselect it
      if (updatedSelectedSurchargeProducts[bpId][groupId] === productId) {
        delete updatedSelectedSurchargeProducts[bpId][groupId];
      } else {
        updatedSelectedSurchargeProducts[bpId][groupId] = productId;
      }

      return {
        ...state,
        selectedSurchargeProducts: updatedSelectedSurchargeProducts,
      };

    case actionTypes.REMOVE_VOUCHER:
      const updatedAppliedVouchers = state.appliedVouchers.filter(
        (v) => v.code !== action.payload
      );
      const voucherToRemove = state.vouchers.find(
        (v) => v.code === action.payload
      );
      if (voucherToRemove) {
        voucherToRemove.used = false;
      }
      return {
        ...state,
        appliedVouchers: updatedAppliedVouchers,
      };

    default:
      return state;
  }
};

export { initialState, actionTypes, cartReducer };
