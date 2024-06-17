// shippingWrapperStyle.js
import styled from "styled-components";

export const ShippingPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //padding: 10px;
  position: relative;

  .recapWrapper {
    order: 1;
    width: 100%;
    max-width: 600px;
  }

  .allContent {
    order: 2;
    width: 100%;
    //max-width: 600px;
    display: flex;
    flex-direction: column;
    //gap: 10px;

    .collapsible-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.5s ease-out;
    }
    .collapsible-content.open {
      max-height: 1500px; /* Adjust based on content */
      //padding: 15px 0;
    }

    h2 {
      background: ${({ theme }) => theme.backgroundGrey};
      font-size: 14px;
      font-weight: 400;
      padding: 1rem;
      box-shadow: ${({ theme }) => theme.myMediumBoxShadow};
      border-top-right-radius: ${({ theme }) => theme.myBorderRadius};
      border-top-left-radius: ${({ theme }) => theme.myBorderRadius};
    }

    .header {
      //background-color: red;
      //padding: 20px;

      .arrow {
        border-bottom: 2px solid ${({ theme }) => theme.fontOrange};
        border-right: 2px solid ${({ theme }) => theme.fontOrange};
        position: absolute;
        top: 30px;
        right: 30px;
        width: 10px;
        height: 10px;
        transform: rotate(45deg) translateY(-50%);
        transform-origin: right;
        transition: transform 0.3s;
      }
      .arrow.rotated {
        transform: rotate(225deg);
      }
    }

    .shippingContent,
    .priceContent,
    .formContent {
      position: relative;
      //box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      //rgba(60, 64, 67, 0.15) 0px 1px 3px 1px inset;
      //border-radius: 50px;
      //padding: 20px;

      cursor: pointer;
      margin-bottom: 20px;
    }
  }

  .pageControl {
    order: 3;
    width: 100%;
    //max-width: 600px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    gap: 10px;
  }

  @media (min-width: 768px) {
    display: grid;
    //grid-template-columns: minmax(auto, 600px) 1fr;
    grid-template-columns: 1fr 0.7fr;
    padding: 10px;

    gap: 20px;
    justify-content: center;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.maxWidth};
    align-items: flex-start;

    .recapWrapper {
      order: 2;
    }

    .allContent {
      margin: 0;
      //max-width: 800px;
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
      bottom: -100px;

      //padding: 50px;
    }
  }
  @media (min-width: 1100px) {
    grid-template-columns: 1fr 0.5fr;
  }
`;

export const StyledPreview = styled.div`
  //background-color: red;
  //background: ${({ theme }) => theme.backgroundGrey};
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 20px;

  p {
    font-weight: 300;
  }

  img {
    width: 60px;
  }
`;
