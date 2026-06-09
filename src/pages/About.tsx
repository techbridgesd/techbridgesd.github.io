import { Link } from "react-router-dom";
import {
  AlertTriangle,
  HeartHandshake,
  Target,
  Lightbulb,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

const goals = [
  "Teach the basics of AI in clear, everyday language — no jargon.",
  "Help seniors recognize and avoid online scams, phishing, and deepfakes.",
  "Build lasting confidence with smartphones, banking apps, and the web.",
  "Create free, reusable materials seniors can keep and share.",
  "Partner with senior centers to reach people where they already gather.",
];

const future = [
  "Expand to more senior centers and libraries across San Diego County.",
  "Train a larger volunteer team so we can run sessions more often.",
  "Add take-home guides and short videos in multiple languages.",
  "Measure impact with before-and-after confidence surveys.",
  "Build a simple help line or email for follow-up questions.",
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About the project"
        title="Bridging seniors and technology, one conversation at a time"
        subtitle="TechBridge SD started with a simple observation: the people most targeted by online scams are often the ones given the least support to understand the technology behind them."
      />

      {/* Problem */}
      <section className="container-tight py-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="grid place-items-center h-11 w-11 rounded-lg bg-destructive/10 text-destructive">
            <AlertTriangle size={22} />
          </span>
          <h2 className="text-2xl md:text-3xl font-bold">The problem we address</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Technology is changing faster than ever, and artificial intelligence
            is now woven into the apps, calls, and messages seniors use every
            day. But most older adults never had the chance to learn how these
            tools work. That gap leaves them vulnerable: scammers increasingly
            use AI to write convincing phishing emails, clone voices, and create
            fake images and videos.
          </p>
          <p>
            Older adults lose billions of dollars to online fraud each year, and
            individual losses tend to be far higher than for younger victims.
            Many cases go unreported out of embarrassment. The result is real
            financial harm — and a growing fear of the very technology that could
            help people stay connected and independent.
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-secondary/50 py-16">
        <div className="container-tight">
          <div className="flex items-center gap-3 mb-4">
            <span className="grid place-items-center h-11 w-11 rounded-lg bg-accent/10 text-accent">
              <HeartHandshake size={22} />
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">Why it matters</h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              When seniors understand technology, everything changes. They can
              video-call family, manage their health and finances online, and
              enjoy the benefits of AI — without falling for the tricks that
              prey on uncertainty. Knowledge turns fear into confidence.
            </p>
            <p>
              Protecting seniors online isn&apos;t only about money. It&apos;s
              about dignity, independence, and staying connected to the people
              and services they rely on. A single afternoon workshop can prevent
              a devastating scam and open the door to a more connected life.
            </p>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="container-tight py-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="grid place-items-center h-11 w-11 rounded-lg bg-primary/10 text-primary">
            <Target size={22} />
          </span>
          <h2 className="text-2xl md:text-3xl font-bold">Our goals</h2>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {goals.map((g) => (
            <li
              key={g}
              className="flex gap-3 rounded-xl bg-card border border-border p-4"
            >
              <CheckCircle2 className="shrink-0 text-accent mt-0.5" size={20} />
              <span className="text-foreground">{g}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* How the idea developed */}
      <section className="bg-secondary/50 py-16">
        <div className="container-tight">
          <div className="flex items-center gap-3 mb-4">
            <span className="grid place-items-center h-11 w-11 rounded-lg bg-gold/20 text-gold-foreground">
              <Lightbulb size={22} />
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">How the idea developed</h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The idea for TechBridge SD grew out of personal experience. Several
              of our members watched their own grandparents struggle with
              suspicious texts, confusing pop-ups, and phone calls that turned
              out to be scams. We realized that the advice older adults were
              getting — &quot;just be careful&quot; — wasn&apos;t enough.
            </p>
            <p>
              As AI tools became mainstream, the stakes rose sharply. We decided
              to combine two topics that are usually taught separately: what AI
              is and how to stay safe online. We sketched a workshop, tested it
              with family members, gathered feedback, and refined the materials
              until they were clear enough for someone using a smartphone for the
              very first time. From there, TechBridge SD was born.
            </p>
          </div>
        </div>
      </section>

      {/* Future plans */}
      <section className="container-tight py-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="grid place-items-center h-11 w-11 rounded-lg bg-accent/10 text-accent">
            <Rocket size={22} />
          </span>
          <h2 className="text-2xl md:text-3xl font-bold">Future plans</h2>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {future.map((f) => (
            <li
              key={f}
              className="flex gap-3 rounded-xl bg-card border border-border p-4"
            >
              <CheckCircle2 className="shrink-0 text-accent mt-0.5" size={20} />
              <span className="text-foreground">{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-2xl bg-primary text-white p-8 md:p-10 text-center">
          <h3 className="!text-white text-2xl font-bold mb-3">
            Be part of the bridge
          </h3>
          <p className="text-white/75 max-w-xl mx-auto mb-6">
            We&apos;re always looking for senior centers to partner with and
            volunteers to join our team.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="rounded-md font-semibold">
              Get in touch
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
