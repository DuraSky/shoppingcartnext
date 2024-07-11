import React, { useContext, useState } from "react";
import { StyledDiscountBar } from "./discountCodeBarStyle";
import { CartContext } from "../CartProvider";

export const DiscountCodeBar = () => {
  const { onDiscountCode } = useContext(CartContext);
  const [discountCode, setDiscountCode] = useState("");
  const [discountError, setDiscountError] = useState(false);

  const handleChange = (e) => {
    setDiscountCode(e.target.value);
  };

  const handleApply = async () => {
    const result = await onDiscountCode(discountCode, "POST");
    if (result.success) {
      setDiscountError(false);
    } else {
      setDiscountError(true);
    }
  };

  return (
    <StyledDiscountBar discountError={discountError}>
      <div>
        <p>Zadejte slevový kupón</p>
        <input
          type="text"
          value={discountCode}
          onChange={handleChange}
          placeholder="Slevový kód"
        />
        <button onClick={handleApply}> ⇨</button>
      </div>
      {discountError && <p style={{ color: "red" }}>Invalid discount code</p>}
    </StyledDiscountBar>
  );
};
