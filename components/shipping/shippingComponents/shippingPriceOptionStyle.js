import styled from "styled-components";

export const StyledPriceOption = styled.div`
  label {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    font-weight: 300;
    border: 1px solid #ccc;
    border-radius: ${({ theme }) => theme.myBorderRadius};
    margin-bottom: 10px;
    cursor: pointer;
    transition: border-color 0.3s;
    min-height: 60px;

    &:hover {
      border-color: #999;
    }

    input[type="radio"] {
      appearance: none;
      width: 20px;
      height: 20px;
      border: 1px solid #ccc;
      border-radius: 50%;
      display: grid;
      place-content: center;
      margin-right: 10px;
      cursor: pointer;

      &:checked::before {
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: ${({ theme }) => theme.fontOrange};
        transition: 0.5s ease-in;
      }
    }

    span {
      color: green;
      font-size: 13px;
    }

    img {
      width: 60px;
      max-height: 40px;
      object-fit: contain;
    }

    .price {
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;
    }
  }

  @media (max-width: 767px) {
    margin: 3px;
  }
`;
