import React, { useState, useEffect } from "react";
import { Wrapper, TopBar, SignedIn, SignOutButton } from "./wrapperStyle";
import Modal from "../../shipping/deliveryVendorsApis/Modal";
import { SignInForm } from "../signin/SingInForm";
import { sendSignIn } from "../../../utils/loader";

import Image from "next/image";
import { imageLoader } from "../../imageLoader/imageLoader";

const saveCustomerDetails = (customer) => {
  const customerDetails = {
    firstName: customer.first_name,
    lastName: customer.last_name,
    street: customer.street,
    zip: customer.zip,
    city: customer.city,
    email: customer.email,
    phone: customer.phone,
  };
  localStorage.setItem("personalInfoForm", JSON.stringify(customerDetails));
};

export const WrapperWithTopBar = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const storedCustomer = localStorage.getItem("personalInfoForm");
    if (storedCustomer) {
      setCustomer(JSON.parse(storedCustomer));
    }
  }, []);

  useEffect(() => {
    console.log("CURRENT STATE OF THE CUSTOMER", customer);
  }, [customer]);

  const handleModalToggle = () => {
    setToggleModal((prev) => !prev);
  };

  const handleSignIn = async (email, password) => {
    try {
      const data = await sendSignIn(email, password);
      setCustomer({
        firstName: data.customer.first_name,
        lastName: data.customer.last_name,
        street: data.customer.street,
        zip: data.customer.zip,
        city: data.customer.city,
        email: data.customer.email,
        phone: data.customer.phone,
      });
      localStorage.setItem("token", data.token);
      saveCustomerDetails(data.customer);
      console.log("Sign-in successful:", data);
      window.dispatchEvent(new Event("signInStateChange"));
    } catch (error) {
      console.error("Failed to sign in:", error);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("personalInfoForm");
    localStorage.removeItem("token");
    setCustomer(null);
    window.dispatchEvent(new Event("signInStateChange"));
  };

  return (
    <Wrapper>
      <TopBar>
        {/* <img src="/assets/logoZanapo.svg" width="200px" alt="" /> */}
        <Image
          src={"https://www.zanapo.cz/files/upload/logo-zanapo-cz-index.svg"}
          width={200}
          height={40}
        />
        <div className="menu">
          {/* <div className="iconGroup"> */}
          <div className="textAndIcon">
            <Image
              loader={imageLoader}
              src={"/files/upload/393225-CDDq6rAv4L.jpg"}
              width={40}
              height={40}
              className="supportIcon"
            />
            <div>
              <p className="bold">+420 706 694 133</p>
              <p>(po - pá: 8:00 - 16:00)</p>
            </div>
          </div>
          <div className="textAndIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13.19 2.34a2.25 2.25 0 0 0-2.38 0L3.06 7.172A2.25 2.25 0 0 0 2 9.083v7.667A3.25 3.25 0 0 0 5.25 20h13.5A3.25 3.25 0 0 0 22 16.75V9.082c0-.776-.4-1.498-1.06-1.909zm-1.587 1.272a.75.75 0 0 1 .794 0l7.242 4.517L12 12.15L4.361 8.13zM3.5 9.371l8.15 4.29a.75.75 0 0 0 .7 0l8.15-4.29v7.379a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75z"
              />
            </svg>
            <p>info@zanapo.cz</p>
          </div>
          <div
            className="textAndIcon"
            onClick={!customer ? handleModalToggle : null}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.196 17.485q1.275-.918 2.706-1.451T12 15.5t3.098.534t2.706 1.45q.99-1.024 1.593-2.42Q20 13.666 20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.667.603 3.063t1.593 2.422M12 12.5q-1.263 0-2.132-.868Q9 10.763 9 9.5t.868-2.132T12 6.5t2.132.868Q15 8.237 15 9.5t-.868 2.132T12 12.5m0 8.5q-1.883 0-3.525-.701q-1.642-.7-2.858-1.916q-1.215-1.216-1.916-2.858T3 12t.701-3.525t1.916-2.858t2.858-1.916T12 3t3.525.701t2.858 1.916q1.215 1.216 1.916 2.858T21 12t-.701 3.525t-1.916 2.858q-1.216 1.215-2.858 1.916T12 21"
              ></path>
            </svg>
            <p>
              {customer ? (
                <SignedIn>
                  {`${customer.firstName} ${customer.lastName} `}
                  <SignOutButton onClick={handleSignOut}>
                    Odhlásit se
                  </SignOutButton>
                </SignedIn>
              ) : (
                "Přihlásit se"
              )}
            </p>
          </div>
        </div>
      </TopBar>
      {toggleModal && (
        <Modal onClose={handleModalToggle}>
          <SignInForm
            onClose={handleModalToggle}
            setCustomer={setCustomer}
            handleSignIn={handleSignIn}
          />
        </Modal>
      )}
    </Wrapper>
  );
};
