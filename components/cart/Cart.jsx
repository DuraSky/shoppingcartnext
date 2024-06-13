import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartProvider";
import { ProgressBar } from "./progressBar/ProgressBar";
import { CartPriceCalc } from "./cartPriceCalc/CartPriceCalc";
import { DiscountCodeBar } from "./discountCodeBar/DiscountCodeBar";
import { AllCartItems } from "./cartItems/AllCartItems";
import { StyledWrapper } from "./cartPriceCalc/cartPriceCalcStyle";

import { StyledNextButton, StyledButtonWrapper } from "../Theme";
import Link from "next/link";

const ShoppingCart = () => {
  const { state } = useContext(CartContext);
  const { cart, cartTotal } = state;

  const [discountCode, setDiscountCode] = useState("");
  // const [showDiscountField, setShowDiscountField] = useState(false);

  useEffect(() => {
    console.log("Current state of the cart", cart);
  }, [cart]);

  const checkDiscountCode = (code) => {
    if (code === "sleva100") {
      console.log("spravny kod");
      // setShowDiscountForm(false);
    } else {
      console.log("spatny kod");
    }
  };

  return (
    <>
      <AllCartItems cart={cart} />
      {/* <BoxShadowWrapper> */}
      <StyledWrapper>
        <DiscountCodeBar
          setDiscountCode={setDiscountCode}
          discountCode={discountCode}
          handleCheckDiscountCode={checkDiscountCode}
        />
        <ProgressBar cart={cart} />
        <CartPriceCalc cartTotal={cartTotal} />
      </StyledWrapper>
      <StyledButtonWrapper>
        <Link href="/?view=shipping" passHref>
          <StyledNextButton>Přejít na dopravu a platbu →</StyledNextButton>
        </Link>
      </StyledButtonWrapper>
      {/* </BoxShadowWrapper> */}
    </>
  );
};

export default ShoppingCart;
