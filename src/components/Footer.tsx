import { Link } from "react-router-dom";
import { Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Logo } from "@/components/Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/research", label: "Research" },
  { to: "/process", label: "Process" },
  { to: "/results", label: "Results" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-white">
      <div className="container-wide py-14 grid gap-10 md:grid-cols-3">
        <div>
          <Logo textClassName="[&_*]:!text-white" />
          <p className="mt-4 max-w-xs text-sm text-white/70 leading-relaxed">
            Free AI literacy and cyber-safety workshops for older adults at
            senior centers across San Diego.
          </p>
        </div>

        <div>
          <h4 className="!text-white text-sm font-semibold uppercase tracking-widest mb-4">
            Explore
          </h4>
          <ul className="space-y-2">
            {nav.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="!text-white text-sm font-semibold uppercase tracking-widest mb-4">
            Get in touch
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-accent" />
              <a
                href="mailto:techbridgesd@gmail.com"
                className="hover:text-white transition-colors"
              >
                techbridgesd@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-accent" />
              San Diego, California
            </li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="TechBridge SD on Facebook" className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="TechBridge SD on Instagram" className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="TechBridge SD on LinkedIn" className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} TechBridge SD. All rights reserved.</p>
          <p>Built by students, for our community.</p>
        </div>
      </div>
    </footer>
  );
}
