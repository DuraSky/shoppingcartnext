import styled from "styled-components";

export const StyledCustomerSupport = styled.div`
  .supportContent {
    display: flex;
    flex-grow: 1;
    gap: 20px;
    //justify-content: center;
    padding: 30px;
    background-color: white;
    justify-content: center;
    background-color: ${({ theme }) => theme.secondaryColor};
    border-bottom: solid 1px ${({ theme }) => theme.borderColor};

    img {
      width: 80px;
      //height: auto;
      object-fit: contain;
      //border-radius: 50%;
    }

    .supportText {
      font-size: 14px;
      font-weight: 300;
    }

    .iconDiv {
      display: flex;
      align-items: center;
      gap: 5px;
      p {
      }
      svg {
        width: 20px;
        color: ${({ theme }) => theme.primaryColor};
      }
    }
  }
`;
