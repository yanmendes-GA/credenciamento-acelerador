import React from "react";
import './Checkbox.css';

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: React.ReactNode;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked,
  onChange,
  children,
}) => {
  return (
    <div className="checkbox">
      <div className="checkbox__input-wrapper">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="checkbox__input"
          aria-describedby={`${id}-label`}
        />
        {checked && (
          <div className="checkbox__check">
            <svg
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4.5L4.5 8L11 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
      <label
        id={`${id}-label`}
        htmlFor={id}
        className="checkbox__label"
      >
        {children}
      </label>
    </div>
  );
};
