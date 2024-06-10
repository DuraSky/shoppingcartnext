import styled from "styled-components";
import Link from "next/link";

export const CartSteps = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  max-width: ${({ theme }) => theme.maxWidth};
  //padding: 10px 0;
  //box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
  //rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: ${({ theme }) => theme.myBorderRadius};
  background: #f9f9f9;
`;

export const StepContainer = styled.div`
  flex-grow: 1;
  text-align: center;
  position: relative;
  background-color: ${({ isActive }) => (isActive ? "#f1f1f1" : "white")};

  padding: 15px 0;
  //transition: background-color 0.3s ease;
  //color: ${({ isActive }) => (isActive ? "#fff" : "black")};
  padding: 20px;
  font-size: 14px;
  border-top-left-radius: ${({ theme }) => theme.myBorderRadius};
  border-bottom-left-radius: ${({ theme }) => theme.myBorderRadius};
  /* box-shadow: ${({ isActive }) =>
    isActive
      ? "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
      : "none"}; */

  &:nth-child(2) {
    border-radius: 0;
  }
  &:last-child {
    border-top-right-radius: ${({ theme }) => theme.myBorderRadius};
    border-bottom-right-radius: ${({ theme }) => theme.myBorderRadius};
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  @media (min-width: 580px) {
    &:not(:last-child)::before {
      content: "";
      position: absolute;
      top: 50%;
      right: -28px;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-top: 28px solid transparent;
      border-bottom: 28px solid transparent;
      border-left: 28px solid
        ${({ isActive }) => (isActive ? "#f1f1f1" : "white")};
      z-index: 1;
    }
  }
`;

export const StepLabel = styled.span`
  display: block;
  padding: 15px;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
`;

export const StyledLink = styled(({ isActive, ...props }) => (
  <Link {...props} />
))`
  text-decoration: none;
  color: inherit;
`;

export const NonClickableStep = styled.div`
  color: inherit;
`;
