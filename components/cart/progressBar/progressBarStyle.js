import styled from "styled-components";

export const StyledProgressBar = styled.div`
  margin: 10px auto;
  max-width: ${({ theme }) => theme.maxWidth};
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  /* h2 {
    font-weight: 600;
    font-size: 18px;
  } */

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.fontGrey};
  }

  .messageWithIcon {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const ProgressContainer = styled.div`
  height: 15px;
  background-color: #ccc;
  border-radius: ${({ theme }) => theme.myBorderRadius};
  position: relative;
  width: 50%;
  box-shadow: ${({ theme }) => theme.myHeavyBoxShadow};

  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const ProgressFill = styled.div`
  width: ${({ progress }) => `${progress}%`};
  height: 100%;
  background-color: ${({ theme }) => theme.fontOrangeTint};
  text-align: center;
  line-height: 30px;
  color: white;
  border-radius: ${({ theme }) => theme.myBorderRadius};
`;

export const ProgressText = styled.p`
  text-align: center;
  margin-top: 3px;
`;
