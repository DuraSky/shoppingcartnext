import React from "react";
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

export const ProgressBar = ({ cart }) => {
  return (
    <StyledProgressBar>
      <h2>{getFreeShippingMessage(cart)}</h2>
      <ProgressContainer>
        <ProgressFill progress={getProgressShipping(cart)} />
        <ProgressText>{getCartPrice(cart)} Kč / 4500 Kč</ProgressText>
      </ProgressContainer>
    </StyledProgressBar>
  );
};
