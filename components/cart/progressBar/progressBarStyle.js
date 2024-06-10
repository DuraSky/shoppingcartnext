import styled from "styled-components";

export const StyledProgressBar = styled.div`
  margin: 10px auto;
  max-width: ${({ theme }) => theme.maxWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  h2 {
    font-weight: 600;
    font-size: 18px;
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.fontGrey};
  }
`;

export const ProgressContainer = styled.div`
  height: 15px;
  background-color: #ccc;
  border-radius: 50px;
  position: relative;
  width: 40%;

  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const ProgressFill = styled.div`
  width: ${({ progress }) => `${progress}%`};
  height: 100%;
  background-color: #ff4500;
  text-align: center;
  line-height: 30px;
  color: white;
  border-radius: 50px;
`;

export const ProgressText = styled.p`
  text-align: center;
  margin-top: 3px;
`;
