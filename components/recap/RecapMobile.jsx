import React, { useState, useContext } from "react";
import { CartContext } from "../cart/CartProvider";
import { ItemListing } from "./components/itemListing/ItemListing";

import { StyledRecapMobile } from "./recapStyle";

const RecapMobile = () => {
  const { state: cartState } = useContext(CartContext);
  const { cart, cart_total_f, selectedSurchargeProducts } = cartState;

  const [toggleMobileRecap, setToggleMobileRecap] = useState(false);

  const handleToggleMobileRecap = () => {
    setToggleMobileRecap(!toggleMobileRecap);
  };

  return (
    <StyledRecapMobile onClick={handleToggleMobileRecap}>
      <h2>Košík {cart_total_f}</h2>
      {toggleMobileRecap && (
        <ItemListing
          cart={cart}
          selectedSurchargeProducts={selectedSurchargeProducts}
        />
      )}
    </StyledRecapMobile>
  );
};

export default RecapMobile;
