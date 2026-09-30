import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { contact } from '@/data/contact'
import { personal } from '@/data/personal'
import { validateContactForm } from '@/lib/validation'
import type { ContactMode, FormErrors, FormValues } from '@/lib/validation'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { BracketButton } from '@/components/ui/BracketButton'
import { Toast } from '@/components/Contact/Toast'
import type { ToastState, ToastVariant } from '@/components/Contact/Toast'

const initialValues: FormValues = { name: '', email: '', phone: '', message: '' }

// Which fields are visible in each mode, in display order. Both modes share
// the same underlying `values` state (see FormValues), so switching modes
// never loses what's already been typed in the other mode's fields.
const MODE_FIELDS: Record<ContactMode, Array<keyof FormValues>> = {
  email: ['name', 'email', 'message'],
  whatsapp: ['name', 'phone', 'message'],
}

let toastId = 0

export function ContactForm() {
  const [mode, setMode] = useState<ContactMode>('email')
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting'>('idle')
  const [toasts, setToasts] = useState<ToastState[]>([])

  const pushToast = (variant: ToastVariant, message: string) => {
    toastId += 1
    setToasts((current) => [...current, { id: toastId, variant, message }])
  }

  const dismissToast = (id: number) => {
    setToasts((current) => current.filter((toast) => toast.id !== id))
  }

  const onChange = (field: keyof FormValues) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((current) => ({ ...current, [field]: event.target.value }))
  }

  const switchMode = (nextMode: ContactMode) => {
    if (nextMode === mode) return
    setMode(nextMode)
    setErrors({})
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validationErrors = validateContactForm(values, mode)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    if (mode === 'whatsapp') {
      const url = buildWhatsAppUrl(personal.phone, {
        name: values.name,
        phone: values.phone,
        message: values.message,
      })
      window.open(url, '_blank', 'noopener,noreferrer')
      return
    }

    setStatus('submitting')

    if (!contact.formspreeEndpoint) {
      // Endpoint intentionally left blank - see data/contact.ts.
      window.setTimeout(() => {
        setStatus('idle')
        pushToast('info', "This form isn't connected yet - add a Formspree endpoint in src/data/contact.ts.")
      }, 500)
      return
    }

    try {
      const response = await fetch(contact.formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: values.name, email: values.email, message: values.message }),
      })

      if (!response.ok) throw new Error('Request failed')

      setValues(initialValues)
      pushToast('success', "Message sent - I'll get back to you soon.")
    } catch {
      pushToast('error', 'Something went wrong sending your message. Please try again.')
    } finally {
      setStatus('idle')
    }
  }

  const visibleFields = contact.fields.filter((field) => MODE_FIELDS[mode].includes(field.name))

  return (
    <div className="w-full max-w-xl">
      <div
        role="group"
        aria-label="Choose how to get in touch"
        className="mb-8 flex w-full divide-x divide-ink border border-ink"
      >
        <button
          type="button"
          aria-pressed={mode === 'email'}
          onClick={() => switchMode('email')}
          className="contact-mode-btn flex flex-1 items-center justify-center gap-2 px-4 py-3 text-sm font-semibold"
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-base" aria-hidden="true" />
          Email
        </button>
        <button
          type="button"
          aria-pressed={mode === 'whatsapp'}
          onClick={() => switchMode('whatsapp')}
          className="contact-mode-btn flex flex-1 items-center justify-center gap-2 px-4 py-3 text-sm font-semibold"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="text-base" aria-hidden="true" />
          WhatsApp
        </button>
      </div>

      <form noValidate onSubmit={onSubmit} className="flex flex-col gap-7">
        {visibleFields.map((field) => {
          const value = values[field.name]
          const error = errors[field.name]
          const shared = {
            id: `contact-${field.name}`,
            name: field.name,
            value,
            onChange: onChange(field.name),
            placeholder: field.placeholder,
            'aria-label': field.label,
            'aria-required': field.required,
            'aria-invalid': Boolean(error),
            'aria-describedby': error ? `contact-${field.name}-error` : undefined,
            className:
              'contact-input w-full border-b border-ink/40 bg-transparent pb-3 text-sm text-ink placeholder:text-muted/70 placeholder:tracking-[0.08em] focus:border-ink focus:outline-none focus-visible:outline-none transition-colors',
          }

          return (
            <div key={field.name}>
              {field.type === 'textarea' ? (
                <textarea rows={4} {...shared} />
              ) : (
                <input type={field.type} {...shared} />
              )}
              {error ? (
                <p id={`contact-${field.name}-error`} className="mt-2 text-xs text-red-700">
                  {error}
                </p>
              ) : null}
            </div>
          )
        })}

        <div className="pt-2">
          <BracketButton
            type="submit"
            label={
              mode === 'whatsapp' ? 'Continue on WhatsApp' : status === 'submitting' ? 'Sending…' : 'Send Message'
            }
            disabled={status === 'submitting'}
            className="disabled:opacity-50"
          />
        </div>
      </form>

      <div aria-live="assertive" className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex flex-col items-center gap-3 px-6">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} durationMs={contact.autoHideMs} onDismiss={dismissToast} />
        ))}
      </div>
    </div>
  )
}
