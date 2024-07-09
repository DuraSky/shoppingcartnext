import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../CartProvider";
import {
  getCartPrice,
  getFreeShippingMessage,
  getProgressShipping,
} from "../../../utils/cartUtil";
import {
  StyledProgressBar,
  ProgressContainer,
  ProgressFill,
  ProgressText,
} from "./progressBarStyle";

export const ProgressBar = () => {
  const { state } = useContext(CartContext);
  const { cart_total, cart_products } = state;

  const [isShippingFree, setIsShippingFree] = useState(false);

  useEffect(() => {
    setIsShippingFree(cart_total >= 4500);
  }, [cart_total]);

  return (
    <StyledProgressBar>
      <div className="messageWithIcon">
        {getFreeShippingMessage(cart_total)}
        <img src="/assets/truck5.svg" width="35px" alt="" />
      </div>
      <ProgressContainer>
        <ProgressFill progress={getProgressShipping(cart_total)} />
        {!isShippingFree && (
          <ProgressText>{cart_total} Kč / 4500 Kč</ProgressText>
        )}
      </ProgressContainer>
    </StyledProgressBar>
  );
};
