import styled from "styled-components";

export const theme = {
  maxWidth: "1400px",
  backgroundGrey: "#f1f1f1",
  backgroundGreyTint: "#919191",
  backgroundBrown: "#cb9540",
  fontGrey: "#b8b4b4",
  primaryColor: "#00b28f",
  primaryColorTint: "#66d1bc",
  fontOrangeTint: "#00b28f",
  secondaryColor: "#f0f7f6",
  tertiaryColor: "#f5f6f8",
  borderColor: "#cfe5e2",
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
  //margin: 0px auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  //border-radius: 8px;
  //justify-content: flex-end;
  gap: 10px;
  align-self: flex-end;
  margin-top: 40px;

  @media (min-width: 922px) {
    // padding: 20px;
    // background-color: ${({ theme }) => theme.secondaryColor};
    padding: 20px;
    //box-shadow: ${({ theme }) => theme.myLightBoxShadow};
    min-width: 250px;
  }
`;

export const StyledNextButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 190px;
  height: 40px;
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

  @media (min-width: 1000px) {
    width: 260px;
    height: 55px;
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
  color: #ccc;
  border: none;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in;
  z-index: 1;
  //color: ${({ theme }) => theme.primaryColor};
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

  &:hover {
    border: 1px solid ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.primaryColor};
  }

  &::after {
    right: -10px;
    background: ${({ theme }) => theme.secondaryColor};
  }

  &:hover::before,
  &:hover::after {
    width: 58%;
  }

  svg {
    margin-left: 5px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(-5px);
  }
`;

export const StyledChangeBranchButton = styled.button`
  background-color: ${({ theme }) => theme.primaryColor};
  opacity: 0.5;
  padding: 10px 20px;
  border: none;
  color: white;
  border-radius: ${({ theme }) => theme.myButtonBorderRadius};

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const BgColor = styled.div`
  //background-color: #ccc;
  /* background-color: ${({ theme }) => theme.secondaryColor}; */
  //background-color: #f1f1f1;
  /* box-shadow: ${({ theme }) => theme.myInsetBoxShadow};
  padding: 5px; */
  background-color: white;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  //box-shadow: ${({ theme }) => theme.myLightBoxShadow};
  margin-top: 1px;
`;
