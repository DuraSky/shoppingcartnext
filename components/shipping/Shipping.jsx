import React, { useContext, useEffect } from "react";
import { ShippingContext } from "./ShippingProvider";

// import "./shippingStyle.scss";
import ShippingOption from "./shippingComponents/ShippingOption";
import ShippingPriceOptions from "./shippingComponents/ShippingPriceOptions";

import Recap from "../recap/Recap";

const Shipping = () => {
  const { state } = useContext(ShippingContext);
  const { shippingOptions } = state;

  useEffect(() => {
    console.log("Shipping Options in Shipping Component:", shippingOptions);
  }, [shippingOptions]);

  return (
    <>
      <div className="shippingTypes">
        <ShippingOption />
      </div>

      <div className="paymentOptions">
        <h2>Vyberte platbu</h2>
        <ShippingPriceOptions />
      </div>

      <Recap />
    </>
  );
};

export default Shipping;
