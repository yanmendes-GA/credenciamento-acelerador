import React from "react";
import "./Stepper.css";

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

  // Mobile: apenas círculos numerados, sem títulos/descrições
  return (
    <div
      className={`flex items-center justify-center w-full gap-4 mb-6 md:hidden`}
    >
      {steps.map((step, idx) => (
        <div key={step.id} className="flex flex-col items-center">
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 text-base font-bold mb-1 transition-all
              ${currentStep === idx ? "border-[#F9A826] text-[#F9A826] bg-[#23272A]" : "border-[#6F7479] text-[#6F7479] bg-[#23272A]"}`}
          >
            {String(idx + 1).padStart(2, "0")}
          </div>
        </div>
      ))}
    </div>
  );
};
