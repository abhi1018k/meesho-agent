import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../utils/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink("Floating button")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lift transition hover:-translate-y-1 hover:bg-emerald-700 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
