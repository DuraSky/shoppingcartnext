import React from "react";

import { RiDiscountPercentLine } from "react-icons/ri";

export const VoucherRecap = ({ vouchers }) => {
  return (
    <>
      {vouchers.map((voucher) => (
        <div key={voucher.code} className="recapOption voucher">
          <div className="voucherHeader">
            {/* <img src="/assets/coupon.png" width="30px" alt="Coupon Icon" /> */}
            <RiDiscountPercentLine style={{ width: "30px", height: "30px" }} />

            <p>{voucher.code}</p>
          </div>
          <p className="voucherValue">-{voucher.value_f}</p>
        </div>
      ))}
    </>
  );
};
