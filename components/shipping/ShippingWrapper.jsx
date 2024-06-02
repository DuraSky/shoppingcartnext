// ShippingWrapper.js
import React, { useState } from "react";
import Shipping from "./Shipping";
import PersonalInfo from "../personalInfo/PersonalInfo";
import { ShippingPageLayout } from "./shippingWrapperStyle";
import RecapWrapper from "../recap/RecapWrapper";
export const ShippingWrapper = ({ payment, setPayment }) => {
  const [toggleShipping, setToggleShipping] = useState(false);
  const [toggleInfo, setToggleInfo] = useState(false);

  const handleToggleShipping = () => {
    setToggleShipping(!toggleShipping);
  };

  const handleToggleInfo = () => {
    setToggleInfo(!toggleInfo);
  };

  return (
    <ShippingPageLayout>
      <div className="allContent">
        <div className="shippingContent">
          <h2 onClick={handleToggleShipping}>Doprava</h2>
          {toggleShipping && (
            <Shipping payment={payment} setPayment={setPayment} />
          )}
        </div>
        <div className="formContent">
          <h2 onClick={handleToggleInfo}>Fakturační a dodací adresa</h2>
          {toggleInfo && <PersonalInfo />}
        </div>
      </div>
      <RecapWrapper />
    </ShippingPageLayout>
  );
};

export default ShippingWrapper;
