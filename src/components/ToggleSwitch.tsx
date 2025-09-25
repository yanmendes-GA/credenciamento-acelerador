import React from "react";

interface ToggleSwitchProps {
  selectedOption: "brasileiro" | "estrangeiro";
  onToggle: (option: "brasileiro" | "estrangeiro") => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  selectedOption,
  onToggle,
}) => {
  return (
    <div
      className="flex w-[313px] justify-center items-start gap-2 relative bg-[#101820] p-1.5 rounded-tl-[18px] rounded-br-[18px] max-md:w-full max-md:max-w-[313px] max-sm:w-full"
      role="tablist"
      aria-label="Tipo de documento"
    >
      <button
        type="button"
        role="tab"
        aria-selected={selectedOption === "brasileiro"}
        onClick={() => onToggle("brasileiro")}
        className={`flex justify-center items-center gap-2.5 flex-[1_0_0] hover:bg-[#3F464C] relative px-1.5 py-[3px] rounded-tl-[12px] rounded-br-[12px] transition-colors ${
          selectedOption === "brasileiro" ? "bg-[#3F464C]" : ""
        }`}
      >
        <div className="relative">
          <div className="font-bold text-base text-white leading-6 tracking-[0.016px] max-sm:text-sm">
            Brasileiro
          </div>
        </div>
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={selectedOption === "estrangeiro"}
        onClick={() => onToggle("estrangeiro")}
        className={`flex justify-center items-center gap-2.5 flex-[1_0_0] hover:bg-[#3F464C] relative px-1.5 py-[3px] rounded-tl-[12px] rounded-br-[12px] transition-colors ${
          selectedOption === "estrangeiro" ? "bg-[#3F464C]" : ""
        }`}
      >
        <div className="relative">
          <div className="font-bold text-base text-white leading-6 tracking-[0.016px] max-sm:text-sm">
            Estrangeiro
          </div>
        </div>
      </button>
    </div>
  );
};
