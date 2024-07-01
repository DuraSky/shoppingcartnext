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
        let url = null;
        switch (step.view) {
          case "cart":
            url = "vas-kosik";
            break;
          case "shipping":
            url = "doprava-a-platba";
            break;
          case "thankyou":
            url = "dekujeme";
            break;
          default:
            url = "vas-kosik";
            break;
        }
        return (
          <StepContainer key={index} isActive={isActive}>
            {step.view !== "thankyou" ? (
              // <StyledLink href={`/?view=${step.view}`} isActive={isActive}>
              //   {step.label}
              // </StyledLink>
                <StyledLink href={`/${url}`} isActive={isActive}>
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
