import React from "react";
import { StyledNextButton, StyledBackButton } from "../Theme";

export const PageControl = ({ handleGoBack, handleSubmit, buttonText }) => {
  return (
    <div className="pageControl">
      <StyledBackButton onClick={handleGoBack}>
        ← Zpět do kosiku
      </StyledBackButton>
      <StyledNextButton onClick={handleSubmit}>{buttonText}</StyledNextButton>
    </div>
  );
};
