const initialState = {
  shippingOptions: { countries: [] },
  selectedShippingOption: null,
  selectedShippingOptionImg: null,
  selectedShippingPrice: null,
  selectedShippingOptions: [],
  selectedPaymentOption: null,
  selectedPaymentOptionImg: null,
  selectedPaymentOptionPrice: null,
};

const actionTypes = {
  SET_SHIPPING_OPTIONS: "SET_SHIPPING_OPTIONS",
  SET_SELECTED_SHIPPING_OPTION: "SET_SELECTED_SHIPPING_OPTION",
  SET_SELECTED_SHIPPING_OPTION_IMG: "SET_SELECTED_SHIPPING_OPTION_IMG",
  SET_SELECTED_SHIPPING_PRICE: "SET_SELECTED_SHIPPING_PRICE",
  SET_SELECTED_SHIPPING_OPTIONS: "SET_SELECTED_SHIPPING_OPTIONS",
  SET_SELECTED_PAYMENT_OPTION: "SET_SELECTED_PAYMENT_OPTION",
  SET_SELECTED_PAYMENT_OPTION_IMG: "SET_SELECTED_PAYMENT_OPTION_IMG",
  SET_SELECTED_PAYMENT_OPTION_PRICE: "SET_SELECTED_PAYMENT_OPTION_PRICE",
};

const shippingReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SHIPPING_OPTIONS:
      return { ...state, shippingOptions: action.payload };
    case actionTypes.SET_SELECTED_SHIPPING_OPTION:
      return { ...state, selectedShippingOption: action.payload };
    case actionTypes.SET_SELECTED_SHIPPING_OPTION_IMG:
      return { ...state, selectedShippingOptionImg: action.payload };
    case actionTypes.SET_SELECTED_SHIPPING_PRICE:
      return { ...state, selectedShippingPrice: action.payload };
    case actionTypes.SET_SELECTED_SHIPPING_OPTIONS:
      return { ...state, selectedShippingOptions: action.payload };
    case actionTypes.SET_SELECTED_PAYMENT_OPTION:
      return { ...state, selectedPaymentOption: action.payload };
    case actionTypes.SET_SELECTED_PAYMENT_OPTION_IMG:
      return { ...state, selectedPaymentOptionImg: action.payload };
    case actionTypes.SET_SELECTED_PAYMENT_OPTION_PRICE:
      return { ...state, selectedPaymentOptionPrice: action.payload };
    default:
      return state;
  }
};

export { initialState, actionTypes, shippingReducer };
