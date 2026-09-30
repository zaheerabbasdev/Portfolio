import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

export type ToastVariant = 'success' | 'error' | 'info'

export interface ToastState {
  id: number
  variant: ToastVariant
  message: string
}

interface ToastProps extends ToastState {
  durationMs: number
  onDismiss: (id: number) => void
}

const variantStyles: Record<ToastVariant, string> = {
  success: 'border-ink bg-ink text-paper',
  error: 'border-red-900 bg-red-950 text-red-50',
  info: 'border-ink/20 bg-white text-ink',
}

// Custom themed toast - never a browser alert(). Auto-hides after
// `durationMs` and can be dismissed early via the close control.
export function Toast({ id, variant, message, durationMs, onDismiss }: ToastProps) {
  const toastRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = toastRef.current
    if (el) gsap.fromTo(el, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' })

    const timer = window.setTimeout(() => onDismiss(id), durationMs)
    return () => window.clearTimeout(timer)
  }, [id, durationMs, onDismiss])

  return (
    <div
      ref={toastRef}
      role="status"
      className={`pointer-events-auto flex max-w-sm items-start gap-3 rounded border px-4 py-3.5 shadow-lg ${variantStyles[variant]}`}
    >
      <p className="flex-1 text-sm leading-snug">{message}</p>
      <button
        type="button"
        onClick={() => onDismiss(id)}
        aria-label="Dismiss notification"
        className="text-current opacity-70 transition-opacity hover:opacity-100"
      >
        ×
      </button>
    </div>
  )
}
