import styled from "styled-components";

export const StyledProgressBar = styled.div`
  margin: 10px auto;
  max-width: ${({ theme }) => theme.maxWidth};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  h2 {
    font-weight: bold;
    font-size: 18px;
    color: ${({ theme }) => theme.fontGrey};
  }

  p {
    font-size: 14px;
  }

  .progress {
  }
`;
