import styled, { keyframes, css } from "styled-components";

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  50% { transform: translateX(4px); }
  75% { transform: translateX(-4px); }
  100% { transform: translateX(0); }
`;

export const StyledDiscountBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .discountSection {
    //display: flex;
    //flex-wrap: nowrap;
    //flex-direction: column;
    //align-items: center;
    //gap: 25px;
    //width: 100%;
    //min-height: 104px;
  }

  .discountText {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 5px;
    flex-grow: 1;
    //flex-wrap: nowrap;
    flex-shrink: 0;

    svg {
      width: 22px;
      height: 22px;
      //color: ${({ theme }) => theme.primaryColor};
    }

    p {
      font-size: 16px;
      font-weight: 300;

      color: ${({ theme }) => theme.fontColor};
    }
  }

  .inputAndButton {
    display: flex;
    flex-direction: row;
    width: 100%;
    @media (min-width: 1000px) {
      //flex-direction: row;
    }

    input {
      flex-grow: 1;
      padding: 12px;
      border: 1px solid ${(props) => (props.discountError ? "red" : "#b8b4b4")};
      //border-radius: 4px 0 0 4px;
      font-size: 14px;
      outline: none;
      transition: border-color 0.3s ease;

      ${(props) =>
        props.discountError &&
        css`
          animation: ${shake} 0.3s;
        `};

      &::placeholder {
        color: #ccc;
        font-weight: lighter;
      }

      &:focus {
        border-color: ${({ theme }) => theme.primaryColor};
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      opacity: 0.7;
      height: 40px;
      height: auto;
      min-width: 100px;
      //border-radius: ${({ theme }) => theme.myButtonBorderRadius};
      font-size: 14px;
      font-weight: 600;
      border: none;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
      z-index: 1;
      background-color: ${({ theme }) => theme.primaryColor};
      color: white;
      box-shadow: ${({ theme }) => theme.myHeavyBoxShadow};
      cursor: pointer;

      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 0;
        width: 0;
        height: 100%;
        transform: skew(15deg);
        transition: all 0.5s;
        z-index: -1;
      }

      &::before {
        left: -10px;
        background: ${({ theme }) => theme.primaryColorTint};
      }

      &:hover::before,
      &:hover::after {
        width: 60%;
      }

      &:hover {
        background-color: ${({ theme }) => theme.fontOrange};
      }

      svg {
        margin-left: 5px;
        transition: transform 0.3s ease;
      }

      &:hover svg {
        transform: translateX(5px);
      }

      @media (min-width: 649px) {
        width: 100px;
        flex-wrap: nowrap;
      }
    }
  }

  .errorMessage {
    color: red;
    font-size: 14px;
    text-align: center;
    font-weight: 500;
  }
`;
