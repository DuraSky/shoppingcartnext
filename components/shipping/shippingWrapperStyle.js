import styled from "styled-components";

export const ShippingPageLayout = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  .allContent {
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

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: minmax(auto, 600px) 1fr;
    gap: 20px;
    justify-content: center;
    margin: 0 auto;
    max-width: 1200px;
    align-items: flex-start;

    .allContent {
      margin: 0; /* Remove any auto margin */
      max-width: 600px; /* Ensure the max-width for allContent */
    }

    .recapWrapper {
      max-width: 300px; /* Ensure the max-width for RecapWrapper */
    }
  }
`;
