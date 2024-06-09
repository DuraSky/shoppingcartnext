import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 0 auto;
  //max-width: 1200px;
  max-width: ${({ theme }) => theme.maxWidth};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  //border-radius: 10px;
`;

export const CartHeaders = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.backgroundGrey};
  padding: 1rem;
  border-bottom: 1px solid #ddd;

  h2 {
    flex: 1;
    text-align: center;
    font-size: 1rem;
    margin: 0;
    color: ${({ theme }) => theme.fontGrey};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CartItemRow = styled.div`
  display: flex;
  padding: 1rem;
  border-bottom: 2px solid #ddd;

  .produktName,
  .itemPrice,
  .dostupnost,
  .priceCalc,
  .quantityControlWrapper {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .produktName {
    flex-direction: column;
    img {
      max-width: 100px;
      margin-bottom: 0.5rem;
    }
  }

  .dostupnost {
    color: green;
  }

  .removeFromCart {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      border: none;
      padding: 2px;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    position: relative;

    .removeFromCart {
      position: absolute;
      top: 10px;
      right: 10px;
    }

    .produktName,
    .dostupnost,
    .itemPrice,
    .priceCalc,
    .quantityControlWrapper {
      align-items: center;
      text-align: left;
    }

    .itemPrice::before {
      content: "Cena za kus: ";
      margin-right: 10px;
      //font-weight: bold;
      display: block;
      color: ${({ theme }) => theme.fontGrey};
    }

    .priceCalc::before {
      content: "Cena Vc. DPH: ";
      margin-right: 10px;
      //font-weight: bold;
      display: block;
      color: ${({ theme }) => theme.fontGrey};
    }
  }
`;

export const AllItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 50px;
    height: 30px;
    text-align: center;
    border: 1px solid #ccc;
    border-right: none;
    border-left: none;
  }

  button {
    width: 30px;
    height: 30px;
    background-color: ${({ theme }) => theme.backgroundGrey};
    // border: 1px solid ${({ theme }) => theme.backgroundGrey};
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-size: 18px;
    line-height: 1;

    &:first-of-type {
      border-right: none;
    }

    &:last-of-type {
      border-left: none;
    }
  }

  .quantity-input {
    width: 50px;
    text-align: center;
    border: 1px solid #ccc;
  }
`;

export const BoxShadowWrapper = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 10px;
`;
