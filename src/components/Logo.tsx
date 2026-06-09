import { cn } from "@/lib/utils";

/**
 * TechBridge SD logo, recreated as inline SVG so it renders crisply at any size
 * and works without an external file. A suspension bridge (navy) with a gold
 * sunrise arc, circuit traces, and a teal wave — matching the brand mark.
 *
 * To use the exact PNG instead, drop your file at /public/logo.png and swap the
 * <svg> for <img src="/logo.png" alt="TechBridge SD logo" />.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 80"
      className={className}
      role="img"
      aria-label="TechBridge SD bridge logo"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* gold sunrise arc */}
      <path
        d="M40 30 A24 24 0 0 1 80 30"
        stroke="hsl(36 89% 59%)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* towers */}
      <path
        d="M44 60 V20 M76 60 V20"
        stroke="hsl(207 61% 22%)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* tower tops */}
      <path
        d="M40 22 h8 M72 22 h8"
        stroke="hsl(207 61% 22%)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* suspension cables */}
      <path
        d="M44 22 C54 40 66 40 76 22"
        stroke="hsl(207 61% 22%)"
        strokeWidth="2.5"
      />
      {/* deck */}
      <path
        d="M20 48 H100"
        stroke="hsl(207 61% 22%)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* vertical hangers */}
      <path
        d="M52 33 V48 M60 30 V48 M68 33 V48"
        stroke="hsl(207 61% 22%)"
        strokeWidth="1.5"
      />
      {/* circuit traces left */}
      <path
        d="M20 38 h-8 M12 38 v6 M12 44 h-5"
        stroke="hsl(189 78% 39%)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="6" cy="44" r="2" fill="hsl(189 78% 39%)" />
      {/* circuit traces right */}
      <path
        d="M100 38 h8 M108 38 v6 M108 44 h5"
        stroke="hsl(189 78% 39%)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="114" cy="44" r="2" fill="hsl(189 78% 39%)" />
      {/* teal wave */}
      <path
        d="M22 64 C34 56 40 70 52 64 C64 58 70 70 82 64"
        stroke="hsl(189 78% 39%)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  textClassName,
  showText = true,
}: {
  className?: string;
  textClassName?: string;
  showText?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-9 w-auto shrink-0" />
      {showText && (
        <span
          className={cn(
            "font-bold tracking-tight text-lg leading-none",
            textClassName,
          )}
        >
          <span className="text-primary">Tech</span>
          <span className="text-accent">Bridge</span>{" "}
          <span className="text-muted-foreground">SD</span>
        </span>
      )}
    </span>
  );
}
