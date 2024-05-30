import styled from "styled-components";

export const CartSteps = styled.div`
  //background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1px auto;
  margin-bottom: 0px;
  padding: 30px 0px;

  max-width: 1200px;
`;

export const StepContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  flex-grow: 1;
  text-align: center;

  &:not(:last-child)::after {
    content: "";
    height: 2px;
    background: #ddd;
    position: absolute;
    width: calc(100% - 60px);
    top: 15px;
    left: calc(50% + 30px);
    z-index: -1;
  }

  &.active::after {
    background: #000;
  }

  @media (max-width: 480px) {
    p {
      font-size: 0.7rem;
    }
  }
`;

export const Step = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid #ddd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: white;
  z-index: 1;

  ${({ active }) =>
    active &&
    `
    border-color: #000;
    background-color: #000;
    color: white;
  `}

  span {
    display: block;
  }
`;

export const Line = styled.div`
  height: 2px;
  background-color: ${({ active }) => (active ? "#000" : "#ddd")};
  width: 100%;
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
`;
