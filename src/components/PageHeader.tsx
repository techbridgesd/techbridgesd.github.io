import { cn } from "@/lib/utils";

/** Reusable hero band for interior pages. Dark navy with a subtle grid. */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative bg-hero-bg text-white pt-32 pb-16 overflow-hidden",
        className,
      )}
    >
      {/* decorative gradient + grid */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
      <div className="container-wide relative">
        {eyebrow && (
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-3 animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
            {eyebrow}
          </p>
        )}
        <h1 className="!text-white text-4xl md:text-5xl font-bold max-w-3xl animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-white/75 font-light animate-fade-up opacity-0" style={{ animationDelay: "0.35s" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
