// shippingWrapperStyle.js
import styled from "styled-components";

export const ShippingPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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

    .shippingContent,
    .formContent {
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      border-radius: 20px;
      padding: 10px;
    }
  }

  .odeslatObjednavku {
    order: 3;
    width: 100%;
    max-width: 600px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    display: grid;
    //grid-template-columns: minmax(auto, 600px) 1fr;
    grid-template-columns: 1fr 1fr; /* Define two equal columns */

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

    .odeslatObjednavku {
      order: 3;
      margin-top: 0;
      grid-column: 2/3; /* Span the entire row */
      display: flex;
      justify-content: flex-end;

      padding: 50px;
    }
  }
`;
