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

    .headerWithButton {
      display: flex;
      flex-grow: 1;
      justify-content: space-between;
      align-items: center;
      background: ${({ theme }) => theme.secondaryColor};
      letter-spacing: 1px;
      line-height: 1.2;
      font-size: 14px;
      padding: 1rem;
      box-shadow: ${({ theme }) => theme.myBorderBoxShadow};
      //font-weight: 400;
      h2 {
        font-size: 16px;
        font-weight: 400;
      }

      svg {
        color: ${({ theme }) => theme.primaryColor};
      }
    }

    /* .header .arrow {
      border-bottom: 2px solid ${({ theme }) => theme.fontOrange};
      border-right: 2px solid ${({ theme }) => theme.fontOrange};
      position: absolute;
      top: 10px;
      right: -10px;
      width: 10px;
      height: 10px;
      transform: rotate(45deg) translateY(-50%);
      transform-origin: right;
      transition: transform 0.3s;
    } */
    /* .header .arrow.rotated {
      transform: rotate(225deg);
    } */

    .arrow {
      transition: transform 0.3s ease;
    }

    .rotated {
      transform: rotate(180deg);
    }

    .shippingContent,
    .priceContent,
    .formContent {
      .header {
        display: flex;
        flex-grow: 1;
        justify-content: space-between;
      }
    }

    .changeButton {
      display: flex;
      position: relative;
      //flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-end;
      align-items: center;
      gap: 5px;
      margin-right: 5px;
      font-weight: 300;
      font-size: 14px;
      svg {
        color: ${({ theme }) => theme.fontOrange};
      }

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }

      //flex-grow: 1;
      //background-color: red;
      //max-width: 40px;
    }

    .shippingContent,
    .priceContent,
    .formContent {
      position: relative;
      cursor: pointer;
      //margin-bottom: 20px;
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
      order: 1;
    }

    .allContent {
      order: 2;
    }
  }
`;

export const StyledPreview = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 20px;
  min-height: 90px;

  .optionAndPrice {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    //justify-content: space-between;
    p {
      font-weight: 300;
    }

    @media (min-width: 1000px) {
      min-width: 550px;
    }
  }
  .price {
    /* display: flex;
      flex-grow: 1; */
    margin-right: 50px;

    color: ${({ theme }) => theme.fontOrange};
  }

  img {
    width: 60px;
    max-height: 40px;
    object-fit: contain;
  }
`;
