import styled from "styled-components";

export const StyledDiscountBar = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center;

  input {
    padding: 10px;
    border: 1px solid #ccc;
    //border-right: none;
    //border-radius: 4px 0 0 4px;
    outline: none;
    font-size: 14px;
  }

  label {
    color: ${({ theme }) => theme.fontGrey};
    font-weight: lighter;
    font-size: 14px;
    margin-left: 2px;
  }

  button {
    padding: 10px;

    background-color: ${({ theme }) => theme.fontOrange};
    color: white;
    font-size: 13px;
    cursor: pointer;
    outline: none;
    //border-top-right-radius: ${({ theme }) => theme.myBorderRadius};
    border-bottom-right-radius: ${({ theme }) => theme.myBorderRadius};
    border: none;
  }

  button:hover {
    background-color: #45a049;
  }
`;
