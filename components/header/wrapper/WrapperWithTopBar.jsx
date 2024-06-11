import React from "react";
import { Wrapper, TopBar } from "./wrapperStyle";

export const WrapperWithTopBar = () => {
  return (
    <Wrapper>
      <TopBar>
        <img src="/assets/logoZanapo.svg" width="200px" alt="" />

        <div className="textAndIcon">
          <img src="/assets/phone2.png" alt="ss" />
          <div>
            <p>Volejte:</p>
            <p>+420 703 694 133</p>
          </div>
        </div>

        <div className="textAndIcon">
          <img src="/assets/mail.png" alt="" />
          <p>info@zanapo.cz</p>
        </div>
      </TopBar>
    </Wrapper>
  );
};
