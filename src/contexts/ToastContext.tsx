import { createContext } from "react"

export type ToastOptions = {
  message: string
  variant?: "success" | "error" | "info" | "warning"
  autoClose?: number
}

export type ToastContextType = {
  showToast: (options: ToastOptions) => void
}

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined,
)
