import React, { useState } from "react";
import { CartSteps, StepContainer, Step, Line } from "./stepsStyle";

export const Steps = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["Nákupní košík", "Doprava a platba", "Objednávka odeslána"];

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  return (
    <CartSteps>
      {steps.map((label, index) => (
        <StepContainer key={index}>
          <Line active={currentStep > index} />
          <Step
            active={currentStep >= index + 1}
            onClick={() => handleStepClick(index + 1)}
          >
            <span>{index + 1}</span>
          </Step>
          <p className={currentStep === index + 1 ? "active" : ""}>{label}</p>
        </StepContainer>
      ))}
    </CartSteps>
  );
};
