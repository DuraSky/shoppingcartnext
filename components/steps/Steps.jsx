import React from "react";
import Link from "next/link";
import { CartSteps, StepContainer, StyledLink } from "./stepsStyle";

export const Steps = ({ currentStep }) => {
  const steps = [
    {
      label: "Nákupní košík",
      view: "cart",
      iconUrl: "/assets/shopping.png",
    },
    {
      label: "Doprava a platba",
      view: "shipping",
      iconUrl: "/assets/truck.png",
    },
    {
      label: "Objednávka odeslána",
      view: "thankyou",
      iconUrl: "/assets/checkmark.png",
    },
  ];

  const stepIndex =
    currentStep === "shipping" ? 1 : currentStep === "thankyou" ? 2 : 0;

  return (
    <CartSteps>
      {steps.map((step, index) => (
        <StepContainer key={index} active={stepIndex > index}>
          {step.view !== "thankyou" ? (
            <StyledLink
              href={`/?view=${step.view}`}
              passHref
              active={stepIndex >= index}
            >
              <img src={step.iconUrl} alt={step.label} />
            </StyledLink>
          ) : (
            <img src={step.iconUrl} alt={step.label} />
          )}
          <p className={stepIndex === index ? "active" : ""}>{step.label}</p>
        </StepContainer>
      ))}
    </CartSteps>
  );
};
