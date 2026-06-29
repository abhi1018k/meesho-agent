import { contact } from "../data/content";

export function whatsappLink(source: string) {
  const text = contact.message + " Source: " + source;
  return contact.whatsapp + "?text=" + encodeURIComponent(text);
}
