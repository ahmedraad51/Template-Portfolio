import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/useLanguage";

/** Full-screen viewer for the design gallery. Arrow keys and Esc work. */
export default function Lightbox({ items, index, onChange, onClose }) {
  const { lang, t } = useLanguage();
  const item = items[index];
  const rtl = lang === "ar";
  const PrevIcon = rtl ? ChevronRight : ChevronLeft;
  const NextIcon = rtl ? ChevronLeft : ChevronRight;

  const step = useCallback(
    (dir) => onChange((index + dir + items.length) % items.length),
    [index, items.length, onChange]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(rtl ? -1 : 1);
      if (e.key === "ArrowLeft") step(rtl ? 1 : -1);
    };
    window.addEventListener("keydown", onKey);
    // Stop the page behind the overlay from scrolling
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [step, onClose, rtl]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-dark/95 p-4 sm:p-6"
    >
      <button
        onClick={onClose}
        aria-label={t.portfolio.close}
        className="absolute top-4 end-4 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition cursor-pointer"
      >
        <X size={22} />
      </button>

      <img
        src={item.img}
        alt={item.title[lang]}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain"
      />

      <div className="mt-5 text-center" onClick={(e) => e.stopPropagation()}>
        <p className="text-[15px] font-semibold text-white/60">{item.client[lang]}</p>
        <p className="text-lg font-bold text-white">{item.title[lang]}</p>
        <p className="mt-2 text-sm text-white/50">
          {index + 1} / {items.length}
        </p>
      </div>

      <div
        className="mt-5 flex items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => step(-1)}
          aria-label={t.portfolio.prev}
          className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition cursor-pointer"
        >
          <PrevIcon size={24} />
        </button>
        <button
          onClick={() => step(1)}
          aria-label={t.portfolio.next}
          className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition cursor-pointer"
        >
          <NextIcon size={24} />
        </button>
      </div>
    </div>
  );
}
