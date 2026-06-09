import { ImageIcon, AlertCircle, Wrench } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

const timeline = [
  {
    phase: "Phase 1 — Planning",
    period: "Discovery & research",
    points: [
      "Identified the problem: seniors face rising AI-powered scams with little support.",
      "Gathered statistics from the FBI IC3, FTC, Pew Research, and NCOA.",
      "Defined our audience, mission, and the two core topics: AI literacy and cyber safety.",
      "Reached out to local senior centers to gauge interest.",
    ],
  },
  {
    phase: "Phase 2 — Design",
    period: "Building the workshop",
    points: [
      "Wrote a jargon-free curriculum split into 'What is AI?' and 'Staying safe online'.",
      "Designed large-print slides and a take-home one-page safety checklist.",
      "Created this website to share our mission, research, and resources.",
      "Chose a clear, high-contrast visual style suited to older readers.",
    ],
  },
  {
    phase: "Phase 3 — Testing",
    period: "Practice & feedback",
    points: [
      "Ran practice sessions with family members and older volunteers.",
      "Collected feedback on pacing, vocabulary, and font sizes.",
      "Simplified examples and added more hands-on, real-device practice.",
      "Tested the website on phones, tablets, and computers for readability.",
    ],
  },
  {
    phase: "Phase 4 — Launch",
    period: "Into the community",
    points: [
      "Scheduling our first workshops at partner senior centers.",
      "Preparing volunteers to lead small-group sessions.",
      "Setting up simple surveys to measure confidence before and after.",
    ],
  },
];

const challenges = [
  {
    challenge:
      "Explaining AI without overwhelming people who are new to technology.",
    solution:
      "We replaced technical terms with everyday comparisons and real examples seniors already recognize, like autocomplete and photo filters.",
  },
  {
    challenge: "Keeping attention and confidence high during sessions.",
    solution:
      "We switched from lecture-style slides to short topics with hands-on practice on attendees' own phones, and added a printed checklist to take home.",
  },
  {
    challenge: "Making the website easy to read for older eyes.",
    solution:
      "We used larger fonts, high-contrast navy-on-white colors, generous spacing, and clear buttons — then tested it on real devices.",
  },
  {
    challenge: "Earning trust so seniors feel safe asking 'basic' questions.",
    solution:
      "We kept groups small, led with patience, and reassured attendees that no question is too simple — building a judgment-free space.",
  },
];

export default function Process() {
  return (
    <>
      <PageHeader
        eyebrow="Project process"
        title="How we built TechBridge SD"
        subtitle="From a rough idea to a community workshop and website — here is the work behind the project, the challenges we hit, and how we solved them."
      />

      {/* Timeline */}
      <section className="container-tight py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Timeline of development
        </h2>
        <ol className="relative border-l-2 border-border ml-3 space-y-10">
          {timeline.map((t, i) => (
            <li key={t.phase} className="relative pl-8">
              <span className="absolute -left-[11px] top-1 grid place-items-center h-5 w-5 rounded-full bg-accent ring-4 ring-background text-[11px] font-bold text-white">
                {i + 1}
              </span>
              <h3 className="text-xl font-bold">{t.phase}</h3>
              <p className="text-sm text-accent font-medium mb-3">{t.period}</p>
              <ul className="space-y-2 text-muted-foreground">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* Photo / diagram placeholders */}
      <section className="bg-secondary/50 py-16">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Photos &amp; diagrams
          </h2>
          <p className="text-muted-foreground mb-8">
            Add your own workshop photos, planning diagrams, or website
            screenshots here.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Workshop photo",
              "Planning diagram",
              "Website screenshot",
            ].map((label) => (
              <figure
                key={label}
                className="rounded-xl border-2 border-dashed border-border bg-card aspect-[4/3] grid place-items-center text-center p-6"
              >
                <div>
                  <ImageIcon className="mx-auto text-muted-foreground" size={40} />
                  <figcaption className="mt-3 text-sm font-medium text-muted-foreground">
                    {label}
                  </figcaption>
                  <p className="text-xs text-muted-foreground/70 mt-1">
                    Replace with a labeled image (include alt text).
                  </p>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & solutions */}
      <section className="container-wide py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Challenges &amp; solutions
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {challenges.map((c) => (
            <div
              key={c.challenge}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex gap-3 mb-4">
                <AlertCircle className="shrink-0 text-destructive mt-0.5" size={22} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-destructive mb-1">
                    Challenge
                  </p>
                  <p className="text-foreground font-medium">{c.challenge}</p>
                </div>
              </div>
              <div className="flex gap-3 border-t border-border pt-4">
                <Wrench className="shrink-0 text-accent mt-0.5" size={22} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">
                    Solution
                  </p>
                  <p className="text-muted-foreground">{c.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
