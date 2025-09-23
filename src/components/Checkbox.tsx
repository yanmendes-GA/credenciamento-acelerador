import React from 'react';

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: React.ReactNode;
}

export const Checkbox: React.FC<CheckboxProps> = ({ id, checked, onChange, children }) => {
  return (
    <div className="flex items-center gap-2 self-stretch relative">
      <div className="w-6 h-6 relative">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="w-6 h-6 shrink-0 border absolute bg-[#101820] rounded-[5px] border-solid border-[#A0A3A6] left-0 top-0 appearance-none checked:bg-[#101820] checked:border-[#A0A3A6] cursor-pointer"
          aria-describedby={`${id}-label`}
        />
        {checked && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 4.5L4.5 8L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
      </div>
      <label
        id={`${id}-label`}
        htmlFor={id}
        className="flex-[1_0_0] relative cursor-pointer"
      >
        <div className="font-normal text-sm text-white leading-4 tracking-[0.014px] max-sm:text-xs max-sm:leading-[14px]">
          {children}
        </div>
      </label>
    </div>
  );
};
