import styled from "styled-components";

export const StyledShippingRecap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-start;

  .mainInfo {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    img {
      margin-right: 10px;
    }

    .price {
      margin-left: auto;
    }
  }

  .branchInfo {
    width: 100%;
    text-align: left;
    margin-top: 10px;
  }
`;
