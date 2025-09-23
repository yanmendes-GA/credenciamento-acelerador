import React from 'react';

interface FormInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  id: string;
}

export const FormInput: React.FC<FormInputProps> = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  type = "text",
  id 
}) => {
  return (
    <div className="flex flex-col items-start gap-2 self-stretch relative">
      <label htmlFor={id} className="self-stretch relative">
        <div className="font-bold text-base text-white leading-6 tracking-[0.016px] max-sm:text-sm">
          {label}
        </div>
      </label>
      <div className="flex h-[50px] flex-col justify-center items-start self-stretch relative bg-[#6F7479] px-2 py-0 rounded-lg">
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent border-none outline-none font-normal text-sm text-white leading-6 tracking-[0.014px] placeholder:text-[#A0A3A6] placeholder:italic max-sm:text-xs"
        />
      </div>
    </div>
  );
};
