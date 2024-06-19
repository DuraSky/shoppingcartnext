import React from "react";
import { StyledNav } from "./headerStyle";
import { WrapperWithTopBar } from "./wrapper/WrapperWithTopBar";
import { Steps } from "../steps/Steps";

const Header = ({ currentStep }) => {
  return (
    <StyledNav>
      <WrapperWithTopBar />
      <Steps currentStep={currentStep} />
    </StyledNav>
  );
};

export default Header;
