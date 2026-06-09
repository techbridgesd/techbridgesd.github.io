import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/research", label: "Research" },
  { to: "/process", label: "Process" },
  { to: "/results", label: "Results" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [location.pathname]);

  // Transparent (over the dark hero) only at the top of the home page.
  const transparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        transparent
          ? "bg-transparent"
          : "bg-background/90 backdrop-blur border-b border-border shadow-sm",
      )}
    >
      <nav className="container-wide flex items-center justify-between py-4">
        <Link to="/" aria-label="TechBridge SD home">
          <Logo
            textClassName={cn(
              transparent && "[&_*]:!text-white",
            )}
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium tracking-wide uppercase transition-colors",
                    transparent
                      ? "text-white/80 hover:text-white"
                      : "text-muted-foreground hover:text-primary",
                    isActive &&
                      (transparent
                        ? "!text-white"
                        : "!text-primary border-b-2 border-accent pb-0.5"),
                  )
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link to="/contact">
            <Button
              variant={transparent ? "navCta" : "accent"}
              size="lg"
              className="rounded-lg uppercase text-xs tracking-widest px-6"
            >
              Get Involved
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-md",
            transparent ? "text-white" : "text-primary",
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-b border-border shadow-lg animate-fade-in">
          <ul className="container-wide py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "block rounded-md px-3 py-3 text-base font-medium",
                      isActive
                        ? "bg-secondary text-primary"
                        : "text-muted-foreground hover:bg-secondary",
                    )
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link to="/contact">
                <Button variant="accent" size="lg" className="w-full uppercase tracking-widest text-xs">
                  Get Involved
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
