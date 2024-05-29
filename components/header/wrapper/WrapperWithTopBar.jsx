import React from "react";
import { Wrapper, TopBar, InfoAndIcon } from "./wrapperStyle";

export const WrapperWithTopBar = () => {
  return (
    <Wrapper>
      <TopBar>
        <img src="/assets/logoZanapo.svg" width="200px" alt="" />
        <InfoAndIcon>
          <img src="/assets/heart.png" width="20px" alt="" />
          <p>info@zanapo.cz</p>
        </InfoAndIcon>
      </TopBar>
    </Wrapper>
  );
};
