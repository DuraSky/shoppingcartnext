import React from "react";
import Link from "next/link";
import {
  CartSteps,
  StepContainer,
  StyledLink,
  NonClickableStep,
  Line,
  NumberCircle,
  LabelText,
} from "./stepsStyle";

export const Steps = ({ currentStep }) => {
  const steps = [
    { label: "Košík", number: 1, view: "cart" },
    { label: "Doprava a Údaje", number: 2, view: "shipping" },
    { label: "Odesláno", number: 3, view: "thankyou" },
  ];

  const stepIndex = steps.findIndex((step) => step.view === currentStep);

  return (
    <CartSteps>
      {steps.map((step, index) => {
        const isActive = stepIndex === index;
        const isCompleted = index < stepIndex;

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
          <React.Fragment key={index}>
            <StepContainer $isActive={isActive}>
              {step.view !== "thankyou" ? (
                <StyledLink href={`/${url}`} $isActive={isActive}>
                  <NumberCircle $isActive={isActive}>
                    {step.number}
                  </NumberCircle>
                  <LabelText>{step.label}</LabelText>
                </StyledLink>
              ) : (
                <NonClickableStep $isActive={isActive}>
                  <NumberCircle $isActive={isActive}>
                    {step.number}
                  </NumberCircle>
                  <LabelText>{step.label}</LabelText>
                </NonClickableStep>
              )}
            </StepContainer>
            {index < steps.length - 1 && <Line $isCompleted={isCompleted} />}
          </React.Fragment>
        );
      })}
    </CartSteps>
  );
};
