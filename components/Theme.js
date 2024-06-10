import styled from "styled-components";

export const theme = {
  maxWidth: "1200px",
  backgroundGrey: "#f1f1f1",
  backgroundBrown: "#cb9540",
  fontGrey: "#b8b4b4",
  fontOrange: "#ff4500",
  myBorderRadius: "20px",
  myLightBoxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px",
  myMediumBoxShadow:
    "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;",
};

export const StyledButtonWrapper = styled.div`
  margin: 20px auto;
  max-width: ${({ theme }) => theme.maxWidth};

  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    //margin: 30px auto;
    padding: 10px;
    justify-content: center;
  }
`;

export const StyledNextButton = styled.button`
  display: inline-block;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  //border: 1px solid #03045e;
  border: none;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in;
  z-index: 1;
  background-color: #ff4500;
  color: white;

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
    background: ${({ theme }) => theme.fontGrey};
  }

  &:hover::before,
  &:hover::after {
    width: 58%;
  }
`;

export const StyledBackButton = styled.button`
  display: inline-block;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid #4caf50;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in;
  z-index: 1;
  color: #4caf50;
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
    background: ${({ theme }) => theme.fontGrey};
  }

  &:hover::before,
  &:hover::after {
    width: 58%;
  }
`;
