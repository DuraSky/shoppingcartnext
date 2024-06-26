import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px auto;
  max-width: ${({ theme }) => theme.maxWidth};
  //justify-content: space-between;

  @media (max-width: 768px) {
    margin: 30px auto;
    padding: 10px;
  }

  @media (max-width: 921px) {
    flex-direction: column;
    gap: 40px;
    margin: 30px auto;
    padding: 10px;
  }

  @media (max-width: 370px) {
    //margin: 30px auto;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
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
    font-weight: lighter;
    font-size: 16px;
  }

  p {
    font-weight: bold;
    font-size: 18px;
  }
`;
