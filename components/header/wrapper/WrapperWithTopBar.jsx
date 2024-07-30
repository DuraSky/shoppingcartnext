import React, { useState, useEffect } from "react";
import { Wrapper, TopBar, SignedIn, SignOutButton } from "./wrapperStyle";
import Modal from "../../shipping/deliveryVendorsApis/Modal";
import { SignInForm } from "../signin/SingInForm";
import { sendSignIn } from "../../../utils/loader";

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
            <img src="/assets/call.png" alt="Call icon" />
            <div>
              <p>+420 703 694 133</p>
            </div>
          </div>
          <div className="textAndIcon">
            <img src="/assets/mail.png" alt="Mail icon" />
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
