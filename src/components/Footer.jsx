import { Mail, Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "../context/useLanguage";
import logo from "../assets/logo.svg";

export default function Footer() {
  const { lang, t, company } = useLanguage();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#process", label: t.nav.process },
    { href: "#team", label: t.nav.team },
    { href: "#contact", label: t.nav.contact },
  ];

  const contacts = [
    { icon: Phone, href: `tel:${company.phoneIntl}`, text: company.phone },
    { icon: Mail, href: `mailto:${company.email}`, text: company.email },
    { icon: MessageCircle, href: company.whatsapp, text: t.contact.whatsapp, external: true },
  ];

  return (
    <footer className="on-dark bg-dark text-white/65">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <a href="#top" className="flex items-center gap-2.5 mb-5 w-fit">
            <img
              src={logo}
              alt={company.name[lang]}
              className="w-11 h-11 bg-white rounded-lg p-1"
            />
            <span className="text-xl font-extrabold text-white">{company.name[lang]}</span>
          </a>
          <p className="meta-text max-w-xs">{t.footer.desc}</p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-5">{t.footer.links}</h3>
          <ul className="space-y-2.5 text-base">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-primary-light transition">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-5">{t.footer.contact}</h3>
          <ul className="space-y-3.5 text-base">
            {contacts.map(({ icon: Icon, href, text, external }) => (
              <li key={text}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="flex items-center gap-2.5 hover:text-primary-light transition break-all"
                >
                  <Icon size={18} className="shrink-0" />
                  <bdi>{text}</bdi>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[15px]">
          <p>
            © {new Date().getFullYear()} {company.name[lang]} — {t.footer.rights}
          </p>
          <a href="#top" className="hover:text-primary-light transition font-semibold">
            ↑ {t.footer.top}
          </a>
        </div>
      </div>
    </footer>
  );
}
