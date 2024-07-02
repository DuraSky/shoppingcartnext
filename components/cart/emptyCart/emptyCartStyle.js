// emptyCartStyle.js
import styled from "styled-components";

export const StyledEmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;

  p {
    font-size: 24px;
    margin-bottom: 20px;
  }

  a {
    font-size: 18px;
    color: ${({ theme }) => theme.fontOrange};
    text-decoration: none;
    border: 1px solid ${({ theme }) => theme.fontOrange};
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.backgroundBrown};
      border: 1px solid ${({ theme }) => theme.backgroundBrown};
    }
  }
`;
