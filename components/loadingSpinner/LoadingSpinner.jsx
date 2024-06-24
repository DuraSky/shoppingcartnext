import React from "react";
import { Spinner, LoadingContainer, LoadingText } from "./loadingSpinnerStyle";

export const LoadingSpinner = () => {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>
        Načítání košíku<span className="dots">...</span>
      </LoadingText>
    </LoadingContainer>
  );
};
