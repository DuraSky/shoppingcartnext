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
      <div>
        <p>Zadejte slevový kupón</p>
        <div className="inputAndButton">
          <input
            type="text"
            value={discountCode}
            onChange={handleChange}
            placeholder="Slevový kód"
          />
          <button onClick={handleApply}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="16"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256L34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941"
              />
            </svg>
          </button>
        </div>
      </div>
      {discountError && <p style={{ color: "red" }}>Neplatný slevový kód</p>}
    </StyledDiscountBar>
  );
};
