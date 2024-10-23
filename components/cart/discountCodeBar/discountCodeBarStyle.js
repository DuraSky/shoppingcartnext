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
    display: flex;
    flex-direction: column;
    //align-items: center;
    gap: 15px;
    width: 100%;
  }

  .discountText {
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
      width: 24px;
      height: 24px;
      color: ${({ theme }) => theme.primaryColor};
    }

    p {
      font-size: 16px;
      font-weight: 500;
      color: ${({ theme }) => theme.fontColor};
    }
  }

  .inputAndButton {
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 1000px) {
      flex-direction: row;
    }

    input {
      flex-grow: 1;
      padding: 12px;
      border: 1px solid ${(props) => (props.discountError ? "red" : "#b8b4b4")};
      border-radius: 4px 0 0 4px;
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
      padding: 12px 20px;
      background-color: ${({ theme }) => theme.primaryColor};
      color: white;
      font-size: 14px;
      font-weight: 500;
      border: none;
      border-top-right-radius: ${({ theme }) => theme.myButtonBorderRadius};
      border-bottom-right-radius: ${({ theme }) => theme.myButtonBorderRadius};
      cursor: pointer;
      transition: background-color 0.3s ease;
      font-weight: 600;

      &:hover {
        background-color: ${({ theme }) => theme.fontOrange};
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
