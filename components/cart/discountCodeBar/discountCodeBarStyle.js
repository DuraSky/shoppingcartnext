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

  p {
    //color: ${({ theme }) => theme.fontGrey};
    font-weight: lighter;
    //font-size: 14px;
    //margin-left: 2px;
    //padding: 1px;
  }

  button {
    padding: 10px;

    background-color: ${({ theme }) => theme.backgroundBrown};
    color: white;
    font-size: 13px;
    cursor: pointer;
    outline: none;
    border-top-right-radius: ${({ theme }) => theme.myBorderRadius};
    border-bottom-right-radius: ${({ theme }) => theme.myBorderRadius};
    border: none;
  }

  button:hover {
    background-color: #45a049;
  }
`;
