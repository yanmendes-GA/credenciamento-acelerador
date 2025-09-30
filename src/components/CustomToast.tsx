import React from "react"

interface CustomToastProps {
  message: string
  onClose: () => void
}

const CustomToast: React.FC<CustomToastProps> = ({ message, onClose }) => {
  return (
    <div
      className="relative flex items-center bg-transparent py-3 px-0"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Faixa lateral com bordas arredondadas e skew */}
      <div
        className="absolute left-0 top-0 h-full"
        style={{
          width: 30,
          background: "#63E05B",
          borderRadius: "12px 0px 12px 0px",
          transform: "skew(-20deg)",
          zIndex: 1,
        }}
      />
      {/* Toast box */}
      <div
        className="flex-1 mr-[60px] rounded-b-xl rounded-tr-xl bg-[#3C4144] border border-[#63E05B] flex items-center min-h-[60px]"
        style={{ clipPath: "polygon(6% 0, 100% 0, 100% 100%, 0% 100%)" }}
      >
        <span className="text-[#63E05B] text-1xl font-semibold px-8 pl-[12%] py-0">
          {message}
        </span>
      </div>
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-[12%] top-[10%] w-6 h-6 rounded-full bg-[#63E05B] flex items-center justify-center text-white text-1xl font-bold hover:bg-[#4bbd47] transition"
        aria-label="Fechar"
      >
        X
      </button>
    </div>
  )
}

export default CustomToast
