import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, TrendingUp, ClipboardList } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { BarChart } from "@/components/Charts";
import { Button } from "@/components/ui/button";

const lessons = [
  "Plain language beats technical accuracy — relatable examples land best.",
  "Hands-on practice on a person's own device builds far more confidence than slides.",
  "Small groups create the trust needed for people to ask real questions.",
  "Large fonts, high contrast, and slower pacing make a huge difference.",
  "Take-home materials extend the impact long after the session ends.",
];

const improvements = [
  "Add short follow-up sessions to reinforce skills over time.",
  "Translate materials into Spanish and other common local languages.",
  "Record simple how-to videos seniors can revisit at home.",
  "Build a standard before/after survey to track confidence consistently.",
  "Recruit and train more volunteers to meet demand.",
];

export default function Results() {
  return (
    <>
      <PageHeader
        eyebrow="Results & impact"
        title="Measuring the difference we make"
        subtitle="Our program is in its early stages, so this page is built to grow. Below is the framework we'll use to track outcomes — with sample structures ready for real data."
      />

      {/* Results obtained */}
      <section className="container-wide py-16">
        <div className="flex items-center gap-3 mb-3">
          <span className="grid place-items-center h-11 w-11 rounded-lg bg-accent/10 text-accent">
            <GraduationCap size={22} />
          </span>
          <h2 className="text-2xl md:text-3xl font-bold">Results so far</h2>
        </div>
        <p className="text-muted-foreground max-w-2xl mb-8">
          These cards will display our real outcomes once workshops are
          underway. Replace each dash with your numbers as you collect them.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { stat: "—", label: "Seniors who completed a workshop" },
            { stat: "—", label: "Average confidence increase" },
            { stat: "—", label: "Take-home guides distributed" },
            { stat: "—", label: "Would recommend to a friend" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-dashed border-border bg-card p-7 text-center"
            >
              <div className="text-4xl font-bold text-accent">{s.stat}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Before / after */}
      <section className="bg-secondary/50 py-16">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-3">
            <span className="grid place-items-center h-11 w-11 rounded-lg bg-primary/10 text-primary">
              <TrendingUp size={22} />
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">
              Before &amp; after (sample)
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mb-8">
            We plan to ask attendees a few simple questions before and after each
            session. The chart below shows the <em>format</em> using sample
            numbers — swap in your survey results.
          </p>
          <div className="rounded-2xl bg-card border border-border p-7 shadow-sm max-w-3xl">
            <BarChart
              unit="%"
              max={100}
              data={[
                { label: "Can explain what AI is (before)", value: 20 },
                { label: "Can explain what AI is (after)", value: 80 },
                { label: "Confident spotting a scam (before)", value: 30 },
                { label: "Confident spotting a scam (after)", value: 85 },
              ]}
              caption="Sample data shown for illustration only — not yet collected."
            />
          </div>
        </div>
      </section>

      {/* Data collected */}
      <section className="container-tight py-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="grid place-items-center h-11 w-11 rounded-lg bg-accent/10 text-accent">
            <ClipboardList size={22} />
          </span>
          <h2 className="text-2xl md:text-3xl font-bold">What we&apos;ll measure</h2>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 text-muted-foreground">
          {[
            "Number of attendees per workshop",
            "Self-rated confidence before vs. after",
            "Ability to identify a sample scam message",
            "Whether attendees would recommend the session",
            "Most useful topic, in attendees' own words",
            "Requests for follow-up help",
          ].map((m) => (
            <li
              key={m}
              className="rounded-lg bg-card border border-border px-4 py-3 text-foreground"
            >
              {m}
            </li>
          ))}
        </ul>
      </section>

      {/* Lessons learned */}
      <section className="bg-secondary/50 py-16">
        <div className="container-wide grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Lessons learned</h2>
            <ul className="space-y-3">
              {lessons.map((l) => (
                <li key={l} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span className="text-foreground">{l}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Future improvements
            </h2>
            <ul className="space-y-3">
              {improvements.map((l) => (
                <li key={l} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  <span className="text-foreground">{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-wide py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Help us turn these placeholders into real impact
        </h2>
        <Link to="/contact">
          <Button variant="accent" size="xl" className="rounded-md font-semibold">
            Get involved <ArrowRight size={18} />
          </Button>
        </Link>
      </section>
    </>
  );
}
