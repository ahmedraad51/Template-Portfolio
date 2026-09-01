import { useState } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "../context/useLanguage";

export default function Contact() {
  const { lang, t, company } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // "error" | "sent"

  const cards = [
    { icon: Phone, label: t.contact.phone, value: company.phone, href: `tel:${company.phoneIntl}` },
    { icon: Mail, label: t.contact.email, value: company.email, href: `mailto:${company.email}` },
    {
      icon: MessageCircle,
      label: t.contact.whatsapp,
      value: t.contact.whatsappCta,
      href: company.whatsapp,
      external: true,
    },
  ];

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setStatus(null);
  };

  /** Builds the message body shared by the WhatsApp and email actions. */
  const buildMessage = () => {
    const labels =
      lang === "ar"
        ? { name: "الاسم", email: "البريد", message: "الرسالة" }
        : { name: "Name", email: "Email", message: "Message" };
    return [
      `${labels.name}: ${form.name.trim()}`,
      form.email.trim() ? `${labels.email}: ${form.email.trim()}` : null,
      `${labels.message}: ${form.message.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");
  };

  const isValid = () => form.name.trim() && form.message.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid()) {
      setStatus("error");
      return;
    }
    window.open(
      `${company.whatsapp}?text=${encodeURIComponent(buildMessage())}`,
      "_blank",
      "noopener"
    );
    setStatus("sent");
  };

  const handleMail = (e) => {
    if (!isValid()) {
      e.preventDefault();
      setStatus("error");
      return;
    }
    const subject = lang === "ar" ? "طلب من الموقع" : "Website enquiry";
    e.currentTarget.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(buildMessage())}`;
  };

  const field =
    "w-full border border-gray-200 rounded-xl px-5 py-3.5 text-base text-dark outline-none transition focus:border-primary placeholder:text-body/70";

  return (
    <section id="contact" className="section bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-14 items-start">
          <div>
            <p className="eyebrow">{t.contact.label}</p>
            <h2 className="section-title mb-5">{t.contact.title}</h2>
            <p className="body-text mb-8 max-w-md">{t.contact.desc}</p>

            <div className="space-y-3">
              {cards.map(({ icon: Icon, label, value, href, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="flex items-center gap-4 rounded-xl border border-primary/15 bg-primary-soft/60 px-5 py-4 hover:border-primary/40 hover:bg-primary-soft transition"
                >
                  <span className="w-12 h-12 shrink-0 rounded-full bg-primary text-white flex items-center justify-center">
                    <Icon size={20} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[15px] text-body leading-snug mb-1">{label}</span>
                    <bdi className="block text-base font-bold text-dark break-all leading-snug">
                      {value}
                    </bdi>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h3 className="card-title mb-6">{t.contact.formTitle}</h3>

            <div className="space-y-4">
              <input
                type="text"
                value={form.name}
                onChange={update("name")}
                placeholder={t.contact.namePlaceholder}
                className={field}
              />
              <input
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder={t.contact.emailPlaceholder}
                className={field}
              />
              <textarea
                value={form.message}
                onChange={update("message")}
                placeholder={t.contact.messagePlaceholder}
                rows={5}
                className={`${field} resize-y`}
              />
            </div>

            {status === "error" && (
              <p className="mt-4 text-[15px] font-semibold text-red-600">{t.contact.required}</p>
            )}
            {status === "sent" && (
              <p className="mt-4 text-[15px] font-semibold text-primary">{t.contact.sent}</p>
            )}

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <button type="submit" className="btn btn-primary w-full sm:w-auto">
                {t.contact.send}
              </button>
              <a
                href={`mailto:${company.email}`}
                onClick={handleMail}
                className="text-[15px] font-semibold text-primary hover:text-primary-dark transition text-center"
              >
                {t.contact.sendMail}
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
