import { useState } from "react";
import { Phone } from "lucide-react";
import { useLanguage } from "../context/useLanguage";

export default function StartProject() {
  const { t, company } = useLanguage();
  const [idea, setIdea] = useState("");

  const openWhatsApp = (e) => {
    e.preventDefault();
    const text = idea.trim() || t.cta.title;
    window.open(`${company.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  return (
    <section id="start" className="relative z-10 -mt-[160px] sm:-mt-[90px]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="on-dark bg-primary rounded-2xl px-6 sm:px-12 py-12 sm:py-14 text-center">
          <h2 className="section-title mb-4">{t.cta.title}</h2>
          <p className="section-lead !text-white/80 mb-9 max-w-xl mx-auto">{t.cta.desc}</p>

          <form
            onSubmit={openWhatsApp}
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          >
            <input
              type="text"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder={t.cta.placeholder}
              className="h-14 flex-1 min-w-0 rounded-xl bg-white px-5 text-base text-dark placeholder:text-body/60 outline-none ring-2 ring-transparent focus:ring-white/50 transition"
            />
            <button
              type="submit"
              className="h-14 shrink-0 rounded-xl bg-dark px-7 text-base font-bold text-white hover:bg-darker transition cursor-pointer"
            >
              {t.cta.button}
            </button>
          </form>

          <a
            href={`tel:${company.phoneIntl}`}
            className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-white/85 hover:text-white transition"
          >
            <Phone size={18} />
            {t.cta.call}
            <bdi className="font-bold">{company.phone}</bdi>
          </a>
        </div>
      </div>
    </section>
  );
}
