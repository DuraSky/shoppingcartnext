import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../cart/CartProvider";
import { ItemListing } from "./components/itemListing/ItemListing";

import { StyledRecapMobile } from "./recapStyle";

const RecapMobile = () => {
  const { state: cartState } = useContext(CartContext);
  const { cart, cartTotal } = cartState;

  const [toggleMobileRecap, setToggleMobileRecap] = useState(false);

  const handleToggleMobileRecap = () => {
    setToggleMobileRecap(!toggleMobileRecap);
  };

  return (
    <StyledRecapMobile onClick={handleToggleMobileRecap}>
      <h2>Kosik {cartTotal}</h2>
      {toggleMobileRecap && <ItemListing cart={cart} />}
    </StyledRecapMobile>
  );
};

export default RecapMobile;
