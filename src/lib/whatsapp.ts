export interface WhatsAppMessageInput {
  name: string;
  phone: string;
  message: string;
}

function toWaDigits(value: string): string {
  return value.replace(/\D/g, "");
}

export function buildWhatsAppMessage({
  name,
  phone,
  message,
}: WhatsAppMessageInput): string {
  return `Hello, I'm ${name} (${phone}). I found your portfolio and wanted to get in touch about the following: "${message}" - I'd like to discuss this further. Looking forward to hearing from you.`;
}

export function buildWhatsAppUrl(
  destinationNumber: string,
  input: WhatsAppMessageInput,
): string {
  const digits = toWaDigits(destinationNumber);
  const text = encodeURIComponent(buildWhatsAppMessage(input));
  return `https://wa.me/${digits}?text=${text}`;
}
