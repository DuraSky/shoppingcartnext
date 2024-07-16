import React from "react";
import { StyledPreview } from "../shippingWrapperStyle";
import Image from "next/image";
import { imageLoader } from "../../imageLoader/imageLoader";

export const SelectedShippingPreview = ({ previewSelectedShipping }) => {
  //console.log("inside shippingpreview adgfadg", previewSelectedShipping);
  return (
    <StyledPreview>
      {/* <img src={previewSelectedShipping.img} alt="Shipping option" /> */}
      <Image
        loader={imageLoader}
        src={previewSelectedShipping.img}
        alt={previewSelectedShipping.option}
        width={100}
        height={100}
        layout="intrinsic"
      />
      <div className="optionAndPrice">
        <p> {previewSelectedShipping.option}</p>

        <p className="price">{previewSelectedShipping.price_f}</p>
      </div>
    </StyledPreview>
  );
};

export const SelectedPaymentPreview = ({ previewSelectedPayment }) => {
  //console.log("inside sfgadfgadgadfg", previewSelectedPayment);
  return (
    <StyledPreview>
      {previewSelectedPayment.img === "assets/card.png" ? (
        <Image
          src="/assets/card.png"
          alt={previewSelectedPayment.option}
          width={100}
          height={100}
          layout="intrinsic"
        />
      ) : (
        previewSelectedPayment.img && (
          <Image
            loader={imageLoader}
            src={previewSelectedPayment.img}
            alt={previewSelectedPayment.option}
            width={100}
            height={100}
            layout="intrinsic"
          />
        )
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
