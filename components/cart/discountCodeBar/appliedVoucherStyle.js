import styled from "styled-components";

export const StyledAppliedCode = styled.div`
  display: flex;
  //gap: 20px;
  gap: 5px;
  flex-grow: 1;
  justify-content: space-between;
  padding: 5px;
  margin: 5px 0;
  background-color: ${({ theme }) => theme.backgroundGrey};
  border-radius: ${({ theme }) => theme.myBorderRadius};
  box-shadow: ${({ theme }) => theme.myMediumBoxShadow};

  .voucherContent {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    p {
      font-size: 16px;
      font-weight: 400;
    }
    .codeName {
      font-weight: 200;
    }
  }

  button {
    border: none;
    padding: 2px;
    cursor: pointer;
    background: none;
    color: ${({ theme }) => theme.fontGrey};
  }

  button:hover {
    color: ${({ theme }) => theme.fontOrange};
  }
`;
