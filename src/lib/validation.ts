const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Lenient international phone check: only the digit count matters (7-15,
// matching the E.164 max), so real numbers with a leading '+', spaces,
// dashes or parentheses aren't rejected.
const PHONE_DIGITS_MIN = 7
const PHONE_DIGITS_MAX = 15

export type ContactMode = 'email' | 'whatsapp'

export interface FormValues {
  name: string
  email: string
  phone: string
  message: string
}

export type FormErrors = Partial<Record<keyof FormValues, string>>

// Required-field + format validation for the dual-mode contact form.
// Email mode checks name/email/message; WhatsApp mode checks
// name/phone/message - whichever fields aren't visible in the current mode
// are never validated.
export function validateContactForm(values: FormValues, mode: ContactMode): FormErrors {
  const errors: FormErrors = {}

  if (!values.name.trim()) errors.name = 'Please enter your full name.'

  if (mode === 'email') {
    if (!values.email.trim()) {
      errors.email = 'Please enter your email.'
    } else if (!EMAIL_RE.test(values.email.trim())) {
      errors.email = 'Please enter a valid email address.'
    }
  } else {
    const digits = values.phone.replace(/\D/g, '')
    if (!values.phone.trim()) {
      errors.phone = 'Please enter your WhatsApp number.'
    } else if (digits.length < PHONE_DIGITS_MIN || digits.length > PHONE_DIGITS_MAX) {
      errors.phone = 'Please enter a valid WhatsApp number, including country code.'
    }
  }

  if (!values.message.trim()) errors.message = 'Please enter a message.'

  return errors
}
