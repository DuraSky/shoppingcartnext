import React from "react";
import NavLinks from "./navlinks/NavLinks";
import { StyledNav } from "./headerStyle";
import { WrapperWithTopBar } from "./wrapper/WrapperWithTopBar";
import { Steps } from "../steps/Steps";

const Header = ({ currentStep }) => {
  return (
    <StyledNav>
      <WrapperWithTopBar />
      <Steps currentStep={currentStep} />
      {/* <NavLinks /> */}
    </StyledNav>
  );
};

export default Header;
