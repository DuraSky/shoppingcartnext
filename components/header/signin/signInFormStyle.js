import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  width: 400px;
  padding: 20px;
  margin: 20px;
  border-radius: ${({ theme }) => theme.myBorderRadius};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h4`
  margin-bottom: 20px;
  color: #333;
`;

export const InputGroup = styled.div`
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    border-color: ${({ theme }) => theme.fontOrange};
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.backgroundBrown};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.myBorderRadius};
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.fontOrange};
  }
`;
