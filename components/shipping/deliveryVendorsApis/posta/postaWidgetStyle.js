import styled from "styled-components";

export const StyledPostaWidget = styled.div`
  padding: 20px;
  max-width: 1000px;
  //margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;

  h3 {
    margin-bottom: 10px;
    color: #333;
  }

  .posta-widget-logo {
    all: unset !important;
    max-width: 100%;

    height: auto;
    display: block;
    margin: 20px auto;
  }

  p {
    margin-bottom: 20px;
    color: #555;
  }

  .inputGroup {
    //display: flex;
    //align-items: center;
    border: none;
    margin: 0 auto 20px;

    input {
      width: 350px;

      //flex: 1;
      padding: 10px;
      border: 1px solid #ccc;
      border-top-left-radius: ${({ theme }) => theme.myBorderRadius};
      border-bottom-left-radius: ${({ theme }) => theme.myBorderRadius};
      border-right: none;
    }

    button {
      padding: 11px 20px;
      color: #fff;
      background: ${({ theme }) => theme.fontOrange};
      border: none;
      cursor: pointer;
      transition: background-color 0.3s;
      border-top-right-radius: ${({ theme }) => theme.myBorderRadius};
      border-bottom-right-radius: ${({ theme }) => theme.myBorderRadius};

      &:hover {
        background-color: ${({ theme }) => theme.fontOrangeTint};
      }
    }
  }

  .branch {
    width: 100%;
    background-color: ${({ theme }) => theme.backgroundGrey};
    border-radius: ${({ theme }) => theme.myBorderRadius};
    padding: 20px;
    box-shadow: ${({ theme }) => theme.myMediumBoxShadow};
    transition: transform 0.3s;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
    &:hover {
      transform: scale(1.02);
    }

    h4 {
      margin-bottom: 10px;
      color: #333;
    }

    p {
      margin-bottom: 10px;
      color: #555;
    }

    .closed {
      color: red;
    }

    button {
      padding: 11px 20px;
      color: #fff;
      background: ${({ theme }) => theme.backgroundBrown};
      border: none;
      cursor: pointer;
      transition: background-color 0.3s;
      border-radius: ${({ theme }) => theme.myBorderRadius};

      &:hover {
        background-color: ${({ theme }) => theme.fontOrangeTint};
      }
    }
  }

  .no-results {
    color: #ff0000;
    text-align: center; /* Center the no results text */
    margin-top: 20px; /* Add top margin for spacing */
  }
`;
