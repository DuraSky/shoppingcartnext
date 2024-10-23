import React from "react";
import { StyledNav } from "./headerStyle";
import { WrapperWithTopBar } from "./wrapper/WrapperWithTopBar";
import { Steps } from "../steps/Steps";
import { BgColor } from "../Theme";

const Header = ({ currentStep }) => {
  //console.log("INSIDE WRAPPERWITHTOPBAR", customer);

  return (
    <StyledNav>
      <WrapperWithTopBar />
      <BgColor>
        <Steps currentStep={currentStep} />
      </BgColor>
    </StyledNav>
  );
};

export default Header;
