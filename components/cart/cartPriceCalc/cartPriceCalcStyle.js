import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  /* flex-grow: 1;
  align-items: center;
  justify-content: space-between; */
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  flex-grow: 1;

  margin: 0px auto;
  margin-top: 10px;
  max-width: ${({ theme }) => theme.maxWidth};
  background-color: white;
  padding: 0 5px;

  @media (min-width: 700px) {
    flex-direction: row;
  }

  @media (min-width: 1000px) {
    padding: 0;
  }

  /* @media (min-width: 800px) {
  } */

  .discountAndProgress {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    /* justify-content: space-between;
    align-items: center; */
    gap: 5px;
    margin-bottom: 40px;
    //flex-direction: column;

    /* background-color: ${({ theme }) => theme.secondaryColor};
    padding: 20px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.myInsetBoxShadow}; */

    @media (min-width: 650px) {
      flex-direction: row;
    }

    .discountOnly {
      //border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-self: center;
      //order: 2;
      @media (min-width: 800px) {
        //align-self: flex-start;
        //order: 1;
      }
      @media (min-width: 900px) {
        background-color: ${({ theme }) => theme.secondaryColor};
        box-shadow: ${({ theme }) => theme.myLightBoxShadow};
        padding: 30px;
        max-width: 250px;

        max-width: 400px;
      }
    }
  }
  //justify-content: space-between;

  /* @media (max-width: 370px) {
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
    padding: 20px 30px;
  } */

  @media (min-width: 926px) {
    display: flex;
    padding-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 20px;
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
  gap: 10px;

  h3 {
    font-size: 18px;
    color: ${({ theme }) => theme.primaryColor};
    font-weight: bold;
  }

  p {
    font-size: 24px;
    color: ${({ theme }) => theme.fontColor};
    font-weight: bold;
  }
`;
