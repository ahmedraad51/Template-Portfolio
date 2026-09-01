import { MessageCircle } from "lucide-react";
import { useLanguage } from "../context/useLanguage";

export default function WhatsAppButton() {
  const { t, company } = useLanguage();

  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label={t.contact.whatsappCta}
      className="fixed bottom-5 end-5 z-50 w-14 h-14 rounded-full bg-primary text-white shadow-lg shadow-primary/40 flex items-center justify-center hover:bg-primary-dark transition"
    >
      <MessageCircle size={24} />
    </a>
  );
}
