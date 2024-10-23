import styled, { css } from "styled-components";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  max-width: 410px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #555;
`;

export const Input = styled.input`
  padding: 12px 15px;
  border: 1px solid #ccc;
  //border-radius: 6px;
  font-size: 16px;
  background-color: #f9f9f9;
  transition: all 0.2s ease;

  ${(props) =>
    props.error &&
    css`
      border-color: #d9534f;
    `}

  &:focus {
    outline: none;
    border-color: #00b28f;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
    background-color: #fff;
  }
`;

export const Error = styled.div`
  font-size: 12px;
  color: #d9534f;
  margin-top: 4px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  //background-color: #fff;

  .oneLiner {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
`;

export const TextArea = styled.textarea`
  //padding: 12px 15px;
  margin-left: 20px;
  border: 1px solid #ccc;
  //border-radius: 6px;
  font-size: 16px;
  background-color: #f9f9f9;
  transition: all 0.2s ease;
  resize: vertical;
  min-height: 120px;
  color: #333;

  ${(props) =>
    props.error &&
    css`
      border-color: #d9534f;
    `}

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
    border-color: #00b28f;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
    background-color: #fff;
  }
`;
