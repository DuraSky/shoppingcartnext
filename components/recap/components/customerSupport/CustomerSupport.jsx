import React from "react";
import Image from "next/image";
import { StyledCustomerSupport } from "./customerSupportStyle";
import { imageLoader } from "../../../imageLoader/imageLoader";

export const CustomerSupport = () => {
  return (
    <StyledCustomerSupport>
      <div className="supportContent">
        <Image
          loader={imageLoader}
          src={"/files/upload/393225-CDDq6rAv4L.jpg"}
          width={80}
          height={80}
          alt="podpora"
        />
        <div>
          <p>Potřebujete poradit s objednávkou? </p>
          <div className="iconDiv">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="m497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6"
              />
            </svg>
            <p className="supportText">+420 706 694 133 </p>
          </div>
          <div className="iconDiv">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8m92.49 313l-20 25a16 16 0 0 1-22.49 2.5l-67-49.72a40 40 0 0 1-15-31.23V112a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v144l58 42.5a16 16 0 0 1 2.49 22.5"
              />
            </svg>
            <p className="supportText">Po - Pá: 8:00 - 16:00</p>
          </div>
        </div>
      </div>
    </StyledCustomerSupport>
  );
};
