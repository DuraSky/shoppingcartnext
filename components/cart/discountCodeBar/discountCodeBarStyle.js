import styled from "styled-components";

export const StyledDiscountBar = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center;

  input {
    padding: 10px;
    border: 1px solid #ccc;
    //border-right: none;
    border-radius: 4px 0 0 4px;
    outline: none;
    font-size: 16px;
  }

  label {
    color: ${({ theme }) => theme.fontGrey};
    font-weight: lighter;
    font-size: 14px;
    margin-left: 2px;
  }

  button {
    padding: 10px;
    border: 1px solid #ccc;
    border-left: none;
    border-radius: 0 4px 4px 0;
    background-color: #4caf50;
    color: white;
    font-size: 13px;
    cursor: pointer;
    outline: none;
  }

  button:hover {
    background-color: #45a049;
  }
`;
