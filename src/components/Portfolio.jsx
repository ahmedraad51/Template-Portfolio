import { useState } from "react";
import { ExternalLink, Images } from "lucide-react";
import { useLanguage } from "../context/useLanguage";
import { webProjects } from "../data/projects";
import { designProjects } from "../data/designs";
import Lightbox from "./Lightbox";

/**
 * Uniform placeholder preview — a browser frame around a simple wireframe in the
 * project's brand colours. Every card gets the same layout so the grid stays
 * tidy; a real screenshot (`shot`) replaces it when one is added.
 */
function SitePreview({ project, lang }) {
  const { from, to } = project.brand;
  return (
    <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-white ring-1 ring-black/5 flex flex-col">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 border-b border-gray-200 shrink-0">
        <span className="flex gap-1.5 shrink-0">
          <i className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <i className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <i className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </span>
        <span
          dir="ltr"
          className="flex-1 min-w-0 truncate rounded-md bg-white px-2 py-0.5 text-[11px] text-gray-500 text-center"
        >
          {project.domain}
        </span>
      </div>

      {/* Page wireframe */}
      <div
        className="flex-1 flex flex-col gap-3 p-4"
        style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
      >
        <div className="flex items-center justify-between gap-3">
          <span className="text-[13px] font-bold text-white truncate">
            {project.title[lang]}
          </span>
          <span className="flex gap-1.5 shrink-0">
            <i className="h-1.5 w-6 rounded-full bg-white/55" />
            <i className="h-1.5 w-6 rounded-full bg-white/55" />
            <i className="h-1.5 w-4 rounded-full bg-white/55" />
          </span>
        </div>

        <div className="space-y-1.5">
          <span className="block h-2 w-1/2 rounded-full bg-white/70" />
          <span className="block h-2 w-1/3 rounded-full bg-white/45" />
        </div>

        <div className="mt-auto grid grid-cols-3 gap-2">
          <i className="block aspect-[4/3] rounded-md bg-white/30" />
          <i className="block aspect-[4/3] rounded-md bg-white/30" />
          <i className="block aspect-[4/3] rounded-md bg-white/30" />
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const { lang, t } = useLanguage();
  const [active, setActive] = useState("all");
  const [viewer, setViewer] = useState(null); // { items, index } of the open set

  const showWeb = active === "all" || active === "web";
  const showDesign = active === "all" || active === "design";

  return (
    <section id="portfolio" className="section bg-primary-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-10">
          <p className="eyebrow">{t.portfolio.label}</p>
          <h2 className="section-title mb-5">{t.portfolio.title}</h2>
          <p className="section-lead max-w-2xl mx-auto">{t.portfolio.desc}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {t.portfolio.filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`rounded-full px-6 py-2.5 text-base font-bold transition-all duration-200 cursor-pointer ${
                active === f.key
                  ? "bg-primary text-white"
                  : "text-body hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* ── Websites ─────────────────────────────────────────────── */}
        {showWeb && (
          <div className="mb-16">
            <div className="mb-8">
              <h3 className="card-title mb-1">{t.portfolio.webTitle}</h3>
              <p className="meta-text">{t.portfolio.webDesc}</p>
            </div>

            {webProjects.length === 0 && (
              <p className="meta-text">{t.portfolio.empty}</p>
            )}

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {webProjects.map((p) => {
                const concept = p.status === "concept";
                return (
                <article
                  key={p.id}
                  className="flex flex-col rounded-2xl bg-white p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/20"
                >
                  {p.shot ? (
                    <img
                      src={p.shot}
                      alt={p.title[lang]}
                      loading="lazy"
                      className="w-full aspect-[16/10] rounded-xl object-cover object-top ring-1 ring-black/5"
                    />
                  ) : (
                    <SitePreview project={p} lang={lang} />
                  )}

                  <div className="flex-1 flex flex-col pt-5 px-1">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[13px] font-bold ${
                          concept ? "bg-primary/10 text-primary" : "bg-green-100 text-green-700"
                        }`}
                      >
                        <i
                          className={`w-1.5 h-1.5 rounded-full ${
                            concept ? "bg-primary" : "bg-green-500"
                          }`}
                        />
                        {concept ? t.portfolio.concept : t.portfolio.live}
                      </span>
                      <span className="meta-text">{p.kind[lang]}</span>
                    </div>

                    <h4 className="card-title mb-2">{p.title[lang]}</h4>
                    <p className="meta-text mb-4">{p.desc[lang]}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.tags[lang].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary/8 px-3 py-1 text-[13px] font-semibold text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary mt-auto w-full !py-3"
                    >
                      <ExternalLink size={18} />
                      {t.portfolio.visit}
                    </a>
                  </div>
                </article>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Graphic design ───────────────────────────────────────── */}
        {showDesign && (
          <div>
            <div className="mb-8">
              <h3 className="card-title mb-1">{t.portfolio.designTitle}</h3>
              <p className="meta-text">{t.portfolio.designDesc}</p>
            </div>

            {designProjects.length === 0 && (
              <p className="meta-text">{t.portfolio.empty}</p>
            )}

            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {designProjects.map((set) => {
                const [cover, ...rest] = set.items;
                const count = set.items.length;
                return (
                  <button
                    key={set.id}
                    onClick={() => setViewer({ items: set.items, index: 0 })}
                    aria-label={`${t.portfolio.view}: ${set.title[lang]}`}
                    className="group flex flex-col rounded-2xl bg-white p-4 text-start cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/20"
                  >
                    {/* Collage: big cover + a stack of the next two */}
                    <div className="flex gap-2.5">
                      <div className="relative flex-[2] overflow-hidden rounded-xl">
                        <img
                          src={cover.thumb}
                          alt={cover.title[lang]}
                          loading="lazy"
                          className="w-full aspect-[4/5] object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      {rest.length > 0 && (
                      <div className="flex flex-1 flex-col gap-2.5">
                        {rest.slice(0, 2).map((it) => (
                          <div key={it.id} className="flex-1 overflow-hidden rounded-xl">
                            <img
                              src={it.thumb}
                              alt={it.title[lang]}
                              loading="lazy"
                              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                            />
                          </div>
                        ))}
                        {rest.length > 2 && (
                          <div className="flex-1 rounded-xl bg-primary/10 flex items-center justify-center">
                            <span className="text-lg font-extrabold text-primary">
                              +{rest.length - 2}
                            </span>
                          </div>
                        )}
                      </div>
                      )}
                    </div>

                    <div className="pt-5 px-1 flex-1 flex flex-col">
                      <span className="meta-text mb-1">{set.kind[lang]}</span>
                      <h4 className="card-title mb-2">{set.title[lang]}</h4>
                      <p className="meta-text mb-5">{set.desc[lang]}</p>

                      <div className="mt-auto flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-body">
                          <Images size={17} />
                          {count === 1
                            ? t.portfolio.designsOne
                            : `${count} ${t.portfolio.designsMany}`}
                        </span>
                        <span className="link-arrow !text-primary/80 group-hover:!text-primary">
                          {t.portfolio.view}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {viewer && (
        <Lightbox
          items={viewer.items}
          index={viewer.index}
          onChange={(index) => setViewer((v) => ({ ...v, index }))}
          onClose={() => setViewer(null)}
        />
      )}
    </section>
  );
}
