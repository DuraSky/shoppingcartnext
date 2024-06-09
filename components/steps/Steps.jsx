import React from "react";
import Link from "next/link";
import {
  CartSteps,
  StepContainer,
  StyledLink,
  NonClickableStep,
} from "./stepsStyle";

export const Steps = ({ currentStep }) => {
  const steps = [
    { label: "Nákupní košík", view: "cart" },
    { label: "Doprava a platba", view: "shipping" },
    { label: "Objednávka odeslána", view: "thankyou" },
  ];

  const stepIndex = steps.findIndex((step) => step.view === currentStep);

  return (
    <CartSteps>
      {steps.map((step, index) => {
        const isActive = stepIndex === index;
        return (
          <StepContainer key={index}>
            {step.view !== "thankyou" ? (
              <StyledLink href={`/?view=${step.view}`} isActive={isActive}>
                {step.label}
              </StyledLink>
            ) : (
              <NonClickableStep isActive={isActive}>
                {step.label}
              </NonClickableStep>
            )}
          </StepContainer>
        );
      })}
    </CartSteps>
  );
};
