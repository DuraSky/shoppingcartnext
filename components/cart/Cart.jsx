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
    console.log("Applied vouchers", appliedVouchers);
  }, [cart, vouchers, appliedVouchers]);

  const checkDiscountCode = (code) => {
    const voucher = vouchers.find((voucher) => voucher.code === code);
    if (voucher && !appliedVouchers.some((v) => v.code === code)) {
      cartDispatch({ type: cartActionTypes.APPLY_VOUCHER, payload: code });
      setDiscountError(false);
    } else {
      setDiscountError(false);
      setTimeout(() => setDiscountError(true), 0);
    }
    setDiscountCode("");
  };

  const removeVoucher = (code) => {
    cartDispatch({ type: cartActionTypes.REMOVE_VOUCHER, payload: code });
    setDiscountError(false);
  };

  const handleNextButtonClick = async () => {
    const cartChanged = JSON.stringify(initialCart) !== JSON.stringify(cart);
    const surchargeProductsChanged =
      JSON.stringify(initialSurchargeProducts) !==
      JSON.stringify(cartState.selectedSurchargeProducts);

    if (cartChanged || surchargeProductsChanged) {
      console.log("refetching shipping because the content has changed");
      try {
        const updatedShipping = await apiLoaderShippingUpdate({
          cartChanged,
          cart,
        });
        if (updatedShipping) {
          shippingDispatch({
            type: shippingActionTypes.SET_SHIPPING_OPTIONS,
            payload: updatedShipping[0] || { countries: [] },
          });
        }
      } catch (error) {
        console.error("Failed to update shipping options:", error);
      }
    }

    // Navigate to shipping view
    router.push("/?view=shipping");
  };

  return (
    <>
      <AllCartItems cart={cart} />
      <StyledWrapper>
        <div>
          <DiscountCodeBar
            setDiscountCode={setDiscountCode}
            discountCode={discountCode}
            handleCheckDiscountCode={checkDiscountCode}
            discountError={discountError}
          />
          {discountError && (
            <StyledDiscountErrorMessage>
              {discountErrorMessage}
            </StyledDiscountErrorMessage>
          )}
          {appliedVouchers.length > 0 && (
            <div>
              {appliedVouchers.map((voucher) => (
                <AppliedVoucher
                  key={voucher.code}
                  voucher={voucher}
                  removeVoucher={removeVoucher}
                />
              ))}
            </div>
          )}
        </div>

        <ProgressBar cart={cart} />
        <CartPriceCalc cartTotal={cartTotal} />
      </StyledWrapper>
      <StyledButtonWrapper>
        <StyledNextButton onClick={handleNextButtonClick}>
          Přejít na dopravu a platbu →
        </StyledNextButton>
      </StyledButtonWrapper>
    </>
  );
};

export default ShoppingCart;
