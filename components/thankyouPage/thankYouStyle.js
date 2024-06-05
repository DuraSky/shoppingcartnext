import styled from "styled-components";

export const StyledThankYou = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 80px auto;
`;
