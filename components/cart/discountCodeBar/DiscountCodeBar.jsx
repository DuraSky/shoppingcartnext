import React from "react";
import { StyledDiscountBar } from "./discountCodeBarStyle";

export const DiscountCodeBar = ({
  showDiscountForm,
  showDiscountField,
  setShowDiscountField,
  setDiscountCode,
  discountCode,
  handleCheckDiscountCode, // Renamed the prop to avoid conflict
}) => {
  return (
    <>
      {showDiscountForm && (
        <StyledDiscountBar>
          <div>
            <input
              type="checkbox"
              id="displayForm"
              onClick={() => setShowDiscountField((prev) => !prev)}
            />
            <label htmlFor="displayForm">
              Mám dárkový poukaz, slevový kupón nebo kód na dárek
            </label>
          </div>
          {showDiscountField && (
            <div>
              <input
                type="text"
                placeholder="Slevovy kod"
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <button
                type="button"
                onClick={() => handleCheckDiscountCode(discountCode)} // Updated to use the renamed prop
              >
                ⇨
              </button>
            </div>
          )}
        </StyledDiscountBar>
      )}
    </>
  );
};
