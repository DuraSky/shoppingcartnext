const initialState = {
  shippingOptions: { countries: [] },
  selectedShippingOption: null,
  selectedShippingOptionPackageId: null,
  selectedShippingOptionImg: null,
  selectedShippingPrice: null,
  selectedShippingPriceCurrency: null,
  selectedShippingOptions: [],
  selectedPaymentOption: null,
  selectedPaymentOptionDeliveryPaymentId: null,
  selectedPaymentOptionImg: null,
  selectedPaymentOptionPrice: null,
  selectedPaymentOptionPriceCurrency: null,
};

const actionTypes = {
  SET_SHIPPING_OPTIONS: "SET_SHIPPING_OPTIONS",
  SET_SELECTED_SHIPPING_OPTION: "SET_SELECTED_SHIPPING_OPTION",
  SET_SELECTED_SHIPPING_OPTION_PACKAGE_ID:
    "SET_SELECTED_SHIPPING_OPTION_PACKAGE_ID",
  SET_SELECTED_SHIPPING_OPTION_IMG: "SET_SELECTED_SHIPPING_OPTION_IMG",
  SET_SELECTED_SHIPPING_PRICE: "SET_SELECTED_SHIPPING_PRICE",
  SET_SELECTED_SHIPPING_PRICE_CURRENCY: "SET_SELECTED_SHIPPING_PRICE_CURRENCY",
  SET_SELECTED_SHIPPING_OPTIONS: "SET_SELECTED_SHIPPING_OPTIONS",
  SET_SELECTED_PAYMENT_OPTION: "SET_SELECTED_PAYMENT_OPTION",
  SET_SELECTED_PAYMENT_OPTION_DELIVERY_PAYMENT_ID:
    "SET_SELECTED_PAYMENT_OPTION_DELIVERY_PAYMENT_ID",
  SET_SELECTED_PAYMENT_OPTION_IMG: "SET_SELECTED_PAYMENT_OPTION_IMG",
  SET_SELECTED_PAYMENT_OPTION_PRICE: "SET_SELECTED_PAYMENT_OPTION_PRICE",
  SET_SELECTED_PAYMENT_OPTION_PRICE_CURRENCY:
    "SET_SELECTED_PAYMENT_OPTION_PRICE_CURRENCY",
};

const shippingReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SHIPPING_OPTIONS:
      return { ...state, shippingOptions: action.payload };
    case actionTypes.SET_SELECTED_SHIPPING_OPTION:
      return { ...state, selectedShippingOption: action.payload };
    case actionTypes.SET_SELECTED_SHIPPING_OPTION_PACKAGE_ID:
      return { ...state, selectedShippingOptionPackageId: action.payload };
    case actionTypes.SET_SELECTED_SHIPPING_OPTION_IMG:
      return { ...state, selectedShippingOptionImg: action.payload };
    case actionTypes.SET_SELECTED_SHIPPING_PRICE:
      return { ...state, selectedShippingPrice: action.payload };
    case actionTypes.SET_SELECTED_SHIPPING_PRICE_CURRENCY:
      return { ...state, selectedShippingPriceCurrency: action.payload };
    case actionTypes.SET_SELECTED_SHIPPING_OPTIONS:
      return { ...state, selectedShippingOptions: action.payload };
    case actionTypes.SET_SELECTED_PAYMENT_OPTION:
      return { ...state, selectedPaymentOption: action.payload };
    case actionTypes.SET_SELECTED_PAYMENT_OPTION_DELIVERY_PAYMENT_ID:
      return {
        ...state,
        selectedPaymentOptionDeliveryPaymentId: action.payload,
      };
    case actionTypes.SET_SELECTED_PAYMENT_OPTION_IMG:
      return { ...state, selectedPaymentOptionImg: action.payload };
    case actionTypes.SET_SELECTED_PAYMENT_OPTION_PRICE:
      return { ...state, selectedPaymentOptionPrice: action.payload };
    case actionTypes.SET_SELECTED_PAYMENT_OPTION_PRICE_CURRENCY:
      return { ...state, selectedPaymentOptionPriceCurrency: action.payload };
    default:
      return state;
  }
};

export { initialState, actionTypes, shippingReducer };
