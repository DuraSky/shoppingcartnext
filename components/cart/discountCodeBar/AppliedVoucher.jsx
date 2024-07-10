import React from "react";
import { StyledAppliedCode } from "./appliedVoucherStyle";

export const AppliedVoucher = ({ voucher }) => {
  return (
    <StyledAppliedCode>
      <div className="voucherContent">
        <p className="codeName">{voucher.code}</p>
        <p>-{voucher.value} Kč</p>
      </div>

      {/* <button onClick={() => removeVoucher(voucher.code)}>X</button> */}
      <button>X</button>
    </StyledAppliedCode>
  );
};
