import React, { useEffect, useState } from "react"

type ToastVariant = "success" | "warning" | "error" | "info"

interface CustomToastProps {
  message: string
  onClose: () => void
  variant?: ToastVariant
  autoClose?: number // em ms
}

const variantColors: Record<
  ToastVariant,
  { bar: string; border: string; text: string; buttonHover: string }
> = {
  success: {
    bar: "#1CD644",
    border: "#1CD644",
    text: "#1CD644",
    buttonHover: "#169c32",
  },
  warning: {
    bar: "#E6E676",
    border: "#E6E676",
    text: "#E6E676",
    buttonHover: "#bdbd4c",
  },
  error: {
    bar: "#DE4949",
    border: "#DE4949",
    text: "#DE4949",
    buttonHover: "#a82e2e",
  },
  info: {
    bar: "#A5BAEE",
    border: "#A5BAEE",
    text: "#A5BAEE",
    buttonHover: "#6c8ad6",
  },
}

const CustomToast: React.FC<CustomToastProps> = ({
  message,
  onClose,
  variant = "success",
  autoClose = 4000,
}) => {
  const colors = variantColors[variant]
  const [show, setShow] = useState(false)
  const [progress, setProgress] = useState(100)
  const [paused, setPaused] = useState(false)
  const [startTime, setStartTime] = useState(Date.now())
  const [remaining, setRemaining] = useState(autoClose)
  const timerRef = React.useRef<NodeJS.Timeout | null>(null)

  // SlideIn/SlideOut animation
  // Garante animação de entrada: inicia com show=false e ativa show=true após mount
  useEffect(() => {
    setShow(false)
    setStartTime(Date.now())
    setRemaining(autoClose)
    setProgress(100)
    setPaused(false)
    const timer = setTimeout(() => {
      setShow(true)
    }, 10)
    return () => clearTimeout(timer)
  }, [autoClose])

  // Timer and progress bar logic
  useEffect(() => {
    if (!show || paused || autoClose <= 0) return
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime
      const left = Math.max(autoClose - elapsed, 0)
      setRemaining(left)
      setProgress((left / autoClose) * 100)
      if (left <= 0) {
        setShow(false)
        setTimeout(onClose, 400)
      }
    }, 50)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [show, paused, startTime, autoClose, onClose])

  // Pause timer on hover
  const handleMouseEnter = () => {
    setPaused(true)
    if (timerRef.current) clearInterval(timerRef.current)
    setRemaining((prev) => prev)
  }
  const handleMouseLeave = () => {
    setPaused(false)
    setStartTime(Date.now() - (autoClose - remaining))
  }

  return (
    <div
      className={`relative flex items-center bg-transparent py-3 px-0 animate-toast-slide ${show ? "toast-in" : "toast-out"}`}
      style={{
        fontFamily: "Montserrat, sans-serif",
        maxWidth: "400px",
        width: "100%",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
      >
        <div
          id="progress-bar"
          className="absolute bottom-0 w-[80px]"
          style={{
            height: `${progress}%`,
            background: colors.bar,
            zIndex: 2,
            transition: paused ? "none" : "height 0.1s linear",
          }}
        />
      </div>
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
        <span
          className="font-semibold px-8 pl-[50px] py-0"
          style={{ color: colors.text, fontSize: "1rem", lineHeight: "1.2rem" }}
        >
          {message}
        </span>
      </div>
      {/* Close button animado */}
      <button
        onClick={() => {
          setShow(false)
          setTimeout(onClose, 400)
        }}
        className="absolute right-[50px] top-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-1xl font-bold transition"
        style={{ background: colors.bar }}
        aria-label="Fechar"
        onMouseOver={(e) =>
          (e.currentTarget.style.background = colors.buttonHover)
        }
        onMouseOut={(e) => (e.currentTarget.style.background = colors.bar)}
        id="close-button"
      >
        X
      </button>
      <style>{`
        .animate-toast-slide {
          transition: transform 0.5s cubic-bezier(.4,1.3,.6,1), opacity 0.5s;
        }
        .toast-in {
          opacity: 1;
          transform: translateX(0);
        }
        .toast-out {
          opacity: 0;
          transform: translateX(120%);
        }
      `}</style>
    </div>
  )
}

export default CustomToast
