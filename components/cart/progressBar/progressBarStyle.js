import styled from "styled-components";

export const StyledProgressBar = styled.div`
  //margin: 0px auto;
  max-width: ${({ theme }) => theme.maxWidth};
  display: flex;
  flex-grow: 1;

  flex-direction: column;
  justify-content: center;
  gap: 5px;
  margin-top: 0px;
  margin-top: 20px;

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.fontGrey};
  }

  .messageWithIcon {
    display: flex;
    align-items: center;
    gap: 10px;
    .text {
      color: black;
      font-weight: 300;
      font-size: 14px;

      @media (min-width: 500px) {
        font-size: 16px;
      }
    }
    @media (min-width: 600px) {
      justify-content: center;
    }
  }
`;

export const ProgressContainer = styled.div`
  height: 15px;
  background-color: #ccc;
  border-radius: ${({ theme }) => theme.myButtonBorderRadius};
  position: relative;
  box-shadow: ${({ theme }) => theme.myHeavyBoxShadow};
  align-self: center;
  max-width: 250px;
  min-width: 250px;

  @media (min-width: 900px) {
    min-width: 400px;
  }

  /* @media (min-width: 376px) {
    min-width: 300px;
  }

  @media (min-width: 450px) {
    min-width: 350px;
  }

  @media (min-width: 550px) {
    min-width: 450px;
  }

  @media (min-width: 1000px) {
    max-width: 600px;
  } */
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
  font-weight: 300;
`;
