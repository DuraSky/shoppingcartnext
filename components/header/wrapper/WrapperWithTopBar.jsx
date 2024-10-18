import React, { useState, useEffect } from "react";
import { Wrapper, TopBar, SignedIn, SignOutButton } from "./wrapperStyle";
import Modal from "../../shipping/deliveryVendorsApis/Modal";
import { SignInForm } from "../signin/SingInForm";
import { sendSignIn } from "../../../utils/loader";

import Image from "next/image";

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
        <img src="/assets/logoZanapo.svg" width="200px" alt="" />
        <div className="menu">
          <div className="textAndIcon">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="32"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48m-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18 18 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.9 231.9 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.9 17.9 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.4 17.4 0 0 1-.39 3.37"
              />
            </svg> */}
            <Image
              src={
                "https://files.smartsuppcdn.com/files/agents/avatars/393225-CDDq6rAv4L.jpg?size=80"
              }
              width={40}
              height={40}
              className="supportIcon"
            />
            <div>
              <p>
                <span>+420 706 694 133</span>
              </p>
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
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1"
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
