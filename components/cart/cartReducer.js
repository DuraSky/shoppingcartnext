import {
  removeFromCart,
  changeQuantity,
  getCartPrice,
} from "../../utils/cartUtil";

const initialState = {
  cart: [],
  //cartTotal: 0, // This can be removed if not used elsewhere
  //appliedVouchers: [],
  selectedSurchargeProducts: {}, // { bpId: { groupId: selectedProductId } }
  vouchers: [],
  cart_total: 0,
  cart_total_f: "",
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
  const surchargeTotal = Object.entries(selectedSurchargeProducts).reduce(
    (total, [bpId, groups]) => {
      cart.forEach((item) => {
        if (item.bp_id.toString() === bpId) {
          Object.entries(groups).forEach(([groupId, productId]) => {
            item.surcharge_groups.forEach((group) => {
              if (group.id.toString() === groupId) {
                total += getSurchargeProductPrice(
                  group.surcharge_products,
                  productId
                );
              }
            });
          });
        }
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
      const { cart_products, vouchers, total_price, total_f } = action.payload;
      return {
        ...state,
        cart: cart_products,
        vouchers: vouchers,
        // Comment out local calculation and use the provided total price
        // cartTotal: calculateCartTotal(
        //   cart_products,
        //   state.selectedSurchargeProducts,
        //   state.appliedVouchers
        // ),
        cart_total: total_price,
        cart_total_f: total_f,
      };

    case actionTypes.REMOVE_FROM_CART:
      const updatedCartRemove = removeFromCart(state.cart, action.payload);
      return {
        ...state,
        cart: updatedCartRemove,
        // cartTotal: calculateCartTotal(
        //   updatedCartRemove,
        //   state.selectedSurchargeProducts,
        //   state.appliedVouchers
        // ),
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
        // cartTotal: calculateCartTotal(
        //   updatedCartQuantity,
        //   state.selectedSurchargeProducts,
        //   state.appliedVouchers
        // ),
      };

    case actionTypes.SET_SELECTED_SURCHARGE_PRODUCT:
      const { bpId, groupId, productId } = action.payload;
      const currentSelectedProduct =
        state.selectedSurchargeProducts[bpId]?.[groupId];
      const newSelectedSurchargeProducts = {
        ...state.selectedSurchargeProducts,
        [bpId]: {
          ...state.selectedSurchargeProducts[bpId],
          [groupId]: currentSelectedProduct === productId ? null : productId,
        },
      };
      return {
        ...state,
        selectedSurchargeProducts: newSelectedSurchargeProducts,
        // cartTotal: calculateCartTotal(
        //   state.cart,
        //   newSelectedSurchargeProducts,
        //   state.appliedVouchers
        // ),
      };

    // case actionTypes.APPLY_VOUCHER:
    //   const voucherToApply = state.vouchers.find(
    //     (v) => v.code === action.payload
    //   );
    //   if (
    //     !voucherToApply ||
    //     voucherToApply.used ||
    //     state.appliedVouchers.includes(voucherToApply)
    //   )
    //     return state;

    //   voucherToApply.used = true;

    //   return {
    //     ...state,
    //     appliedVouchers: [...state.appliedVouchers, voucherToApply],
    //     // cartTotal: calculateCartTotal(
    //     //   state.cart,
    //     //   state.selectedSurchargeProducts,
    //     //   [...state.appliedVouchers, voucherToApply]
    //     // ),
    //   };

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
        // cartTotal: calculateCartTotal(
        //   state.cart,
        //   state.selectedSurchargeProducts,
        //   updatedAppliedVouchers
        // ),
      };

    default:
      return state;
  }
};

export { initialState, actionTypes, cartReducer };
