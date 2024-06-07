// shippingWrapperStyle.js
import styled from "styled-components";

export const ShippingPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  position: relative;

  .recapWrapper {
    order: 1;
    width: 100%;
    max-width: 600px;
  }

  .allContent {
    order: 2;
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .header {
      //background-color: red;
      padding: 20px;

      h2 {
        //color: ${({ theme }) => theme.fontGrey};
        font-weight: lighter;
        font-size: 20px;
      }

      .arrow {
        border-bottom: 2px solid #000;
        border-right: 2px solid #000;
        position: absolute;
        top: 30px;
        right: 30px;
        width: 10px;
        height: 10px;
        transform: rotate(45deg) translateY(-50%);
        transform-origin: right;
      }
    }

    .shippingContent,
    .priceContent,
    .formContent {
      position: relative;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px inset;
      border-radius: 50px;
      //padding: 20px;

      cursor: pointer;
    }
  }

  .pageControl {
    order: 3;
    width: 100%;
    max-width: 600px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    //gap: 10px;
  }

  @media (min-width: 768px) {
    display: grid;
    //grid-template-columns: minmax(auto, 600px) 1fr;
    grid-template-columns: 1fr 1fr;
    padding: 10px;

    gap: 20px;
    justify-content: center;
    margin: 0 auto;
    max-width: 1200px;
    align-items: flex-start;

    .recapWrapper {
      order: 2;
    }

    .allContent {
      margin: 0;
      max-width: 600px;
      order: 1;
    }

    .pageControl {
      order: 3;
      margin-top: 0;
      grid-column: 2/3;

      display: flex;
      justify-content: space-between;
      padding: 30px;

      position: absolute;
      top: 500px;

      //padding: 50px;
    }
  }
`;
