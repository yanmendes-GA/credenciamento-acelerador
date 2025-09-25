import React from "react";

interface FormInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  maxLength?: number;
  id: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  maxLength,
  id,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-group__label">
        {label}
      </label>
      <div className="form-group__input">
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          maxLength={maxLength}
          className="input"
        />
      </div>
    </div>
  );
};
