import styled from "styled-components";

export const CartContainer = styled.div`
  margin: 0 auto;
  padding: 0 10px;
  max-width: 1200px;
  width: 100%;
`;

export const CartHeaders = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  align-items: center;
  justify-items: center;
  font-weight: bold;
  background-color: #442e2e;

  h2 {
    padding: 10px;
    text-align: center;
    color: white;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CartItemRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  align-items: center;
  justify-items: center;
  background-color: white;

  p,
  input,
  button {
    padding: 10px;
    text-align: center;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);

    p,
    input,
    button {
      padding: 5px;
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);

    p,
    input,
    button {
      padding: 3px;
      font-size: 10px;
    }
  }
`;
