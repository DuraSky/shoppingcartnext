import React from "react";

import { RiDiscountPercentLine } from "react-icons/ri";
import { StyledVoucherRecap } from "./voucherRecapStyle";

export const VoucherRecap = ({ vouchers }) => {
  return (
    <StyledVoucherRecap>
      {vouchers.map((voucher) => (
        <div key={voucher.code} className="mainInfo">
          <RiDiscountPercentLine style={{ width: "30px", height: "30px" }} />

          <div className="voucherHeader">
            {/* <img src="/assets/coupon.png" width="30px" alt="Coupon Icon" /> */}

            <p>{voucher.code}</p>
          </div>
          <p className="price">- {voucher.value_f}</p>
        </div>
      ))}
    </StyledVoucherRecap>
  );
};
