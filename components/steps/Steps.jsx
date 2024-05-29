import React from "react";
import { CartSteps } from "./stepsStyle";

export const Steps = () => {
  return (
    <CartSteps>
      <p className="active">1. Nákupní košík</p>
      <p>2. Doprava a platba</p>
      <p>3. Kontaktní údaje</p>
    </CartSteps>
  );
};
