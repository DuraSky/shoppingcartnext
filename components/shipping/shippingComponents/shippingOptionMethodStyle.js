import styled from "styled-components";

export const StyledShippingMethod = styled.div`
  label {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px 20px;
    font-weight: 200;
    border: 1px solid #ccc;
    border-radius: ${({ theme }) => theme.myBorderRadius};
    margin-bottom: 10px;
    cursor: pointer;
    transition: border-color 0.3s;

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
      //max-width: 60px;

      //height: auto;
    }

    .price {
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;
      font-weight: bold;
    }
  }
`;
export const StyledSelectedBranch = styled.div`
  width: 60%;
  background-color: #f2f2f2;
  padding: 10px;
  margin-top: 10px;
  //border-top: 1px solid #ccc;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.03);
  border-radius: ${({ theme }) => theme.myBorderRadius};

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
    font-weight: bolder;

    span {
      color: inherit;
      font-weight: 300;
    }
  }

  button {
    background-color: ${({ theme }) => theme.fontOrange};
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: ${({ theme }) => theme.myBorderRadius};
    cursor: pointer;
    font-size: 14px;

    &:hover {
      background-color: ${({ theme }) => theme.backgroundBrown};
    }
  }
`;
