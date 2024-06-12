import styled from "styled-components";

export const StyledPriceOption = styled.div`
  label {
    display: flex;
    align-items: center;
    //justify-content: space-between;
    gap: 10px;
    padding: 10px 20px;
    font-weight: 200;

    img {
      width: 60px;
    }

    .price {
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;
    }
  }
`;
