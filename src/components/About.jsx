import { Mail, Phone, MessageCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/useLanguage";

export default function About() {
  const { lang, t, company } = useLanguage();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  const socials = [
    { icon: Phone, href: `tel:${company.phoneIntl}`, label: t.contact.phone },
    { icon: MessageCircle, href: company.whatsapp, label: t.contact.whatsapp, external: true },
    { icon: Mail, href: `mailto:${company.email}`, label: t.contact.email },
  ];

  return (
    <section id="about" className="section">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-12 md:gap-14 items-start">
        <div>
          <p className="eyebrow">{t.about.label}</p>
          <h2 className="section-title mb-5">{t.about.title}</h2>
          <p className="body-text max-w-md mb-7">{t.about.desc}</p>
          <a href="#services" className="link-arrow">
            {t.about.cta}
            <Arrow size={18} />
          </a>
        </div>

        <div>
          <h3 className="card-title mb-4">{t.about.connectTitle}</h3>
          <p className="body-text max-w-md mb-7">{t.about.connectDesc}</p>
          <div className="flex flex-wrap items-center gap-3">
            {socials.map(({ icon: Icon, href, label, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="w-12 h-12 border border-primary/25 text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
