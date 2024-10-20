import styled, { css } from "styled-components";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-size: 12px;
  //font-weight: lighter;
  margin-bottom: 2px;
  font-weight: 300;
  //color: ${({ theme }) => theme.fontGrey};
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #b8b4b4;
  //border-radius: 4px;
  font-size: 14px;
  //color: ${({ theme }) => theme.fontGrey};
  ${(props) =>
    props.error &&
    css`
      border-color: red;
    `}
  &:focus {
    outline: none !important;
    border: 2px solid #b8b4b4;
    ${(props) =>
      props.error &&
      css`
        border-color: red;
      `}
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

  .oneLiner {
    @media (min-width: 1000px) {
      display: flex;
      //flex-grow: 1;
      gap: 5px;
      margin-bottom: 15px;
      div {
        flex-grow: 1;
      }
    }
  }
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #b8b4b4;
  //border-radius: 4px;
  font-size: 14px;
  color: #333;
  resize: vertical;
  &:focus {
    border: 2px solid #b8b4b4;
    outline: none;
  }
`;
