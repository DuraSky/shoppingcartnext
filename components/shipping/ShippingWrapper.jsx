import React, { useState, useRef, useContext, useEffect } from "react";
import { ShippingContext } from "./ShippingProvider";
import { useRouter } from "next/router";
import PersonalInfo from "../personalInfo/PersonalInfo";
import { ShippingPageLayout, StyledPreview } from "./shippingWrapperStyle";
import RecapWrapper from "../recap/RecapWrapper";
import { StyledNextButton, StyledBackButton } from "../Theme";
import ShippingOption from "./shippingComponents/ShippingOption";
import ShippingPriceOptions from "./shippingComponents/ShippingPriceOptions";
import useFormErrors from "./FormErrors"; // Import the custom hook

export const ShippingWrapper = () => {
  const { state } = useContext(ShippingContext);
  const {
    selectedPaymentOption,
    selectedPaymentOptionImg,
    selectedShippingOption,
    selectedShippingOptionImg,
  } = state;
  const [toggleShipping, setToggleShipping] = useState(false);
  const [toggleInfo, setToggleInfo] = useState(false);
  const [togglePriceOption, setTogglePriceOption] = useState(false);

  const [buttonText, setButtonText] = useState("Odeslat objednavku");

  const [previewSelectedShipping, setPreviewSelectedShipping] = useState({
    option: "Select a shipping option",
    img: null,
  });
  const [previewSelectedPayment, setPreviewSelectedPayment] = useState({
    option: "Prosim zvolte typ platby",
    img: null,
  });

  const [formErrors, updateFormErrors] = useFormErrors();
  const formRef = useRef(null);
  const router = useRouter();

  const handleToggleShipping = () => {
    setToggleShipping(!toggleShipping);
  };

  const handleTogglePriceOption = () => {
    setTogglePriceOption(!togglePriceOption);
  };

  const handleToggleInfo = () => {
    setToggleInfo(!toggleInfo);
  };

  const handleSubmit = () => {
    if (selectedPaymentOption === null) {
      setTogglePriceOption(true);
      return;
    }

    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  };

  // Effect to handle toggle state based on selectedPaymentOption
  useEffect(() => {
    if (selectedPaymentOption !== null) {
      setTogglePriceOption(false);
      setToggleInfo(true);
    }
  }, [selectedPaymentOption]);

  const handleFormError = (errors) => {
    console.log("Incoming errors from PersonalInfo: ", errors);
    updateFormErrors(errors);
  };

  // Effect to update button text based on selectedPaymentOption and formErrors
  useEffect(() => {
    if (selectedPaymentOption === null) {
      setButtonText("Prosim zvolte typ platby");
    } else if (Object.keys(formErrors).length > 0) {
      const firstErrorKey = Object.keys(formErrors).find(
        (key) => formErrors[key]
      );
      if (firstErrorKey) {
        setButtonText(formErrors[firstErrorKey].message);
      }
    } else {
      setButtonText("Odeslat objednavku ➡");
    }
  }, [selectedPaymentOption, formErrors]);

  // Effect to update previewSelectedShipping when selectedShippingOption changes
  useEffect(() => {
    setPreviewSelectedShipping({
      option: selectedShippingOption || "Select a shipping option",
      img: selectedShippingOptionImg,
    });
  }, [selectedShippingOption, selectedShippingOptionImg]);

  // Effect to update previewSelectedPayment when selectedPaymentOption changes
  useEffect(() => {
    if (selectedPaymentOption === null) {
      setPreviewSelectedPayment({
        option: "Prosim zvolte typ platby",
        img: null,
      });
    } else {
      setPreviewSelectedPayment({
        option: selectedPaymentOption,
        img: selectedPaymentOptionImg,
      });
    }
  }, [selectedPaymentOption, selectedPaymentOptionImg]);

  const handleFormSubmitSuccess = () => {
    router.push({
      pathname: router.pathname,
      query: { view: "thankyou" },
    });
  };

  const handleGoBack = () => {
    router.push({
      pathname: router.pathname,
      query: { view: "cart" },
    });
  };

  return (
    <ShippingPageLayout>
      <div className="recapWrapper">
        <RecapWrapper />
      </div>

      <div className="allContent">
        <h2>Doprava</h2>
        <div className="shippingContent">
          <div className="header" onClick={handleToggleShipping}>
            <StyledPreview>
              {previewSelectedShipping.img && (
                <img src={previewSelectedShipping.img} alt="Shipping option" />
              )}
              {previewSelectedShipping.option}
            </StyledPreview>
            <div className="arrow"></div>
          </div>

          {toggleShipping && (
            <div onClick={(e) => e.stopPropagation()}>
              <ShippingOption />
            </div>
          )}
        </div>

        <h2>Platba</h2>
        <div className="priceContent">
          <div className="header" onClick={handleTogglePriceOption}>
            <StyledPreview>
              {selectedPaymentOption ? (
                <>
                  {previewSelectedPayment.img && (
                    <img
                      src={previewSelectedPayment.img}
                      alt="Payment option"
                    />
                  )}
                  {previewSelectedPayment.option}
                </>
              ) : (
                previewSelectedPayment.option
              )}
            </StyledPreview>
            <div className="arrow"></div>
          </div>

          {togglePriceOption && (
            <div onClick={(e) => e.stopPropagation()}>
              <ShippingPriceOptions />
            </div>
          )}
        </div>

        <h2>Fakturační a dodací adresa</h2>
        <div className="formContent">
          <div className="header" onClick={handleToggleInfo}>
            <div className="arrow"></div>
          </div>
          <div
            style={{ display: toggleInfo ? "block" : "none" }}
            onClick={(e) => e.stopPropagation()}
          >
            <PersonalInfo
              ref={formRef}
              onFormSubmitSuccess={handleFormSubmitSuccess}
              onError={handleFormError}
            />
          </div>
        </div>
      </div>

      <div className="pageControl">
        <StyledBackButton onClick={handleGoBack}>
          ⇦ Zpet do kosiku
        </StyledBackButton>
        <StyledNextButton onClick={handleSubmit}>{buttonText}</StyledNextButton>
      </div>
    </ShippingPageLayout>
  );
};

export default ShippingWrapper;
