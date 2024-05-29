import { useState } from "react";
import Shipping from "./Shipping";

export const ShippingWrapper = ({ payment, setPayment }) => {
  const [toggleShipping, setToggleShipping] = useState(false);

  const handleToggleShipping = () => {
    setToggleShipping(!toggleShipping);
  };
  return (
    <>
      <h2 onClick={handleToggleShipping}>Doprava</h2>
      {toggleShipping && <Shipping payment={payment} setPayment={setPayment} />}
    </>
  );
};
