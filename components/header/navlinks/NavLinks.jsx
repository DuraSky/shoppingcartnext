import React from "react";
import { StyledLinksDiv, StyledLink } from "./navLinksStyle";

const NavLinks = () => {
  return (
    <StyledLinksDiv>
      <StyledLink href="/kosik">Nakupni Kosik</StyledLink>
      <StyledLink href="/doprava">Doprava a platba</StyledLink>
      <StyledLink href="/info">Kontaktni Udaje</StyledLink>
    </StyledLinksDiv>
  );
};

export default NavLinks;
