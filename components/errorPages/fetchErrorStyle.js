import styled from "styled-components";

export const ErrorContainer = styled.div`
  height: 100vh;
  background-color: #f9f9f9;
  font-size: 1.5em;
  padding: 20px;
`;

export const ErrorMessage = styled.div`
  //font-size: 18px;
  h1 {
    color: #ff4500;
  }

  p {
    margin: 5px 0;
    font-weight: 100;
  }
  .error {
    color: black;
    font-size: 14px;
  }
`;
