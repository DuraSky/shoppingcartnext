import styled from "styled-components";

export const StyledProductRecap = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  padding: 15px;

  .itemListingQuantity {
    display: flex;
    gap: 10px;

    color: ${({ theme }) => theme.fontGrey};
  }

  .listingPrice {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;

    color: green;
  }
`;
