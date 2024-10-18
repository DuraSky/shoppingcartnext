import styled from "styled-components";

export const theme = {
  maxWidth: "1400px",
  backgroundGrey: "#f1f1f1",
  backgroundGreyTint: "#919191",
  backgroundBrown: "#cb9540",
  fontGrey: "#b8b4b4",
  fontOrange: "#ff4500",
  fontOrangeTint: "#ff6a33",
  myBorderRadius: "0px",
  myButtonBorderRadius: "2px",
  myLightBoxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px",
  myMediumBoxShadow:
    "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
  myHeavyBoxShadow:
    "rgba(50, 50, 93, 0.25) 0px 2px 4px -1px,rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  myBorderBoxShadow:
    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
};

export const StyledButtonWrapper = styled.div`
  margin: 20px auto;
  max-width: ${({ theme }) => theme.maxWidth};

  display: flex;
  justify-content: flex-end;

  @media (max-width: 922px) {
    //margin: 30px auto;
    padding: 10px;
    justify-content: center;
  }
`;

export const StyledNextButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 250px;
  height: 50px;
  border-radius: ${({ theme }) => theme.myButtonBorderRadius};
  font-size: 14px;
  //border: 1px solid #03045e;
  border: none;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in;
  z-index: 1;
  background-color: #ff4500;
  color: white;
  box-shadow: ${({ theme }) => theme.myHeavyBoxShadow};

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 0;
    height: 100%;
    transform: skew(15deg);
    transition: all 0.5s;
    overflow: hidden;
    z-index: -1;
  }

  &::before {
    left: -10px;
    background: ${({ theme }) => theme.backgroundBrown};
    //background: ${({ theme }) => theme.fontGrey};
  }

  &:hover::before,
  &:hover::after {
    width: 58%;
  }
`;

export const StyledBackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 150px;
  height: 50px;
  border-radius: ${({ theme }) => theme.myButtonBorderRadius};
  /* box-shadow: ${({ theme }) => theme.myHeavyBoxShadow}; */

  border: 2px solid #cb9540;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in;
  z-index: 1;
  color: #cb9540;
  background-color: white;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 0;
    height: 100%;
    transform: skew(15deg);
    transition: all 0.5s;
    overflow: hidden;
    z-index: -1;
  }

  &::after {
    right: -10px;
    background: ${({ theme }) => theme.backgroundGrey};
  }

  &:hover::before,
  &:hover::after {
    width: 58%;
  }
`;
