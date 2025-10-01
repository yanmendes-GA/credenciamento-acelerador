import React, { useEffect, useState } from "react"

interface CustomToastProps {
  message: string
  onClose: () => void
}

const CustomToast: React.FC<CustomToastProps> = ({ message, onClose }) => {
  const [barGrow, setBarGrow] = useState(false)
  const [barSlide, setBarSlide] = useState(false)
  const [toastBoxWidth, setToastBoxWidth] = useState(false)
  const [showToastBox, setShowToastBox] = useState(false)
  const [showClose, setShowClose] = useState(false)

  useEffect(() => {
    setTimeout(() => setBarGrow(true), 100)
    setTimeout(() => setBarSlide(true), 600)
    setTimeout(() => setToastBoxWidth(true), 900)
    setTimeout(() => setShowToastBox(true), 1200)
    setTimeout(() => setShowClose(true), 1500)
  }, [])

  return (
    <div
      className="relative flex items-center bg-transparent py-3 px-0"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Faixa lateral animada crescendo de baixo para cima */}
      <div
        id="absolute-bar"
        className={`absolute left-0 bottom-0 ${barGrow ? "h-full" : "h-0"} transition-all duration-500`}
        style={{
          width: 30,
          maxHeight: "100px",
          background: "#63E05B",
          borderRadius: "12px 0px 12px 0px",
          transform: barSlide
            ? "skew(-20deg) translateX(-30px)"
            : "skew(-20deg)",
          zIndex: 1,
          transition: "height 0.5s, transform 0.4s",
        }}
      />
      {/* Toast box animado */}
      <div
        id="toast-box"
        className={`mr-[60px] rounded-b-xl rounded-tr-xl bg-[#3C4144] border border-[#63E05B] flex items-center min-h-[60px] ${showToastBox ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        style={{
          clipPath: "polygon(6% 0, 100% 0, 100% 100%, 0% 100%)",
          width: toastBoxWidth ? "100%" : "0px",
          transition: "width 0.4s, opacity 0.3s",
        }}
      >
        <span className="text-[#63E05B] text-1xl font-semibold px-8 pl-[12%] py-0">
          {message}
        </span>
      </div>
      {/* Close button animado */}
      <button
        id="close-button"
        onClick={onClose}
        className={`absolute right-[12%] top-[10%] w-6 h-6 rounded-full bg-[#63E05B] flex items-center justify-center text-white text-1xl font-bold hover:bg-[#4bbd47] transition ${showClose ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
        aria-label="Fechar"
        style={{ pointerEvents: showClose ? "auto" : "none" }}
      >
        X
      </button>
    </div>
  )
}

export default CustomToast
