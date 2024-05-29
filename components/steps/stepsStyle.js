import styled from "styled-components";

export const CartSteps = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  margin: 1px 0;
  padding: 10px 0;
  //border-bottom: 2px solid #ddd;

  p {
    padding: 10px 20px;
    cursor: pointer;
  }

  .active {
    font-weight: bold;
    color: #000;
  }
`;
