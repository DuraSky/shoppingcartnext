import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidth};
  background-color: white;
  //border-radius: ${({ theme }) => theme.myBorderRadius};
`;

export const CartHeaders = styled.div`
  display: flex;
  //background-color: ${({ theme }) => theme.secondaryColor};
  background-color: #f5f6f8;

  padding: 1rem;
  //box-shadow: ${({ theme }) => theme.myMediumBoxShadow};
  box-shadow: ${({ theme }) => theme.myBorderBoxShadow};
  /* color: ${({ theme }) => theme.backgroundGreyTint}; */
  margin-top: 1px;
  margin-bottom: 1px;
  letter-spacing: 1px;
  line-height: 1.2;

  h2 {
    text-align: center;
    font-size: 14px;
    margin: 0;
    font-weight: 400;
  }

  .produktName {
    flex: 3;
    display: flex;
    align-content: flex-start;
  }

  .dostupnost,
  .quantityControlWrapper,
  .itemPrice,
  .priceCalc {
    flex: 0.8;
  }

  .removeFromCart {
    flex: 0.3;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CartItemRow = styled.div`
  display: flex;
  padding: 1rem;
  box-shadow: ${({ theme, $hasVariants }) =>
    $hasVariants ? "none" : theme.myLightBoxShadow};
  margin-bottom: 20px;
  font-weight: 300;
  //background-color: #f1f1f1;

  .produktName {
    flex: 3;
    gap: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 400;

    img {
      max-width: 130px;
      max-height: 100px;
      object-fit: contain;
      //margin-bottom: 0.5rem;
    }
  }

  .dostupnost,
  .quantityControlWrapper,
  .itemPrice,
  .priceCalc {
    flex: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .dostupnost {
    //color: green;
  }

  .removeFromCart {
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      border: none;
      padding: 2px;
      cursor: pointer;
      background: none;
      color: ${({ theme }) => theme.primaryColor};
    }

    button:hover {
      color: black;
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

    .produktName {
      flex-direction: column;
    }

    .produktName,
    .dostupnost,
    .quantityControlWrapper,
    .itemPrice,
    .priceCalc {
      align-items: center;
      text-align: left;
    }

    .itemPrice::before {
      content: "Cena za kus: ";
      margin-right: 10px;
      display: block;
      color: ${({ theme }) => theme.fontGrey};
    }

    .priceCalc::before {
      content: "Cena Vč. DPH: ";
      margin-right: 10px;
      display: block;
      color: ${({ theme }) => theme.fontGrey};
    }
  }
`;

export const CartVariantRow = styled.div`
  box-shadow: ${({ theme }) => theme.myLightBoxShadow};
  display: flex;
  //flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  flex-grow: 1;

  justify-content: flex-start;
  padding-left: 50px;

  padding-bottom: 15px;

  img {
    width: 60px;
  }

  input {
    accent-color: ${({ theme }) => theme.backgroundBrown};
    margin-right: 5px;
    width: 18px;
  }

  &:last-child {
    margin-bottom: 1px;
  }

  .productGroup {
    display: flex;
    flex-direction: column;
    gap: 10px;
    //width: 300px;
    //flex-grow: 1;
    /* margin: 0 auto; */
    /* padding: 20px 0; */
    h3 {
      font-size: 16px;
      font-weight: 400;
    }
    .productVariant {
      display: flex;
      gap: 5px;
      align-items: center;

      font-weight: 300;
      font-size: 14px;
      //width: 500px;
      //padding: 0 40px;
    }
  }
  @media (min-width: px) {
  }
  @media (min-width: 768px) {
    //padding-left: 150px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;

    //flex-direction: column;
    //display: block;
  }

  .checkboxAndName {
    display: flex;
    gap: 5px;
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
    border: none;
  }

  button {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.fontOrangeTint};
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-size: 20px;
    box-shadow: ${({ theme }) => theme.myMediumBoxShadow};

    &:first-of-type {
      border-right: none;
      border-top-left-radius: ${({ theme }) => theme.myBorderRadius}%;
    }

    &:last-of-type {
      border-left: none;
      border-top-left-radius: ${({ theme }) => theme.myBorderRadius}%;
    }
  }

  button:hover {
    color: black;
  }

  .quantity-input {
    width: 30px;
    text-align: center;
  }
`;
