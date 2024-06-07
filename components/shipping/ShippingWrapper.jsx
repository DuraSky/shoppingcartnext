import React, { useState, useRef, useContext, useEffect } from "react";
import { ShippingContext } from "./ShippingProvider";
import { useRouter } from "next/router";
import PersonalInfo from "../personalInfo/PersonalInfo";
import { ShippingPageLayout } from "./shippingWrapperStyle";
import RecapWrapper from "../recap/RecapWrapper";
import { StyledNextButton, StyledBackButton } from "../Theme";
import ShippingOption from "./shippingComponents/ShippingOption";
import ShippingPriceOptions from "./shippingComponents/ShippingPriceOptions";
import useFormErrors from "./FormErrors"; // Import the custom hook

export const ShippingWrapper = () => {
  const { state } = useContext(ShippingContext);
  const { selectedPaymentOption } = state;
  const [toggleShipping, setToggleShipping] = useState(false);
  const [toggleInfo, setToggleInfo] = useState(false);
  const [togglePriceOption, setTogglePriceOption] = useState(false);
  const [buttonText, setButtonText] = useState("Odeslat objednavku");

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

  const handleFormSubmitSuccess = () => {
    router.push({
      pathname: router.pathname,
      query: { view: "thankyou" },
    });
  };

  const handleGoBack = () => {
    router.push({
      pathname: router.pathname,
      query: { view: "kosik" },
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
            <div className="arrow"></div>
          </div>

          {toggleShipping && (
            <div onClick={(e) => e.stopPropagation()}>
              <ShippingOption />
            </div>
          )}
        </div>

        <div className="priceContent">
          <div className="header" onClick={handleTogglePriceOption}>
            <h2>Platba</h2>
            <div className="arrow"></div>
          </div>

          {togglePriceOption && (
            <div onClick={(e) => e.stopPropagation()}>
              <ShippingPriceOptions />
            </div>
          )}
        </div>

        <div className="formContent">
          <div className="header" onClick={handleToggleInfo}>
            <h2>Fakturační a dodací adresa</h2>
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
