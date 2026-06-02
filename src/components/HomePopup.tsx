import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import rudraImg from "@/assets/popup/rudra.jpg";
import khwabImg from "@/assets/popup/khwab.jpg";

const slides = [
  { src: rudraImg, alt: "Rudra Gol - Team RSA Skater - SGFI National Roller Skating Championship 2025" },
  { src: khwabImg, alt: "Khwab - State Champion, National Medalist, 91% in 12th Boards" },
];

const STORAGE_KEY = "rsa_home_popup_closed";
const SLIDE_MS = 4500;
const SWIPE_THRESHOLD = 40;

export default function HomePopup() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;

    let isBackForward = false;
    try {
      const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
      if (nav && nav.type === "back_forward") isBackForward = true;
    } catch {
      // ignore
    }
    if (isBackForward) return;

    setOpen(true);

    // Warm the second image in the background so the first transition is instant
    const pre = new Image();
    pre.src = khwabImg;
  }, []);

  useEffect(() => {
    if (!open || paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, [open, paused]);

  const close = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start !== null) {
      const dx = e.changedTouches[0].clientX - start;
      if (Math.abs(dx) > SWIPE_THRESHOLD) {
        setIndex((i) => (dx < 0 ? (i + 1) % slides.length : (i - 1 + slides.length) % slides.length));
      }
    }
    // Resume after a short delay so the user can swipe again
    setTimeout(() => setPaused(false), 600);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 animate-fade-in"
      onClick={close}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-[min(95vw,640px)] max-h-[95vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          onClick={close}
          aria-label="Close popup"
          className="absolute -top-3 -right-3 z-10 bg-white text-black rounded-full p-2 shadow-lg hover:bg-primary hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-transparent">
          <img
            key={index}
            src={slides[index].src}
            alt={slides[index].alt}
            decoding="async"
            // @ts-expect-error fetchpriority is valid HTML
            fetchpriority="high"
            className="w-full h-auto max-h-[85vh] object-contain animate-fade-in"
          />
        </div>

        <div className="flex gap-2 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
