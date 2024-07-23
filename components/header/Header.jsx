import React from "react";
import { StyledNav } from "./headerStyle";
import { WrapperWithTopBar } from "./wrapper/WrapperWithTopBar";
import { Steps } from "../steps/Steps";

const Header = ({ currentStep, handleSignIn, handleSignOut, customer }) => {
  return (
    <StyledNav>
      <WrapperWithTopBar
        handleSignIn={handleSignIn}
        customer={customer}
        handleSignOut={handleSignOut}
      />
      <Steps currentStep={currentStep} />
    </StyledNav>
  );
};

export default Header;
