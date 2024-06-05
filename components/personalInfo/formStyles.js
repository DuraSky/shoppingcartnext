import styled from "styled-components";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: lighter;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.fontGrey};
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #b8b4b4;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  &:focus {
    outline: none !important;
    border: 2px solid #b8b4b4;
  }
`;

export const Error = styled.div`
  font-size: 12px;
  color: #d9534f;
  margin-top: 1px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #b8b4b4;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  resize: vertical;
  &:focus {
    border: 2px solid #b8b4b4;
    outline: none;
  }
`;
