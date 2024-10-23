import styled from "styled-components";

export const StyledRecap = styled.div`
  //background: gray;
  display: flex;
  flex-direction: column;
  //background-color: ${({ theme }) => theme.secondaryColor};

  //padding: 0px 30px;
  //max-width: 600px;

  h2 {
    background-color: ${({ theme }) => theme.secondaryColor};
    padding: 12px 20px;
    border-bottom: 2px solid #ddd;
    font-size: 18px;
    font-weight: 500;
    color: #333;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
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
    align-items: center;
    //align-items: flex-start;

    gap: 10px;
    box-shadow: ${({ theme }) => theme.myLightBoxShadow};
    font-weight: 300;
    padding: 10px;

    svg {
      width: 30px;
    }

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
  .mobileRecapHeader {
    display: flex;
    align-items: center;
    padding: 1rem;

    h3 {
      font-size: 16px;
      font-weight: 200;
      padding: 1rem;

      span {
        font-weight: 400;
      }
    }

    .arrow {
      border-bottom: 2px solid ${({ theme }) => theme.fontOrange};
      border-right: 2px solid ${({ theme }) => theme.fontOrange};
      position: absolute;
      top: 40px;
      right: 30px;
      width: 10px;
      height: 10px;
      transform: rotate(45deg) translateY(-50%);
      transform-origin: right;
      transition: transform 0.3s;
    }

    .arrow.rotated {
      transform: rotate(225deg);
    }
  }
`;
