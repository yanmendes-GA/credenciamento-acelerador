import React from "react";

export interface StepperStep {
  id: string;
  title: string;
  description?: string;
  isCompleted?: boolean;
  isActive?: boolean;
}

interface StepperProps {
  steps: StepperStep[];
  currentStep: number;
  onStepClick?: (stepIndex: number) => void;
  orientation?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
  clickable?: boolean;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  onStepClick,
  orientation = "horizontal",
  size = "md",
  clickable = false,
}) => {
  const handleStepClick = (stepIndex: number) => {
    if (clickable && onStepClick) {
      onStepClick(stepIndex);
    }
  };

  return (
    <div
      className="self-stretch p-2.5 inline-flex justify-between items-center w-full"
      style={{ background: "none" }}
    >
      {steps.map((step, idx) => (
        <React.Fragment key={step.id}>
          <div
            className={`rounded-full w-14 h-14 flex flex-col justify-center items-center border-2 
                ${currentStep === idx ? "border-amber-600 bg-transparent" : ""}
                ${idx < currentStep ? "bg-amber-600 border-transparent" : ""}
                ${idx > currentStep ? "border-[#A0A3A6] bg-transparent" : ""}
              `}
            style={{
              borderColor:
                currentStep === idx
                  ? "#D17A20"
                  : idx > currentStep
                    ? "#A0A3A6"
                    : "transparent",
              backgroundColor: idx < currentStep ? "#D17A20" : "transparent",
            }}
          >
            <span
              className={`text-2xl font-bold font-['Montserrat'] tracking-tight 
                  ${currentStep === idx ? "text-amber-600" : ""}
                  ${idx < currentStep ? "text-white" : ""}
                  ${idx > currentStep ? "text-[#A0A3A6]" : ""}
                `}
            >
              {String(idx + 1).padStart(2, "0")}
            </span>
          </div>
          {/* Linha entre os círculos, exceto o último */}
          {idx < steps.length - 1 && (
            <div
              className={`flex-1 h-0 border-t-2
                ${idx < currentStep - 1 ? "border-amber-600" : ""}
                ${idx === currentStep - 1 ? "border-amber-600" : ""}
                ${idx === currentStep ? "border-[#A0A3A6]" : ""}
                ${idx > currentStep ? "border-[#A0A3A6]" : ""}
              `}
              style={{
                borderColor:
                  idx < currentStep
                    ? "#D17A20"
                    : idx >= currentStep
                      ? "#A0A3A6"
                      : "#A0A3A6",
              }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
