import { useState } from "react";
import { Globe, Menu, X, Phone } from "lucide-react";
import { useLanguage } from "../context/useLanguage";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const { lang, toggleLang, t, company } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#process", label: t.nav.process },
    { href: "#team", label: t.nav.team },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 py-3 sm:py-4">
        <div className="flex items-center gap-8 xl:gap-14">
          <a href="#top" className="flex items-center gap-2.5 shrink-0">
            <img src={logo} alt={company.name[lang]} className="w-11 h-11 sm:w-12 sm:h-12" />
            <span className="text-xl sm:text-2xl font-extrabold text-dark">
              {company.name[lang]}
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7 text-base font-semibold text-dark/75">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-primary transition">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-5">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-dark/70 text-base font-semibold hover:text-primary transition cursor-pointer"
          >
            <Globe size={18} />
            {lang === "ar" ? "EN" : "عربي"}
          </button>

          <a href="#contact" className="hidden sm:inline-flex btn btn-primary !rounded-full !py-2.5 !px-6">
            {t.nav.quote}
          </a>

          <a
            href={`tel:${company.phoneIntl}`}
            aria-label={company.phone}
            className="sm:hidden w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center"
          >
            <Phone size={18} />
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="menu"
            aria-expanded={open}
            className="lg:hidden text-dark cursor-pointer"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      <div
        className={`lg:hidden overflow-hidden border-t border-primary/10 bg-white transition-[max-height] duration-300 ${
          open ? "max-h-[28rem]" : "max-h-0 border-t-0"
        }`}
      >
        <div className="flex flex-col px-5 py-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3.5 text-base font-semibold text-dark/80 border-b border-gray-100 hover:text-primary transition"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="my-4 btn btn-primary !rounded-full"
          >
            {t.nav.quote}
          </a>
        </div>
      </div>
    </nav>
  );
}
