import styled from "styled-components";
import Link from "next/link";

export const CartSteps = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  padding: 10px 0;
  max-width: ${({ theme }) => theme.maxWidth};
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StepContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  position: relative;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 20px solid #f9f9f9;
    z-index: 1;
  }

  &:not(:last-child)::before {
    content: "";
    position: absolute;
    top: 50%;
    right: -30px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 20px solid #ddd;
    z-index: 0;
  }

  p {
    color: ${({ isActive }) => (isActive ? "#000" : "#ddd")};
    font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  }
`;

export const StyledLink = styled(({ isActive, ...props }) => (
  <Link {...props} />
))`
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? "#000" : "#ddd")};
  cursor: pointer;
  padding: 10px;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #000;
    transform: scale(1.1);
  }

  &.active {
    color: #000;
    font-weight: bold;
    border-bottom: 2px solid #000;
  }

  span {
    display: flex;
    align-items: center;
  }
`;

export const NonClickableStep = styled(({ isActive, ...props }) => (
  <span {...props} />
))`
  color: ${({ isActive }) => (isActive ? "#000" : "#ddd")};
  padding: 10px;
  cursor: default;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  border-bottom: ${({ isActive }) => (isActive ? "2px solid #000" : "none")};
`;
