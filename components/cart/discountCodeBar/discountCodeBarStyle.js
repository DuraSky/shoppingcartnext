import styled, { keyframes, css } from "styled-components";

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

export const StyledDiscountBar = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center;

  input {
    padding: 10px;
    border: 1px solid ${(props) => (props.discountError ? "red" : "#b8b4b4")};
    ${(props) =>
      props.discountError &&
      css`
        animation: ${shake} 0.2s;
      `};
    outline: none;
    font-size: 14px;
    //margin-right: 10px;
  }

  p {
    //color: ${({ theme }) => theme.fontGrey};
    font-weight: lighter;
    //font-size: 14px;
    //margin-left: 2px;
    //padding: 1px;
  }

  .inputAndButton {
    display: flex;
  }

  button {
    padding: 0px 5px;
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
    background-color: ${({ theme }) => theme.fontOrange};
  }
`;

export const StyledDiscountErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;
