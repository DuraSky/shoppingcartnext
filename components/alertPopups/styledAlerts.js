import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;

export const AlertContainer = styled.div`
  position: fixed;
  bottom: 60px;
  right: 20px;
  z-index: 1050;

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    left: 10px;
    bottom: auto;
    width: calc(100% - 20px);
  }
`;

export const Alert = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  background-color: ${({ type }) =>
    type === "success" ? "#d4edda" : "#f8d7da"};
  color: ${({ type }) => (type === "success" ? "#155724" : "#721c24")};
  border: 1px solid
    ${({ type }) => (type === "success" ? "#c3e6cb" : "#f5c6cb")};
  border-radius: 0.25rem;
  animation: ${fadeIn} 0.5s ease-in, ${fadeOut} 0.5s ease-out 9.5s;
  animation-fill-mode: forwards;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

export const AlertContent = styled.p`
  margin: 0;
  padding: 0;
  flex-grow: 1;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-size: 1.25rem;
  cursor: pointer;
  margin-left: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
