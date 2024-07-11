import React, { useState, useContext } from "react";
import { CartContext } from "../cart/CartProvider";
import { ItemListing } from "./components/itemListing/ItemListing";

import Image from "next/image";

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
      <div className="mobileRecapHeader">
        <Image src={"/assets/shopping.png"} width={30} height={30} />
        <h3>
          Košík: <span>{cart_total_f}</span>
        </h3>
        <div className={`arrow ${toggleMobileRecap ? "rotated" : ""}`}></div>
      </div>
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
