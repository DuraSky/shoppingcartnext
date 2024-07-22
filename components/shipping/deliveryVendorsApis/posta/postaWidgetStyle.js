import styled from "styled-components";

export const StyledPostaWidget = styled.div`
  padding: 10px;
  width: 700px;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .postaHeader {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-bottom: 10px;
    color: #333;
  }

  .posta-widget-logo {
    all: unset !important;
    display: block;
    margin: 20px auto;
    width: 50px !important;
  }

  p {
    margin-bottom: 20px;
    color: #555;
  }

  .inputGroup {
    display: flex;
    width: 100%;
    border: none;
    margin-bottom: 20px;

    input {
      flex: 1;
      padding: 10px;
      border: 1px solid #ccc;
      border-top-left-radius: ${({ theme }) => theme.myBorderRadius};
      border-bottom-left-radius: ${({ theme }) => theme.myBorderRadius};
      border-right: none;
      width: 0; /* Ensure input doesn't shrink */
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
    }
  }

  .branch {
    width: 100%;
    display: flex;
    flex-direction: column;
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
      //text-align: center;
      margin-bottom: 10px;
      color: #333;
    }

    p {
      margin-bottom: 10px;
      color: #555;
    }

    .openingHours {
      //padding: 20px 0;
      padding-top: 10px;
      p {
        font-weight: 200;
        span {
          font-weight: 400;
        }
      }
    }

    .closed {
      color: red;
    }

    button {
      align-self: flex-end;
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
    text-align: center;
    margin-top: 20px;
  }

  @media (max-width: 800px) {
    width: 600px;
  }
  @media (max-width: 700px) {
    width: 400px;
  }
  @media (max-width: 480px) {
    width: 350px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;
