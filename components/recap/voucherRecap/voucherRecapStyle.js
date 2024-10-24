import styled from "styled-components";

export const StyledVoucherRecap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-start;
  padding: 10px 10px;
  padding-right: 0;
  .mainInfo {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    img {
      margin-right: 10px;
    }

    .price {
      margin-left: auto;
    }
  }
`;
