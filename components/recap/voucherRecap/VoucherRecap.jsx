import React from "react";

export const VoucherRecap = ({ vouchers }) => {
  return (
    <>
      {vouchers.map((voucher) => (
        <div key={voucher.code} className="recapOption voucher">
          <div className="voucherHeader">
            <img src="/assets/coupon.png" width="30px" alt="Coupon Icon" />
            <p>{voucher.code}</p>
          </div>
          <p className="voucherValue">-{voucher.value} Kč</p>
        </div>
      ))}
    </>
  );
};
