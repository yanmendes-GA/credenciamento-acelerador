import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ToastProvider } from "@/providers/ToastProvider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "@/contexts/AuthContext"
import { ProtectedRoute } from "@/components/ProtectedRoute"
import Index from "./pages/Index"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import EventDetails from "./pages/EventDetails"
import AccreditationDetails from "./pages/AccreditationDetails"
import NotFound from "./pages/NotFound"
import Step02 from "./pages/Step02"
import Step03 from "./pages/Step03"
import ThankYouPage from "./pages/ThankYouPage"

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ToastProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<Index />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/step02"
                element={<Step02 />}
              />
              <Route
                path="/step03"
                element={<Step03 />}
              />
              <Route
                path="/thank-you"
                element={<ThankYouPage />}
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/events/:eventId"
                element={
                  <ProtectedRoute>
                    <EventDetails />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/accredited/:accreditedId"
                element={
                  <ProtectedRoute>
                    <AccreditationDetails />
                  </ProtectedRoute>
                }
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route
                path="*"
                element={<NotFound />}
              />
            </Routes>
          </BrowserRouter>
        </ToastProvider>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
)

export default App
