import styled from "styled-components";

export const StyledRecap = styled.div`
  //background: gray;
  display: flex;
  flex-direction: column;
  padding: 0px 50px;
  max-width: 600px;

  h2 {
    font-size: 20px;
    font-weight: 500;
    padding: 10px;
  }

  .borderRecap {
    border-bottom: 1px solid;
  }

  h3 {
    font-size: 16px;
    font-weight: 300;
    padding: 10px;
  }
  .recapOption {
    display: flex;
    gap: 10px;
  }
`;

export const StyledRecapMobile = styled.div`
  //display: flex;

  h2 {
    font-size: 16px;
    font-weight: lighter;
  }
`;
