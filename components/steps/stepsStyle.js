import styled from "styled-components";
import Link from "next/link";

export const CartSteps = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  max-width: ${({ theme }) => theme.maxWidth};
  border-radius: ${({ theme }) => theme.myBorderRadius};
`;

export const StepContainer = styled.div`
  //margin-top: 50px;
  flex-grow: 1;
  text-align: center;
  position: relative;
  background-color: ${({ $isActive }) => ($isActive ? "#00b28f" : "white")};
  padding: 10px;
  font-size: 14px;
  border-radius: ${({ theme }) => theme.myBorderRadius};
  border: ${({ $isActive }) => ($isActive ? "2px solid #ccc" : "none")};
  box-shadow: ${({ $isActive }) =>
    $isActive
      ? "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
      : "none"};

  ${({ $isActive }) =>
    $isActive &&
    `
    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid #00b28f;
    }
  `}

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const StepLabel = styled.span`
  display: block;
  padding: 15px;
  font-weight: ${({ $isActive }) => ($isActive ? "bold" : "normal")};
`;

export const StyledLink = styled(({ $isActive, ...props }) => (
  <Link {...props} />
))`
  text-decoration: none;
  color: inherit;
`;

export const NonClickableStep = styled.div`
  color: inherit;
`;
