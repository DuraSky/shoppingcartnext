import React from "react";
import { StyledNextButton, StyledBackButton } from "../Theme";

export const PageControl = ({ handleGoBack, handleSubmit, buttonText }) => {
  return (
    <div className="pageControl">
      <StyledBackButton onClick={handleGoBack}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="16"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94"
          />
        </svg>{" "}
        Zpět do kosiku
      </StyledBackButton>
      <StyledNextButton onClick={handleSubmit}>{buttonText}</StyledNextButton>
    </div>
  );
};
