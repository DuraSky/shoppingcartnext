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
      <div className="messageWithIcon">
        {getFreeShippingMessage(cart)}
        <img src="/assets/truck5.svg" width="35px" alt="" />
      </div>
      <ProgressContainer>
        <ProgressFill progress={getProgressShipping(cart)} />
        <ProgressText>{getCartPrice(cart)} Kč / 4500 Kč</ProgressText>
      </ProgressContainer>
    </StyledProgressBar>
  );
};
