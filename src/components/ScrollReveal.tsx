import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Watches every element with the `reveal` class and adds `is-visible` when it
 * scrolls into view, triggering the fade-up animation defined in index.css.
 * Re-scans on every route change. Falls back to showing everything if the
 * browser lacks IntersectionObserver or the user prefers reduced motion.
 */
export function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)"),
    );
    if (els.length === 0) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
