// ShippingWrapper.js
import React, { useState } from "react";
import Shipping from "./Shipping";
import PersonalInfo from "../personalInfo/PersonalInfo";
import { ShippingPageLayout } from "./shippingWrapperStyle";
import RecapWrapper from "../recap/RecapWrapper";
import { StyledNextButton } from "../Theme";
import Link from "next/link";

import ShippingOption from "./shippingComponents/ShippingOption";
import ShippingPriceOptions from "./shippingComponents/ShippingPriceOptions";

export const ShippingWrapper = ({ payment, setPayment }) => {
  const [toggleShipping, setToggleShipping] = useState(false);
  const [toggleInfo, setToggleInfo] = useState(false);
  const [togglePriceOption, setTogglePriceOption] = useState(false);

  const handleToggleShipping = () => {
    setToggleShipping(!toggleShipping);
  };

  const handleTogglePriceOption = () => {
    setTogglePriceOption(!togglePriceOption);
  };

  const handleToggleInfo = () => {
    setToggleInfo(!toggleInfo);
  };

  return (
    <ShippingPageLayout>
      <div className="recapWrapper">
        <RecapWrapper />
      </div>

      <div className="allContent">
        <div className="shippingContent">
          <h2 onClick={handleToggleShipping}>Doprava</h2>
          <div class="arrow"></div>

          {toggleShipping && (
            //<Shipping payment={payment} setPayment={setPayment} />
            <ShippingOption />
          )}
        </div>

        <div className="priceContent">
          <h2 onClick={handleTogglePriceOption}>Platba</h2>
          <div class="arrow"></div>

          {togglePriceOption && <ShippingPriceOptions />}
        </div>

        <div className="formContent">
          <h2 onClick={handleToggleInfo}>Fakturační a dodací adresa</h2>
          <div class="arrow"></div>
          {toggleInfo && <PersonalInfo />}
        </div>
      </div>

      <div className="odeslatObjednavku">
        <Link href="/thankyouPage/ThankYou" passHref>
          <StyledNextButton>Odeslat Objednavku ⇨</StyledNextButton>
        </Link>
      </div>
    </ShippingPageLayout>
  );
};

export default ShippingWrapper;
