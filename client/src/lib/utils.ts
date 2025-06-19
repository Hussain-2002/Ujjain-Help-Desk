import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function openWhatsApp(phoneNumber: string, message: string = "Hi, I need help regarding Ujjain Relay Centre services") {
  const formattedNumber = phoneNumber.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
  window.open(url, '_blank');
}

export function openEmail(email: string, subject: string = "Support Request - Ujjain Relay Centre") {
  const encodedSubject = encodeURIComponent(subject);
  const url = `mailto:${email}?subject=${encodedSubject}`;
  window.open(url, '_blank');
}

export function openGoogleMaps(query: string) {
  const encodedQuery = encodeURIComponent(query);
  const url = `https://maps.google.com/maps?q=${encodedQuery}`;
  window.open(url, '_blank');
}
