import styled from "styled-components";

export const StyledShippingMethod = styled.div`
  label {
    display: flex;
    align-items: center;
    //justify-content: space-between;
    gap: 10px;
    padding: 10px 20px;

    span {
      color: green;
      font-size: 12px;
    }

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
