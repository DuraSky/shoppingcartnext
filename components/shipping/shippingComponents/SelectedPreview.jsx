import React from "react";
import { StyledPreview } from "../shippingWrapperStyle";
import Image from "next/image";
import { imageLoader } from "../../imageLoader/imageLoader";
import { useDeliveryVendors } from "../deliveryVendorsApis/DeliveryVendorsProvider";

import { HiOutlineCreditCard } from "react-icons/hi2";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoAlertCircleOutline } from "react-icons/io5";

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
            {/* <p>Pobočka:</p> */}
            <p>{selectedVendor.name}</p>
          </div>
        )}
        {showWarning && (
          <div className="branchWarning">
            <p style={{ color: "red" }}>Pobočka nezvolena</p>
          </div>
        )}
      </div>
      <p className="price">{previewSelectedShipping.price_f}</p>
    </StyledPreview>
  );
};

export const SelectedPaymentPreview = ({ previewSelectedPayment }) => {
  return (
    <StyledPreview>
      {previewSelectedPayment.img === "assets/card.png" ? (
        // <Image
        //   src="/assets/card.png"
        //   alt={previewSelectedPayment.option}
        //   width={100}
        //   height={100}
        //   layout="intrinsic"
        // />
        <HiOutlineCreditCard style={{ width: "50px", height: "50px" }} />
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
      </div>
      {previewSelectedPayment.price !== undefined &&
        previewSelectedPayment.price !== null && (
          <p className="price">{previewSelectedPayment.price_f}</p>
        )}
    </StyledPreview>
  );
};

export const PersonalInfoPreview = ({ formErrors }) => {
  const hasErrors = Object.keys(formErrors).length > 0;
  return (
    <StyledPreview>
      {hasErrors ? (
        <>
          {/* <img src="/assets/alertOrange.svg" alt="alert" width="30px" /> */}
          <IoAlertCircleOutline
            style={{ width: "50px", height: "50px", color: "orange" }}
          />

          <p>Zkontrolujte si své údaje</p>
        </>
      ) : (
        <>
          {/* <img src="/assets/info.svg" alt="info" width="30px" /> */}
          <IoPersonCircleOutline style={{ width: "50px", height: "50px" }} />

          <p>Vaše údaje</p>
        </>
      )}
    </StyledPreview>
  );
};
