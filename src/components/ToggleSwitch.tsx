import React from "react";
import './ToggleSwitch.css';

interface ToggleSwitchProps {
  selectedOption: "brasileiro" | "estrangeiro";
  onToggle: (option: "brasileiro" | "estrangeiro") => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  selectedOption,
  onToggle,
}) => {
  return (
    <div className="toggle-switch" role="tablist" aria-label="Tipo de documento">
      <button
        type="button"
        role="tab"
        aria-selected={selectedOption === "brasileiro"}
        onClick={() => onToggle("brasileiro")}
        className={`toggle-switch__option ${
          selectedOption === "brasileiro" ? "toggle-switch__option--active" : ""
        }`}
      >
        Brasileiro
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={selectedOption === "estrangeiro"}
        onClick={() => onToggle("estrangeiro")}
        className={`toggle-switch__option ${
          selectedOption === "estrangeiro" ? "toggle-switch__option--active" : ""
        }`}
      >
        Estrangeiro
      </button>
    </div>
  );
};
