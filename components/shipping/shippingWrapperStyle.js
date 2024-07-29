// shippingWrapperStyle.js
import styled from "styled-components";

export const ShippingPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .recapWrapper {
    width: 100%;
    //max-width: 600px;
    order: 2; /* Always on the right side for non-mobile views */
  }

  .allContent {
    width: 100%;
    display: flex;
    flex-direction: column;
    order: 1; /* Always on the left side for non-mobile views */

    .collapsible-content {
      //padding-top: 1rem;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.5s ease-out;
    }
    .collapsible-content.open {
      max-height: 2000px; /* Adjust based on content */
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

    .header .arrow {
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
    .header .arrow.rotated {
      transform: rotate(225deg);
    }

    .shippingContent,
    .priceContent,
    .formContent {
      position: relative;
      cursor: pointer;
      margin-bottom: 20px;
    }
  }

  .pageControl {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 1px;
    gap: 10px;
    order: 3;
    padding: 0 0.2rem;
  }

  .pageControlMobilePrice {
    order: 2;

    font-size: 18px;
    font-weight: 200;
    padding: 1rem;

    span {
      font-weight: 400;
    }
  }

  .finalPriceMobile {
    order: 4;
  }

  .finalPriceMobile {
    display: flex;
    order: 5;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 0.2fr;
    //padding: 5px;
    gap: 10px;
    justify-content: center;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.maxWidth};
    align-items: flex-start;

    img {
      width: 30px;
    }

    .pageControl {
      padding: 0;
    }
  }

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 0.4fr;
    padding: 10px;
    gap: 20px;
    justify-content: center;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.maxWidth};
    align-items: flex-start;
  }

  @media (max-width: 767px) {
    flex-direction: column;

    .recapWrapper {
      order: 1; /* Recap on top for mobile views */
    }

    .allContent {
      order: 2; /* All content below Recap on mobile views */
    }
  }
`;

export const StyledPreview = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 20px;

  .optionAndPrice {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    //justify-content: space-between;
    p {
      font-weight: 300;
    }
  }
  .price {
    /* display: flex;
      flex-grow: 1; */
    margin-right: 50px;

    color: ${({ theme }) => theme.backgroundBrown};
  }

  img {
    width: 60px;
  }
`;
