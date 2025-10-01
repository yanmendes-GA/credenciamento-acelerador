import { useContext } from "react"
import { ToastContext } from "@/contexts/ToastContext"

export const useCustomToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useCustomToast deve ser usado dentro de ToastProvider")
  }
  return context.showToast
}
