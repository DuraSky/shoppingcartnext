import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  //padding: 20px;
  //max-width: 550px;
`;

export const FormGroup = styled.div`
  display: flex;
  //flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 300;
  color: #333;
  &:hover {
    cursor: pointer;
  }
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
  margin: 0 20px;
  border-bottom: 1px dashed ${({ theme }) => theme.borderColor};
  padding-bottom: 3px;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
  }
`;
