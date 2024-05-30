import styled from "styled-components";

export const CartContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const CartHeaders = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  align-items: center;
  justify-items: center;
  font-weight: bold;
  background-color: white;
  padding-top: 10px;
  padding-bottom: 10px;

  h2 {
    padding: 10px;
    text-align: center;
    color: gray;
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const AllItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// export const CartItemRow = styled.div`
//   background-color: white;
//   padding: 10px;
//   margin-bottom: 10px;
//   background: #d3d3d3;

//   .cart-item {
//     display: grid;
//     grid-template-columns: 1fr;
//     gap: 10px;

//     .cart-item-header {
//       display: grid;
//       grid-template-columns: 1fr 4fr auto;
//       align-items: center;

//       .cart-item-image {
//         width: 100%;
//         max-width: 50px;
//         height: auto;
//       }

//       p {
//         text-align: left;
//         margin: 0 10px;
//       }

//       .remove-button {
//         background-color: red;
//         color: white;
//         border: none;
//         padding: 5px 10px;
//         cursor: pointer;
//       }
//     }

//     .cart-item-body {
//       display: grid;
//       grid-template-columns: 1fr 1fr 1fr;
//       gap: 10px;
//       align-items: center;

//       p,
//       input {
//         text-align: center;
//       }

//       input {
//         width: 50px;
//         height: 20px;
//         align-items: center;
//       }
//     }
//   }

//   @media (max-width: 768px) {
//     .cart-item {
//       .cart-item-header {
//         grid-template-columns: 1fr 4fr auto;

//         .cart-item-image {
//           max-width: 40px;
//         }

//         p {
//           font-size: 14px;
//         }
//       }

//       .cart-item-body {
//         grid-template-columns: 1fr 1fr 1fr;
//         gap: 5px;
//         justify-items: start;

//         p,
//         input {
//           font-size: 14px;
//         }

//         input {
//           justify-self: center;
//         }

//         .priceCalc {
//           justify-self: center;
//         }
//       }
//     }
//   }

//   @media (max-width: 480px) {
//     .cart-item {
//       .cart-item-header {
//         grid-template-columns: 1fr 4fr auto;

//         p {
//           font-size: 12px;
//         }

//         .remove-button {
//           font-size: 12px;
//           padding: 3px 5px;
//         }
//       }

//       .cart-item-body {
//         grid-template-columns: 1fr 1fr 1fr;
//         gap: 5px;
//         justify-items: center;

//         p,
//         input {
//           font-size: 12px;
//         }
//       }
//     }
//   }
// `;

export const CartItemRow = styled.div`
  /* display: flex;
  flex-grow: 1;
  justify-content: space-between;
  flex-wrap: wrap; */

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;

  background: #ededed;
  padding: 20px;

  .produktName {
    display: flex;
    //flex-grow: 1;
    align-items: center;
    gap: 20px;
    order: 1;

    padding: 10px 0;
    p {
      //white-space: nowrap;
      max-width: 200px;
      //overflow: hidden;
      font-size: 12px;
      //text-overflow: ellipsis;
    }
  }

  .wrapper {
    display: flex;
    flex-grow: 1;
    order: 3;
    justify-content: space-evenly;

    input {
      width: 40px;
    }
  }

  .quantityAndPrice {
    display: flex;
    gap: 20px;
    font-size: 12px;
    //order: 4;
  }

  .dostupnost {
    font-size: 12px;
    //order: 3;
  }

  .removeFromCart {
    order: 2;
    padding: 5px;
  }
`;
