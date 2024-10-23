import React, { useContext, useState } from "react";
import { StyledDiscountBar } from "./discountCodeBarStyle";
import { CartContext } from "../CartProvider";

export const DiscountCodeBar = () => {
  const { onDiscountCode } = useContext(CartContext);
  const [discountCode, setDiscountCode] = useState("");
  const [discountError, setDiscountError] = useState(false);

  const handleChange = (e) => {
    setDiscountCode(e.target.value);
    setDiscountError(false);
  };

  const handleApply = async () => {
    const result = await onDiscountCode(discountCode, "POST");
    if (result.success) {
      setDiscountError(false);
      setDiscountCode("");
    } else {
      setDiscountError(true);
    }
  };

  return (
    <StyledDiscountBar discountError={discountError}>
      <div className="discountSection">
        <div className="discountText">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12.79 21L3 11.21v2c0 .53.21 1.04.59 1.41l7.79 7.79c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83z"
            />
            <path
              fill="currentColor"
              d="M11.38 17.41c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83L12.63.58A2.04 2.04 0 0 0 11.21 0H5C3.9 0 3 .9 3 2v6.21c0 .53.21 1.04.59 1.41zM7.25 3a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"
            />
          </svg>
          <p>Vložit slevový kupón</p>
        </div>
        <div className="inputAndButton">
          <input
            type="text"
            value={discountCode}
            onChange={handleChange}
            placeholder="Slevový kód"
          />
          <button onClick={handleApply}>UPLATNIT</button>
        </div>
      </div>
      {discountError && <p className="errorMessage">Neplatný slevový kód</p>}
    </StyledDiscountBar>
  );
};
