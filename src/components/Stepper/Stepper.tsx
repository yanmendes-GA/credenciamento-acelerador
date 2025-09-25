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

  // Mobile: apenas círculos numerados, sem títulos/descrições
  return (
    <div className="flex items-center justify-center w-full mb-6 md:hidden">
      {steps.map((step, idx) => (
        <React.Fragment key={step.id}>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 text-base font-bold mb-1 transition-all
                ${currentStep === idx ? "border-[#F9A826] text-[#F9A826] bg-[#23272A] shadow-[0_0_8px_#F9A826]" : "border-[#6F7479] text-[#6F7479] bg-[#23272A]"}`}
            >
              {String(idx + 1).padStart(2, "0")}
            </div>
          </div>
          {/* Linha entre os círculos, exceto o último */}
          {idx < steps.length - 1 && (
            <div
              className="flex-1 h-0.5 bg-gradient-to-r from-[#F9A826] via-[#6F7479] to-[#6F7479] mx-1"
              style={{ minWidth: 32 }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
