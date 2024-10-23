import styled from "styled-components";

export const theme = {
  maxWidth: "1400px",
  backgroundGrey: "#f1f1f1",
  backgroundGreyTint: "#919191",
  backgroundBrown: "#cb9540",
  fontGrey: "#b8b4b4",
  primaryColor: "#00b28f",
  primaryColorTint: "#33c1a5",
  fontOrangeTint: "#00b28f",
  secondaryColor: "#f0f7f6",
  myBorderRadius: "0px",
  myButtonBorderRadius: "2px",
  myLightBoxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px",
  myMediumBoxShadow:
    "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
  myHeavyBoxShadow:
    "rgba(50, 50, 93, 0.25) 0px 2px 4px -1px,rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  myBorderBoxShadow:
    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
  myInsetBoxShadow: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;",
};

export const StyledButtonWrapper = styled.div`
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.secondaryColor};
  padding: 30px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.myLightBoxShadow};
  justify-content: flex-end;
  gap: 20px;

  @media (max-width: 922px) {
    padding: 20px;
  }
`;

export const StyledNextButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 260px;
  height: 55px;
  border-radius: ${({ theme }) => theme.myButtonBorderRadius};
  font-size: 16px;
  font-weight: 600;
  border: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 1;
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
  box-shadow: ${({ theme }) => theme.myHeavyBoxShadow};
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 0;
    height: 100%;
    transform: skew(15deg);
    transition: all 0.5s;
    z-index: -1;
  }

  &::before {
    left: -10px;
    background: ${({ theme }) => theme.primaryColorTint};
  }

  &:hover::before,
  &:hover::after {
    width: 60%;
  }

  &:hover {
    background-color: ${({ theme }) => theme.fontOrange};
  }

  svg {
    margin-left: 5px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

export const StyledBackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 150px;
  height: 55px;
  border-radius: ${({ theme }) => theme.myButtonBorderRadius};
  cursor: pointer;
  /* box-shadow: ${({ theme }) => theme.myHeavyBoxShadow}; */

  border: 2px solid ${({ theme }) => theme.primaryColor};
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in;
  z-index: 1;
  color: ${({ theme }) => theme.primaryColor};
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
    background: ${({ theme }) => theme.secondaryColor};
  }

  &:hover::before,
  &:hover::after {
    width: 58%;
  }
`;

export const BgColor = styled.div`
  //background-color: #ccc;
  /* background-color: ${({ theme }) => theme.secondaryColor}; */
  //background-color: #f1f1f1;
  box-shadow: ${({ theme }) => theme.myInsetBoxShadow};
  padding: 5px;
`;
