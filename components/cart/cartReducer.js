import {
  removeFromCart,
  changeQuantity,
  getCartPrice,
} from "../../utils/cartUtil";

const initialState = {
  cart: [],
  cartTotal: 0,
  appliedVouchers: [], // Changed from a single voucher to an array of applied vouchers
  selectedSurchargeProducts: {},
  vouchers: [], // Add this to hold available vouchers
};

const actionTypes = {
  SET_CART: "SET_CART",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CHANGE_QUANTITY: "CHANGE_QUANTITY",
  UPDATE_CART_TOTAL: "UPDATE_CART_TOTAL",
  SET_SELECTED_SURCHARGE_PRODUCT: "SET_SELECTED_SURCHARGE_PRODUCT",
  APPLY_VOUCHER: "APPLY_VOUCHER", // Add this action type for applying vouchers
  REMOVE_VOUCHER: "REMOVE_VOUCHER", // Add this action type for removing vouchers
};

const getSurchargeProductPrice = (surchargeProducts, selectedProduct) => {
  if (!surchargeProducts || !selectedProduct) return 0;
  const product = surchargeProducts.find((p) => p.id === selectedProduct);
  return product ? product.price : 0;
};

const calculateCartTotal = (
  cart,
  selectedSurchargeProducts,
  appliedVouchers = []
) => {
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

  const total = cartTotal + surchargeTotal;

  const totalDiscount = appliedVouchers.reduce(
    (discount, voucher) => discount + voucher.value,
    0
  );

  return total - totalDiscount;
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_CART:
      const { cart_products, vouchers } = action.payload;
      return {
        ...state,
        cart: cart_products,
        vouchers: vouchers,
        cartTotal: calculateCartTotal(
          cart_products,
          state.selectedSurchargeProducts,
          state.appliedVouchers
        ),
      };

    case actionTypes.REMOVE_FROM_CART:
      const updatedCartRemove = removeFromCart(state.cart, action.payload);
      return {
        ...state,
        cart: updatedCartRemove,
        cartTotal: calculateCartTotal(
          updatedCartRemove,
          state.selectedSurchargeProducts,
          state.appliedVouchers
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
          state.selectedSurchargeProducts,
          state.appliedVouchers
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
        cartTotal: calculateCartTotal(
          state.cart,
          newSelectedSurchargeProducts,
          state.appliedVouchers
        ),
      };

    case actionTypes.APPLY_VOUCHER:
      const voucherToApply = state.vouchers.find(
        (v) => v.code === action.payload
      );
      if (
        !voucherToApply ||
        voucherToApply.used ||
        state.appliedVouchers.includes(voucherToApply)
      )
        return state;

      // Mark the voucher as used
      voucherToApply.used = true;

      return {
        ...state,
        appliedVouchers: [...state.appliedVouchers, voucherToApply],
        cartTotal: calculateCartTotal(
          state.cart,
          state.selectedSurchargeProducts,
          [...state.appliedVouchers, voucherToApply]
        ),
      };

    case actionTypes.REMOVE_VOUCHER:
      const updatedAppliedVouchers = state.appliedVouchers.filter(
        (v) => v.code !== action.payload
      );
      const voucherToRemove = state.vouchers.find(
        (v) => v.code === action.payload
      );
      if (voucherToRemove) {
        voucherToRemove.used = false; // Mark the voucher as unused
      }
      return {
        ...state,
        appliedVouchers: updatedAppliedVouchers,
        cartTotal: calculateCartTotal(
          state.cart,
          state.selectedSurchargeProducts,
          updatedAppliedVouchers
        ),
      };

    default:
      return state;
  }
};

export { initialState, actionTypes, cartReducer };
