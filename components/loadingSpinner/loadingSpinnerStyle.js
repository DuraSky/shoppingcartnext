import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const dots = keyframes`
  0%, 20% { content: ''; }
  40% { content: '.'; }
  60% { content: '..'; }
  80%, 100% { content: '...'; }
`;

export const Spinner = styled.div`
  border: 8px solid #f1f1f1;
  border-top: 8px solid #00b28f;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 2s linear infinite;
  //margin: auto;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

export const LoadingText = styled.p`
  margin-top: 20px;
  font-weight: 200;
  font-size: 14px;
  color: #00b28f;

  .dots::after {
    content: "";
    animation: ${dots} 1.5s steps(5, end) infinite;
  }
`;
