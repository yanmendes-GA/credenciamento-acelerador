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
            data-property-1={currentStep === idx ? "current" : "disabled"}
            className={`rounded-[50px] outline outline-1 outline-offset-[-1px] ${currentStep === idx ? "outline-amber-600" : "outline-neutral-400"} inline-flex flex-col justify-center items-center`}
          >
            <div
              className={`w-12 h-12 text-center flex justify-center items-center text-2xl font-bold font-['Montserrat'] tracking-tight ${currentStep === idx ? "text-amber-600" : "text-neutral-400"}`}
            >
              {String(idx + 1).padStart(2, "0")}
            </div>
          </div>
          {/* Linha entre os círculos, exceto o último */}
          {idx < steps.length - 1 && (
            <div className="flex-1 h-0 outline outline-1 outline-offset-[-0.5px] outline-neutral-400" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
