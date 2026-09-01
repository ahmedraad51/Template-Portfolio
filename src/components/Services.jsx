import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/useLanguage";

export default function Services() {
  const { lang, t } = useLanguage();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  const images = [
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600",
    "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=600",
  ];

  return (
    <section id="services" className="section bg-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* `on-dark` stays on the header only — the cards below are on white */}
        <div className="on-dark mb-12 text-center md:text-start max-w-2xl md:mx-0 mx-auto">
          <p className="eyebrow eyebrow-light">{t.services.label}</p>
          <h2 className="section-title">{t.services.title}</h2>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl overflow-hidden flex flex-col transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
            >
              <img
                src={images[i]}
                alt={s.title}
                loading="lazy"
                className="w-full h-56 sm:h-64 lg:h-[300px] object-cover"
              />
              <div className="p-7 flex flex-col flex-1">
                <h3 className="card-title !text-primary mb-3">{s.title}</h3>
                <p className="body-text mb-6">{s.desc}</p>
                <hr className="border-gray-100 mb-5 mt-auto" />
                <a href="#contact" className="link-arrow">
                  {t.services.viewDetails}
                  <Arrow size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
