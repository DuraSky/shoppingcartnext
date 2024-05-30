import React from "react";
import NavLinks from "./navlinks/NavLinks";

import { StyledNav } from "./headerStyle";
import { WrapperWithTopBar } from "./wrapper/WrapperWithTopBar";
import { Steps } from "../steps/Steps";

const Header = () => {
  return (
    <StyledNav>
      <WrapperWithTopBar />
      <Steps />
      {/* <NavLinks /> */}
    </StyledNav>
  );
};

export default Header;
