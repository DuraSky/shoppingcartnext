import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  //padding: 20px;
  max-width: 550px;
`;

export const FormGroup = styled.div`
  display: flex;
  //flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  &:focus {
    border-color: #007bff;
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 10px;
`;
