import { useState, useCallback } from "react"
import { ToastContext, ToastOptions } from "@/contexts/ToastContext"
import CustomToast from "@/components/CustomToast"

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toast, setToast] = useState<ToastOptions | null>(null)
  const [visible, setVisible] = useState(false)

  const showToast = useCallback((options: ToastOptions) => {
    setToast(options)
    setVisible(true)
  }, [])

  const handleClose = () => {
    setVisible(false)
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {visible && toast && (
        <div className="fixed top-8 right-0 z-50">
          <CustomToast
            message={toast.message}
            onClose={handleClose}
            variant={toast.variant || "success"}
            autoClose={toast.autoClose}
          />
        </div>
      )}
    </ToastContext.Provider>
  )
}
