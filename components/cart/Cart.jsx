import React, { useState, useEffect, useContext } from "react";
import { CartContext, actionTypes as cartActionTypes } from "./CartProvider";
import {
  ShippingContext,
  actionTypes as shippingActionTypes,
} from "../shipping/ShippingProvider";
import { ProgressBar } from "./progressBar/ProgressBar";
import { CartPriceCalc } from "./cartPriceCalc/CartPriceCalc";
import { DiscountCodeBar } from "./discountCodeBar/DiscountCodeBar";
import { AllCartItems } from "./cartItems/AllCartItems";
import { StyledWrapper } from "./cartPriceCalc/cartPriceCalcStyle";
import { StyledNextButton, StyledButtonWrapper } from "../Theme";
import { AppliedVoucher } from "./discountCodeBar/AppliedVoucher";
import { StyledDiscountErrorMessage } from "./discountCodeBar/discountCodeBarStyle";
import { apiLoaderShippingUpdate } from "../../utils/loader";
import { useRouter } from "next/router";

const ShoppingCart = () => {
  const { state: cartState, dispatch: cartDispatch } = useContext(CartContext);
  const { state: shippingState, dispatch: shippingDispatch } =
    useContext(ShippingContext);
  const { cart, cartTotal, vouchers, appliedVouchers } = cartState;
  const [initialCart, setInitialCart] = useState(cart);
  const [initialSurchargeProducts, setInitialSurchargeProducts] = useState(
    cartState.selectedSurchargeProducts
  );

  const [discountCode, setDiscountCode] = useState("");
  const [discountError, setDiscountError] = useState(false);
  const [discountErrorMessage, setDiscountErrorMessage] =
    useState("Neplatný kód");

  const router = useRouter();

  useEffect(() => {
    console.log("Current state of the cart", cart);
    console.log("Received vouchers", vouchers);
    //console.log("Applied vouchers", appliedVouchers);
  }, [cart, vouchers]);

  // const checkDiscountCode = (code) => {
  //   const voucher = vouchers.find((voucher) => voucher.code === code);
  //   if (voucher && !appliedVouchers.some((v) => v.code === code)) {
  //     cartDispatch({ type: cartActionTypes.APPLY_VOUCHER, payload: code });
  //     setDiscountError(false);
  //   } else {
  //     setDiscountError(false);
  //     setTimeout(() => setDiscountError(true), 0);
  //   }
  //   setDiscountCode("");
  // };

  // const removeVoucher = (code) => {
  //   cartDispatch({ type: cartActionTypes.REMOVE_VOUCHER, payload: code });
  //   setDiscountError(false);
  // };

  const handleNextButtonClick = async () => {
    // const cartChanged = JSON.stringify(initialCart) !== JSON.stringify(cart);
    // const surchargeProductsChanged =
    //   JSON.stringify(initialSurchargeProducts) !==
    //   JSON.stringify(cartState.selectedSurchargeProducts);

    // if (cartChanged || surchargeProductsChanged) {
    //   console.log("refetching shipping because the content has changed");
    //   try {
    //     const updatedShipping = await apiLoaderShippingUpdate({
    //       cartChanged,
    //       cart,
    //     });
    //     if (updatedShipping) {
    //       shippingDispatch({
    //         type: shippingActionTypes.SET_SHIPPING_OPTIONS,
    //         payload: updatedShipping[0] || { countries: [] },
    //       });
    //     }
    //   } catch (error) {
    //     console.error("Failed to update shipping options:", error);
    //   }
    // }

    // Navigate to shipping view
    //router.push("/?view=shipping");
    router.push("/doprava-a-platba");
  };

  // const handleNextButtonClick = () => {
  //   router.push("/?view=shipping");
  // };

  return (
    <>
      <AllCartItems cart={cart} />

      <StyledWrapper>
        <div>
          <DiscountCodeBar
            setDiscountCode={setDiscountCode}
            discountCode={discountCode}
            //handleCheckDiscountCode={checkDiscountCode}
            discountError={discountError}
          />
          {discountError && (
            <StyledDiscountErrorMessage>
              {discountErrorMessage}
            </StyledDiscountErrorMessage>
          )}
          {/* {appliedVouchers.length > 0 && (
            <div>
              {appliedVouchers.map((voucher) => (
                <AppliedVoucher
                  key={voucher.code}
                  voucher={voucher}
                  removeVoucher={removeVoucher}
                />
              ))}
            </div>
          )} */}
          {vouchers.length > 0 && (
            <div>
              {vouchers.map((voucher) => (
                <AppliedVoucher key={voucher.code} voucher={voucher} />
              ))}
            </div>
          )}
        </div>

        <ProgressBar cart={cart} />
        {/* <CartPriceCalc cartTotal={cartTotal} /> */}
        <CartPriceCalc />
      </StyledWrapper>
      <StyledButtonWrapper>
        <StyledNextButton onClick={handleNextButtonClick}>
          Doprava a platba{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="16"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256L34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941"
            />
          </svg>
        </StyledNextButton>
      </StyledButtonWrapper>
    </>
  );
};

export default ShoppingCart;
