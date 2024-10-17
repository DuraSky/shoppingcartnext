import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px auto;
  max-width: ${({ theme }) => theme.maxWidth};
  //justify-content: space-between;

  @media (max-width: 370px) {
    //margin: 30px auto;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px 0px;
  }

  @media (max-width: 395px) {
    //margin: 30px auto;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    //padding: 10px 0px;
  }

  @media (max-width: 768px) {
    margin: 30px auto;
    padding: 10px;
  }

  @media (max-width: 925px) {
    //flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 40px;
    margin: 30px auto;
    padding: 10px 30px;
  }

  @media (min-width: 926px) {
    display: flex;
    padding: 0 20px;
    //flex-direction: column;
    //flex-direction: column;
    //flex-wrap: wrap;
    //justify-content: space-between;
    //gap: 40px;
    //margin: 30px auto;
    //padding: 10px 30px;
  }
`;

export const StyledPriceCalc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 370px) {
    align-items: center;
    align-self: center;
  }

  /* @media (max-width: 921px) {
    align-self: flex-end;
  } */

  h3 {
    //color: ${({ theme }) => theme.fontGrey};
    font-weight: 300;
    font-size: 16px;
  }

  p {
    font-weight: bold;
    font-size: 18px;
  }
`;
