import styled from "styled-components";
import Link from "next/link";

export const CartSteps = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;
  padding: 5px 0;
`;

export const StepContainer = styled.div`
  flex-grow: 1;
  text-align: center;
  position: relative;
  font-size: 14px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 300;

  ${({ $isActive }) =>
    $isActive &&
    `
    font-weight: bold;
    color: #00b28f;
  `}

  ${({ $isActive }) =>
    !$isActive &&
    `
    transition: color 0.3s ease;
    &:hover {
      color: #00b28f;
      cursor: pointer;
    }
  `}

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const NumberCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ $isActive }) => ($isActive ? "#00b28f" : "#d3d3d3")};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.3s ease;

  ${({ $isActive }) =>
    $isActive &&
    `
    transform: scale(1.1);
  `}
`;

export const LabelText = styled.div`
  font-size: 14px;
  color: ${({ $isActive }) => ($isActive ? "#00b28f" : "#000")};
  transition: color 0.3s ease;
`;

export const Line = styled.div`
  display: none;

  @media (min-width: 320px) {
    display: block;
    width: 30px;
    height: 4px;
    background: ${({ $isCompleted }) =>
      $isCompleted ? "linear-gradient(90deg, #00b28f, #00e0a7)" : "#d3d3d3"};
    transition: background-color 0.3s ease;
  }

  @media (min-width: 500px) {
    width: 100px;
  }
`;

export const StyledLink = styled(({ $isActive, ...props }) => (
  <Link {...props} />
))`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: inherit;
`;

export const NonClickableStep = styled.div`
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
