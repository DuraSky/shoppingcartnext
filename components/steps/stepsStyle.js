import styled from "styled-components";
import Link from "next/link";

export const CartSteps = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1px auto;
  margin-bottom: 0px;
  padding: 30px 0px;
  max-width: ${({ theme }) => theme.maxWidth};
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
    background: ${({ active }) => (active ? "#000" : "#ddd")};
    position: absolute;
    width: calc(100% - 60px);
    top: 15px;
    left: calc(50% + 30px);
    z-index: -1;
    transition: background 0.3s ease;
  }

  @media (max-width: 480px) {
    p {
      font-size: 0.7rem;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none; /* Remove underline */
  width: 30px;
  height: 30px;
  //border: 2px solid #ddd;
  border-radius: 50%;
  cursor: pointer;
  background-color: white;
  z-index: 1;

  ${({ active }) =>
    active &&
    `
    border-color: #000;
    // background-color: gray;
    //color: black;
  `}

  img {
    width: 30px;
    display: block;
    cursor: pointer;
  }

  span {
    display: none;
    color: inherit; // inherit color from parent
  }
`;
