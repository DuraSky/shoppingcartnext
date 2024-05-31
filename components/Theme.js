import styled from "styled-components";

export const theme = {
  maxWidth: "1200px",
  backgroundGrey: "#f1f1f1",
  fontGrey: "#b8b4b4",
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
  width: 150px;
  height: 50px;
  border-radius: 10px;
  //border: 1px solid #03045e;
  border: none;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in;
  z-index: 1;
  background-color: #4caf50;
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

  /* &::after {
    right: -10px;
    background: #5a189a;
  } */

  &:hover::before,
  &:hover::after {
    width: 58%;
  }

  &:hover span {
    color: #e0aaff;
    transition: 0.3s;
  }

  span {
    color: #03045e;
    font-size: 18px;
    transition: all 0.3s ease-in;
  }
`;
