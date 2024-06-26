import styled from "styled-components";

export const StyledRecap = styled.div`
  //background: gray;
  display: flex;
  flex-direction: column;
  //padding: 0px 30px;
  //max-width: 600px;

  h2 {
    background-color: ${({ theme }) => theme.backgroundGrey};
    padding: 1rem;
    /* border-bottom: 1px solid #ddd; */
    box-shadow: ${({ theme }) => theme.myMediumBoxShadow};
    border-top-right-radius: ${({ theme }) => theme.myBorderRadius};
    border-top-left-radius: ${({ theme }) => theme.myBorderRadius};

    text-align: center;
    font-size: 14px;
    margin: 0;
    //color: ${({ theme }) => theme.fontGrey};
    font-weight: 400;
  }

  h3 {
    font-size: 16px;
    font-weight: 300;
    //padding: 10px;
    //color: ${({ theme }) => theme.fontGrey};
  }

  .flexWrapper {
    display: flex;
  }
  .recapOption {
    display: flex;

    gap: 10px;
    box-shadow: ${({ theme }) => theme.myLightBoxShadow};
    font-weight: 200;
    padding: 10px;

    p {
      &:last-child {
        color: ${({ theme }) => theme.fontOrange};
      }
    }
  }

  .voucher {
    justify-content: space-between;
    align-items: center;

    .voucherHeader {
      display: flex;
      align-items: center;

      font-weight: 200;
      p {
        color: black;
      }
      gap: 10px;
    }
  }

  .final {
    font-weight: 600;
  }

  /* .odeslatObjednavku {
    display: flex;
    justify-content: flex-end;
    
  } */
`;

export const StyledRecapMobile = styled.div`
  //display: flex;

  h2 {
    background: ${({ theme }) => theme.backgroundGrey};
    font-size: 14px;
    font-weight: 400;
    padding: 1rem;
    box-shadow: ${({ theme }) => theme.myMediumBoxShadow};
    border-top-right-radius: ${({ theme }) => theme.myBorderRadius};
    border-top-left-radius: ${({ theme }) => theme.myBorderRadius};
  }
`;
