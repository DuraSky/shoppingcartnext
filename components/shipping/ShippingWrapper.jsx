import React, { useState, useRef, useContext } from "react";
import { ShippingContext } from "./ShippingProvider";
import { useRouter } from "next/router";
import PersonalInfo from "../personalInfo/PersonalInfo";
import { ShippingPageLayout } from "./shippingWrapperStyle";
import RecapWrapper from "../recap/RecapWrapper";
import { StyledNextButton, StyledBackButton } from "../Theme";
import ShippingOption from "./shippingComponents/ShippingOption";
import ShippingPriceOptions from "./shippingComponents/ShippingPriceOptions";

export const ShippingWrapper = () => {
  const { state, dispatch } = useContext(ShippingContext);
  const { selectedPaymentOption } = state;
  const [toggleShipping, setToggleShipping] = useState(false);
  const [toggleInfo, setToggleInfo] = useState(false);
  const [togglePriceOption, setTogglePriceOption] = useState(false);

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
    console.log("in handleSubmit", selectedPaymentOption === null);
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  };

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
        <div className="shippingContent">
          <div className="header" onClick={handleToggleShipping}>
            <h2>Doprava</h2>
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
            />
          </div>
        </div>
      </div>

      <div className="pageControl">
        <StyledBackButton onClick={handleGoBack}>
          ⇦ Zpet do kosiku
        </StyledBackButton>
        <StyledNextButton onClick={handleSubmit}>
          Odeslat Objednavku ⇨
        </StyledNextButton>
      </div>
    </ShippingPageLayout>
  );
};

export default ShippingWrapper;
