import { useLanguage } from "../context/useLanguage";
import { teamMembers } from "../data/team";

/** Initials tile shown until a member has a real portrait in `src/data/team.js`. */
function Portrait({ member, lang }) {
  if (member.img) {
    return (
      <img
        src={member.img}
        alt={member.name}
        className="w-full h-80 object-cover object-[center_20%]"
      />
    );
  }

  const initials = member.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <div
      aria-label={member.name}
      className="w-full h-80 bg-primary-soft flex items-center justify-center"
    >
      <span className="text-6xl font-extrabold text-primary/40" dir="ltr">
        {initials || member.role[lang][0]}
      </span>
    </div>
  );
}

export default function Team() {
  const { lang, t } = useLanguage();

  if (teamMembers.length === 0) return null;

  return (
    <section id="team" className="section bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <p className="eyebrow">{t.team.label}</p>
          <h2 className="section-title mb-5">{t.team.title}</h2>
          <p className="section-lead max-w-2xl mx-auto">{t.team.desc}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-7">
          {teamMembers.map((m) => (
            <div
              key={m.name}
              className="relative rounded-2xl overflow-hidden w-full max-w-[300px] sm:w-[280px] ring-1 ring-primary/10"
            >
              <Portrait member={m} lang={lang} />
              <div className="absolute bottom-3 left-3 right-3 bg-white rounded-xl px-5 py-4">
                <h3 className="text-lg font-bold text-dark leading-snug">{m.name}</h3>
                <p className="text-primary text-[15px] font-semibold">{m.role[lang]}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="btn btn-primary">
            {t.team.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
