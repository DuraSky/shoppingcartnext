import React, { useState, useEffect, useContext } from "react";
import { CartContext, actionTypes } from "./CartProvider";
import { ProgressBar } from "./progressBar/ProgressBar";
import { CartPriceCalc } from "./cartPriceCalc/CartPriceCalc";
import { DiscountCodeBar } from "./discountCodeBar/DiscountCodeBar";
import { AllCartItems } from "./cartItems/AllCartItems";
import { StyledWrapper } from "./cartPriceCalc/cartPriceCalcStyle";
import { StyledNextButton, StyledButtonWrapper } from "../Theme";
import Link from "next/link";
import { AppliedVoucher } from "./discountCodeBar/AppliedVoucher";
import { StyledDiscountErrorMessage } from "./discountCodeBar/discountCodeBarStyle";

const ShoppingCart = () => {
  const { state, dispatch } = useContext(CartContext);
  const { cart, cartTotal, vouchers, appliedVouchers } = state;

  const [discountCode, setDiscountCode] = useState("");
  const [discountError, setDiscountError] = useState(false);
  const [discountErrorMessage, setDiscountErrorMessage] =
    useState("Neplatný kód");

  useEffect(() => {
    console.log("Current state of the cart", cart);
    console.log("Received vouchers", vouchers);
    console.log("Applied vouchers", appliedVouchers);
  }, [cart, vouchers, appliedVouchers]);

  const checkDiscountCode = (code) => {
    const voucher = vouchers.find((voucher) => voucher.code === code);
    if (voucher && !appliedVouchers.some((v) => v.code === code)) {
      dispatch({ type: actionTypes.APPLY_VOUCHER, payload: code });
      setDiscountError(false);
    } else {
      // Temporarily set error to false to reset the animation
      setDiscountError(false);
      setTimeout(() => setDiscountError(true), 0);
    }
    setDiscountCode(""); // Reset the discount code input
  };

  const removeVoucher = (code) => {
    dispatch({ type: actionTypes.REMOVE_VOUCHER, payload: code });
    setDiscountError(false);
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
        <Link href="/?view=shipping" passHref>
          <StyledNextButton>Přejít na dopravu a platbu →</StyledNextButton>
        </Link>
      </StyledButtonWrapper>
    </>
  );
};

export default ShoppingCart;
