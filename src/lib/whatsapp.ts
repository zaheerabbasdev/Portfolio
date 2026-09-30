export interface WhatsAppMessageInput {
  name: string
  phone: string
  message: string
}

// wa.me requires digits only (country code + number, no '+', spaces or
// punctuation).
function toWaDigits(value: string): string {
  return value.replace(/\D/g, '')
}

// The pre-filled message shown to the visitor in WhatsApp before they hit
// send. The surrounding wording is a fixed, professional template; the
// visitor's own submitted values (name, their WhatsApp number, their
// message) are inserted as-is and never truncated.
export function buildWhatsAppMessage({ name, phone, message }: WhatsAppMessageInput): string {
  return `Hello, I'm ${name} (${phone}). I found your portfolio and wanted to get in touch about the following: "${message}" - I'd like to discuss this further. Looking forward to hearing from you.`
}

// Standard WhatsApp click-to-chat URL. `destinationNumber` is the portfolio
// owner's WhatsApp number (where the chat opens); it is distinct from
// `input.phone`, the visitor's own number, which only appears inside the
// message text. Works for web/desktop WhatsApp and opens the app directly
// on a phone where it's installed.
export function buildWhatsAppUrl(destinationNumber: string, input: WhatsAppMessageInput): string {
  const digits = toWaDigits(destinationNumber)
  const text = encodeURIComponent(buildWhatsAppMessage(input))
  return `https://wa.me/${digits}?text=${text}`
}
