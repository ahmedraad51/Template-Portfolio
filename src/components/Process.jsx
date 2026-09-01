import { MessagesSquare, PenTool, Code2, Rocket } from "lucide-react";
import { useLanguage } from "../context/useLanguage";

const icons = [MessagesSquare, PenTool, Code2, Rocket];

export default function Process() {
  const { t } = useLanguage();

  return (
    <section
      id="process"
      className="relative on-dark bg-dark pt-[clamp(4.5rem,3rem+5vw,7.5rem)] pb-[230px] sm:pb-[260px]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow eyebrow-light">{t.process.label}</p>
          <h2 className="section-title mb-5">{t.process.title}</h2>
          <p className="section-lead">{t.process.desc}</p>
        </div>

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((s, i) => {
            const Icon = icons[i];
            return (
              <li
                key={s.title}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:border-primary-light/50 hover:bg-white/[0.08]"
              >
                <span className="absolute top-5 end-6 text-5xl font-extrabold text-white/10 leading-none">
                  {i + 1}
                </span>
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white">
                  <Icon size={24} />
                </span>
                <h3 className="card-title mb-2">{s.title}</h3>
                <p className="meta-text">{s.desc}</p>
              </li>
            );
          })}
        </ol>

        <div className="mt-12 text-center">
          <a href="#contact" className="btn btn-primary">
            {t.process.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
