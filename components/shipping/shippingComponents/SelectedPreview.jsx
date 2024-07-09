import React from "react";
import { StyledPreview } from "../shippingWrapperStyle";

export const SelectedShippingPreview = ({ previewSelectedShipping }) => {
  return (
    <StyledPreview>
      <img src={previewSelectedShipping.img} alt="Shipping option" />
      <div className="optionAndPrice">
        <p> {previewSelectedShipping.option}</p>
        <p className="price">{previewSelectedShipping.price_f}</p>
      </div>
    </StyledPreview>
  );
};

export const SelectedPaymentPreview = ({ previewSelectedPayment }) => {
  return (
    <StyledPreview>
      {previewSelectedPayment.img && (
        <img src={previewSelectedPayment.img} alt="Payment option" />
      )}
      <div className="optionAndPrice">
        <p>{previewSelectedPayment.option}</p>
        {previewSelectedPayment.price !== undefined &&
          previewSelectedPayment.price !== null && (
            <p className="price">{previewSelectedPayment.price_f}</p>
          )}
      </div>
    </StyledPreview>
  );
};

export const PersonalInfoPreview = ({ formErrors }) => {
  const hasErrors = Object.keys(formErrors).length > 0;
  return (
    <StyledPreview>
      {hasErrors ? (
        <>
          <img src="/assets/alertOrange.svg" alt="alert" width="30px" />
          <p>Prosim zkontrolujte si formular</p>
        </>
      ) : (
        <>
          <img src="/assets/info.svg" alt="info" width="30px" />
          <p>Vase udaje</p>
        </>
      )}
    </StyledPreview>
  );
};
