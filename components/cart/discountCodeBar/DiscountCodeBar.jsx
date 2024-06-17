import React from "react";
import { StyledDiscountBar } from "./discountCodeBarStyle";

export const DiscountCodeBar = ({
  setDiscountCode,
  discountCode,
  handleCheckDiscountCode,
  discountError,
}) => {
  const handleChange = (e) => {
    setDiscountCode(e.target.value);
  };

  const handleApply = () => {
    handleCheckDiscountCode(discountCode);
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
    </StyledDiscountBar>
  );
};
