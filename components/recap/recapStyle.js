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

    //gap: 10px;
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

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px inset;
  border-radius: 30px;
  padding: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.fontGrey};

  h2 {
    //font-size: 16px;
    //font-weight: lighter;
  }
`;
