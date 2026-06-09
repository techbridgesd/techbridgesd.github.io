import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Lazy-load the Spline 3D scene so it never blocks first paint.
const Spline = lazy(() => import("@splinetool/react-spline"));

const SPLINE_SCENE = "https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode";

export default function Home() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative min-h-screen flex items-end bg-hero-bg overflow-hidden">
        {/* Spline 3D background.
            The hosted scene's accents are green; `hue-rotate` shifts the whole
            scene toward teal/cyan so it matches the TechBridge brand. Adjust the
            degrees to taste (≈70deg = teal, ≈110deg = blue). */}
        <div
          className="absolute inset-0"
          style={{ filter: "hue-rotate(72deg) saturate(1.05)" }}
        >
          <Suspense fallback={<div className="absolute inset-0 bg-hero-bg" />}>
            <Spline scene={SPLINE_SCENE} className="w-full h-full" />
          </Suspense>
        </div>

        {/* Readability overlays: a flat dark wash + a bottom-left gradient so
            the text stays legible over any part of the 3D scene. */}
        <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none" />
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "radial-gradient(120% 80% at 0% 100%, rgba(11,28,43,0.9) 0%, rgba(11,28,43,0.35) 45%, transparent 70%)",
          }}
        />

        {/* Content (anchored bottom-left) */}
        <div className="relative z-10 pointer-events-none w-full max-w-[90%] sm:max-w-lg lg:max-w-3xl px-6 md:px-12 pb-12 md:pb-16 pt-32">
          <p
            className="inline-flex items-center gap-2 text-accent text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4 animate-fade-up opacity-0"
            style={{ animationDelay: "0.15s" }}
          >
            <Sparkles size={16} /> AI literacy &amp; cyber safety for seniors
          </p>

          <h1
            className="text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.04em] !text-white mb-3 md:mb-5 animate-fade-up opacity-0"
            style={{ animationDelay: "0.25s" }}
          >
            Tech<span className="text-accent">Bridge</span>{" "}
            <span className="text-gold">SD</span>
          </h1>

          <p
            className="text-white/85 text-[clamp(1.125rem,2.5vw,1.875rem)] font-light mb-4 md:mb-6 animate-fade-up opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            Helping older adults understand AI and stay safe online — for free,
            right in their own community.
          </p>

          <p
            className="text-white/65 text-[clamp(0.95rem,1.5vw,1.2rem)] font-light max-w-2xl mb-6 md:mb-9 animate-fade-up opacity-0"
            style={{ animationDelay: "0.55s" }}
          >
            We visit senior centers across San Diego to teach what AI really is,
            how to spot scams and deepfakes, and how to use everyday technology
            with confidence.
          </p>

          <div
            className="flex flex-wrap gap-3 animate-fade-up opacity-0"
            style={{ animationDelay: "0.7s" }}
          >
            <Link to="/contact" className="pointer-events-auto">
              <Button variant="hero" size="xl" className="rounded-md font-semibold">
                Get Involved <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/about" className="pointer-events-auto">
              <Button
                variant="heroOutline"
                size="xl"
                className="rounded-md font-semibold"
              >
                Learn More
              </Button>
            </Link>
          </div>

          <p
            className="text-white/45 text-xs sm:text-sm font-light mt-5 md:mt-7 animate-fade-up opacity-0"
            style={{ animationDelay: "0.85s" }}
          >
            A student-led community project · San Diego, California
          </p>
        </div>
      </section>

      {/* ===================== MISSION ===================== */}
      <section className="container-tight py-20 text-center">
        <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
          Our mission
        </p>
        <h2 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto leading-snug">
          We bridge the gap between seniors and modern technology — so no one
          gets left behind, or taken advantage of.
        </h2>
      </section>

      {/* ===================== OVERVIEW ===================== */}
      <section className="bg-secondary/50 py-20">
        <div className="container-wide grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-5">
              What is TechBridge SD?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                TechBridge SD is a student-led community project that brings free
                AI literacy and cybersecurity workshops directly to senior
                centers across San Diego. Many older adults are using
                smartphones, banking apps, and social media every day, yet were
                never taught how the technology behind them works — or how
                scammers exploit it.
              </p>
              <p>
                Our volunteers run friendly, jargon-free sessions that explain
                what artificial intelligence actually is, how it shows up in
                daily life, and both its benefits and its risks. We then teach
                practical online-safety skills: recognizing phishing messages and
                AI deepfakes, building strong passwords, and knowing what to do if
                something feels wrong. Our goal is simple — to help seniors use
                technology with confidence and peace of mind.
              </p>
            </div>
            <Link to="/about">
              <Button variant="ghost" className="mt-6 px-0 hover:bg-transparent hover:text-accent">
                Read our full story <ArrowRight size={18} />
              </Button>
            </Link>
          </div>

          <div className="grid gap-5">
            {[
              {
                icon: Brain,
                title: "AI Literacy",
                body: "What AI is, how it works in plain language, and where it helps or misleads.",
              },
              {
                icon: ShieldCheck,
                title: "Cyber Safety",
                body: "Spotting scams, phishing, and deepfakes — and protecting accounts and money.",
              },
              {
                icon: HeartHandshake,
                title: "Hands-On Help",
                body: "Patient, one-on-one guidance with real devices and real questions.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="flex gap-4 rounded-xl bg-card border border-border p-5 shadow-sm"
              >
                <div className="shrink-0 grid place-items-center h-12 w-12 rounded-lg bg-accent/10 text-accent">
                  <c.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== QUICK STATS (placeholder) ===================== */}
      <section className="container-wide py-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">By the numbers</h2>
          <p className="text-muted-foreground mt-2">
            We&apos;re just getting started — these will fill in as our program
            grows.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { stat: "—", label: "Workshops held" },
            { stat: "—", label: "Seniors reached" },
            { stat: "—", label: "Senior centers partnered" },
            { stat: "—", label: "Volunteer hours" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-dashed border-border bg-card p-8 text-center"
            >
              <div className="text-4xl font-bold text-accent">{s.stat}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground italic mt-6">
          Placeholder — replace the dashes with real figures once your first
          workshops are complete.
        </p>
      </section>

      {/* ===================== CTA BAND ===================== */}
      <section className="bg-primary text-white">
        <div className="container-wide py-16 text-center">
          <h2 className="!text-white text-3xl md:text-4xl font-bold mb-4">
            Want to host us, volunteer, or learn more?
          </h2>
          <p className="text-white/75 max-w-2xl mx-auto mb-8">
            Whether you run a senior center, know someone who could benefit, or
            want to join our team — we&apos;d love to hear from you.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="xl" className="rounded-md font-semibold">
              Get Involved <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
