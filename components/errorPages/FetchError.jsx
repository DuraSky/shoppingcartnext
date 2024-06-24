import React from "react";
import { ErrorContainer, ErrorMessage, ErrorIcon } from "./fetchErrorStyle";

export const FetchError = ({ error }) => {
  return (
    <ErrorContainer>
      <ErrorMessage>
        <h1>Hledanou stránku jsme nenašli</h1>
        <p>
          Omlouváme se, stránka neexistuje, najdeme ale pro Vás jiné produkty.
        </p>
        <p>
          Zkuste třeba: vrátit se na hlavní stránku napsat nám nebo zavolat
          Poradím Vám s výběrem
        </p>
        <ul>
          <li>+420 777 925 338</li>
          <li> info@zanapo.cz</li>
        </ul>
        <p className="error">{error}</p>
      </ErrorMessage>
    </ErrorContainer>
  );
};
