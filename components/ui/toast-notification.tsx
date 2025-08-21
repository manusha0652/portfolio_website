"use client"

import { useState } from 'react'
import { CheckCircle, XCircle, X } from 'lucide-react'

interface ToastProps {
  message: string
  type: 'success' | 'error'
  onClose: () => void
}

export function Toast({ message, type, onClose }: ToastProps) {
  return (
    <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg border backdrop-blur-sm transition-all duration-300 ${
      type === 'success' 
        ? 'bg-green-900/90 border-green-500/50 text-green-100' 
        : 'bg-red-900/90 border-red-500/50 text-red-100'
    }`}>
      <div className="flex items-center gap-3">
        {type === 'success' ? (
          <CheckCircle className="w-5 h-5 text-green-400" />
        ) : (
          <XCircle className="w-5 h-5 text-red-400" />
        )}
        <span className="font-medium">{message}</span>
        <button 
          onClick={onClose}
          className="ml-2 hover:opacity-70 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export function useToast() {
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 5000)
  }

  const hideToast = () => setToast(null)

  return { toast, showToast, hideToast }
}
