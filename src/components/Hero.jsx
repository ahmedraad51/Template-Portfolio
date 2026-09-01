import { Phone } from "lucide-react";
import { useLanguage } from "../context/useLanguage";

export default function Hero() {
  const { t, company } = useLanguage();

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-primary-soft to-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="text-center md:text-start">
          <h1 className="display-title mb-4">{t.hero.title}</h1>
          <p className="section-lead font-bold !text-dark mb-3 max-w-[520px] mx-auto md:mx-0">
            {t.hero.lead}
          </p>
          <p className="body-text mb-9 max-w-[520px] mx-auto md:mx-0">{t.hero.desc}</p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-4">
            <a href="#portfolio" className="btn btn-primary">
              {t.hero.button}
            </a>
            <a href={`tel:${company.phoneIntl}`} className="btn btn-outline">
              <Phone size={19} />
              <bdi>{company.phone}</bdi>
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-primary/15 blur-3xl rounded-full" aria-hidden="true" />
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
            alt="hero"
            className="relative rounded-2xl w-full h-64 sm:h-80 lg:h-[440px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
