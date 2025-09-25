import React from 'react';
import './Stepper.css';

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
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  clickable?: boolean;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  onStepClick,
  orientation = 'horizontal',
  size = 'md',
  clickable = false
}) => {
  const handleStepClick = (stepIndex: number) => {
    if (clickable && onStepClick) {
      onStepClick(stepIndex);
    }
  };

  return (
    <div className={`stepper stepper--${orientation} stepper--${size}`}>
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;
        const isClickable = clickable && (isCompleted || isActive);
        
        return (
          <div key={step.id} className="stepper__item">
            {/* Step Circle */}
            <div
              className={`stepper__step ${
                isActive ? 'stepper__step--active' : ''
              } ${isCompleted ? 'stepper__step--completed' : ''} ${
                isClickable ? 'stepper__step--clickable' : ''
              }`}
              onClick={() => handleStepClick(index)}
            >
              {isCompleted ? (
                <svg
                  className="stepper__check-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3334 4L6.00008 11.3333L2.66675 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <span className="stepper__step-number">{index + 1}</span>
              )}
            </div>

            {/* Step Content */}
            <div className="stepper__content">
              <div
                className={`stepper__title ${
                  isActive ? 'stepper__title--active' : ''
                } ${isCompleted ? 'stepper__title--completed' : ''}`}
              >
                {step.title}
              </div>
              {step.description && (
                <div className="stepper__description">
                  {step.description}
                </div>
              )}
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={`stepper__connector ${
                  isCompleted ? 'stepper__connector--completed' : ''
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};