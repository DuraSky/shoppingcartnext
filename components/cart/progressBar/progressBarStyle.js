import styled from "styled-components";

export const StyledProgressBar = styled.div`
  margin: 10px auto;
  max-width: ${({ theme }) => theme.maxWidth};
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  @media (max-width: 922px) {
    order: 2;
    min-width: 100%;
  }

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
  border-radius: ${({ theme }) => theme.myButtonBorderRadius};
  position: relative;
  box-shadow: ${({ theme }) => theme.myHeavyBoxShadow};

  min-width: 270px;

  @media (min-width: 376px) {
    min-width: 300px;
  }

  @media (min-width: 450px) {
    min-width: 350px;
  }

  @media (min-width: 550px) {
    min-width: 450px;
  }

  @media (min-width: 1000px) {
    min-width: 550px;
  }
`;

export const ProgressFill = styled.div`
  width: ${({ progress }) => `${progress}%`};
  height: 100%;
  background-color: ${({ theme }) => theme.fontOrangeTint};
  text-align: center;
  line-height: 30px;
  color: white;
  border-radius: ${({ theme }) => theme.myButtonBorderRadius};
`;

export const ProgressText = styled.p`
  text-align: center;
  margin-top: 3px;
`;
