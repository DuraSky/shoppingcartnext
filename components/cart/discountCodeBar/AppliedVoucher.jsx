import React, { useContext } from "react";
import { StyledAppliedCode } from "./appliedVoucherStyle";

import { CartContext } from "../CartProvider";

export const AppliedVoucher = ({ voucher }) => {
  const { onDiscountCode } = useContext(CartContext);

  const handleRemove = async (voucher) => {
    const result = await onDiscountCode(voucher, "DELETE");
    //console.log(result);
    // if (result.success) {
    //   setDiscountError(false);
    // } else {
    //   setDiscountError(true);
    // }
  };
  return (
    <StyledAppliedCode>
      <div className="voucherContent">
        <p className="codeName">{voucher.code}</p>
        <p>-{voucher.value} Kč</p>
      </div>

      <button onClick={() => handleRemove(voucher.code)}>X</button>
      {/* <button>X</button> */}
    </StyledAppliedCode>
  );
};
