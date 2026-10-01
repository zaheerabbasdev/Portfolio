const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PHONE_DIGITS_MIN = 7;
const PHONE_DIGITS_MAX = 15;

export type ContactMode = "email" | "whatsapp";

export interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export type FormErrors = Partial<Record<keyof FormValues, string>>;

export function validateContactForm(
  values: FormValues,
  mode: ContactMode,
): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Please enter your full name.";

  if (mode === "email") {
    if (!values.email.trim()) {
      errors.email = "Please enter your email.";
    } else if (!EMAIL_RE.test(values.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
  } else {
    const digits = values.phone.replace(/\D/g, "");
    if (!values.phone.trim()) {
      errors.phone = "Please enter your WhatsApp number.";
    } else if (
      digits.length < PHONE_DIGITS_MIN ||
      digits.length > PHONE_DIGITS_MAX
    ) {
      errors.phone =
        "Please enter a valid WhatsApp number, including country code.";
    }
  }

  if (!values.message.trim()) errors.message = "Please enter a message.";

  return errors;
}
