import styled from "styled-components";

export const StyledProductRecap = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  padding: 16px;
  box-shadow: ${({ theme }) => theme.myLightBoxShadow};
  font-weight: 200;

  //padding: 15px;

  .itemImage {
    flex-shrink: 0;
  }

  .itemDetails {
    flex-grow: 1;
    //min-width: 300px; /* Allows text to wrap inside flex container */
  }

  .itemName {
    font-size: 14px;
    font-weight: 400;
    white-space: normal;
    word-wrap: break-word;
    margin: 0;
    max-width: 200px; /* Adjust this value as needed */
  }

  .itemListingQuantity {
    display: flex;
    gap: 10px;
    font-size: 14px;

    color: ${({ theme }) => theme.fontGrey};
  }

  .listingPrice {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;

    color: ${({ theme }) => theme.fontOrange};
  }

  .surchargeItem {
    padding-top: 20px;
    .surchargeDetails {
      display: flex;
      .itemName {
        font-weight: 200;
      }
    }
  }
`;
