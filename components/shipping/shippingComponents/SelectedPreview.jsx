import React from "react";
import { StyledPreview } from "../shippingWrapperStyle";
import Image from "next/image";
import { imageLoader } from "../../imageLoader/imageLoader";
import { useDeliveryVendors } from "../deliveryVendorsApis/DeliveryVendorsProvider";

export const SelectedShippingPreview = ({ previewSelectedShipping }) => {
  const { selectedVendor } = useDeliveryVendors();

  const requiresBranchSelection = [
    "Zásilkovna",
    "Balíkovna",
    "PPL ParcelShop",
    "Balík Na poštu",
  ].includes(previewSelectedShipping.option);
  const showBranchInfo =
    requiresBranchSelection &&
    selectedVendor.vendorName === previewSelectedShipping.option;
  const showWarning =
    requiresBranchSelection &&
    selectedVendor.vendorName !== previewSelectedShipping.option;

  return (
    <StyledPreview>
      <Image
        loader={imageLoader}
        src={previewSelectedShipping.img}
        alt={previewSelectedShipping.option}
        width={100}
        height={100}
        layout="intrinsic"
      />
      <div className="optionAndPrice">
        <p>{previewSelectedShipping.option}</p>
        {showBranchInfo && (
          <div className="branchInfo">
            <h4>Zvolená pobočka:</h4>
            <p>{selectedVendor.name}</p>
          </div>
        )}
        {showWarning && (
          <div className="branchWarning">
            <p style={{ color: "red" }}>Pobočka nezvolena</p>
          </div>
        )}
        <p className="price">{previewSelectedShipping.price_f}</p>
      </div>
    </StyledPreview>
  );
};

export const SelectedPaymentPreview = ({ previewSelectedPayment }) => {
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
