import { ExternalLink, Quote } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { BarChart, DonutStat } from "@/components/Charts";

const sources = [
  {
    label:
      "FBI Internet Crime Complaint Center (IC3) — 2023 Elder Fraud Report",
    note: "Losses and complaint counts for victims aged 60+.",
    url: "https://www.ic3.gov/AnnualReport/Reports/2023_IC3ElderFraudReport.pdf",
  },
  {
    label: "Pew Research Center — Tech adoption among older adults",
    note: "Smartphone and internet use among Americans 65+.",
    url: "https://www.pewresearch.org/internet/fact-sheet/internet-broadband/",
  },
  {
    label: "Federal Trade Commission (FTC) — Protecting Older Consumers Report",
    note: "Fraud reports and losses by age group.",
    url: "https://www.ftc.gov/reports/protecting-older-consumers-report-congress",
  },
  {
    label: "National Council on Aging (NCOA) — Top scams targeting older adults",
    note: "Common scam types and prevention guidance.",
    url: "https://www.ncoa.org/article/top-5-financial-scams-targeting-older-adults",
  },
  {
    label: "AARP — Artificial intelligence and fraud",
    note: "How scammers use AI voice cloning and deepfakes.",
    url: "https://www.aarp.org/money/scams-fraud/",
  },
];

export default function Research() {
  return (
    <>
      <PageHeader
        eyebrow="Research & information"
        title="The evidence behind our work"
        subtitle="Our workshops are shaped by data from federal agencies and respected research organizations. Here is what the numbers tell us — and why it drives everything we teach."
      />

      {/* Key facts */}
      <section className="reveal container-wide py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Key facts at a glance</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              big: "$3.4B",
              label:
                "Reported losses to fraud by adults 60+ in 2023 (FBI IC3).",
            },
            {
              big: "$33,915",
              label: "Average reported loss per older victim in 2023 (FBI IC3).",
            },
            {
              big: "101,000+",
              label: "Fraud complaints filed by people 60+ in 2023 (FBI IC3).",
            },
            {
              big: "61%",
              label: "Of Americans 65+ own a smartphone (Pew Research Center).",
            },
          ].map((f) => (
            <div
              key={f.label}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="text-3xl font-bold text-accent">{f.big}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Charts */}
      <section className="bg-secondary/50 py-16">
        <div className="reveal container-wide grid gap-12 lg:grid-cols-2 items-center">
          <div className="rounded-2xl bg-card border border-border p-7 shadow-sm">
            <h3 className="text-xl font-bold mb-1">
              Fraud losses among adults 60+ are rising fast
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Total reported losses, in billions of U.S. dollars.
            </p>
            <BarChart
              unit="B"
              data={[
                { label: "2021", value: 1.7, display: "$1.7" },
                { label: "2022", value: 3.1, display: "$3.1" },
                { label: "2023", value: 3.4, display: "$3.4" },
              ]}
              caption="Source: FBI IC3 Elder Fraud Reports, 2021–2023. Figures rounded."
            />
          </div>

          <div className="rounded-2xl bg-card border border-border p-7 shadow-sm">
            <h3 className="text-xl font-bold mb-6">
              Seniors are online — and need support
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <DonutStat
                percent={61}
                label="Own a smartphone"
                caption="Pew Research Center"
              />
              <DonutStat
                percent={75}
                label="Use the internet"
                caption="Pew Research Center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Findings */}
      <section className="reveal container-tight py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          What the research tells us
        </h2>
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">
              Older adults are disproportionately harmed by online fraud.
            </strong>{" "}
            While people of all ages get scammed, victims 60 and older tend to
            lose far more money per incident, and losses in this group have
            roughly doubled in just two years.
          </p>
          <p>
            <strong className="text-foreground">
              AI is making scams harder to detect.
            </strong>{" "}
            Consumer-protection groups report a sharp rise in AI-assisted fraud —
            voice clones that imitate a grandchild, deepfake videos, and phishing
            messages written to look flawless. Traditional &quot;spot the typo&quot;
            advice no longer works.
          </p>
          <p>
            <strong className="text-foreground">
              Most seniors are already online.
            </strong>{" "}
            A majority of adults 65+ own smartphones and use the internet, so the
            solution isn&apos;t to avoid technology — it&apos;s to build the
            skills and confidence to use it safely.
          </p>
          <p>
            <strong className="text-foreground">
              Education is an effective defense.
            </strong>{" "}
            Research and prevention organizations consistently find that awareness
            of specific scam tactics significantly reduces the chance of falling
            victim. People who know what a scam looks like are far more likely to
            hang up, delete, or ask for help.
          </p>
        </div>
      </section>

      {/* How research supports the project */}
      <section className="bg-primary text-white py-16">
        <div className="reveal container-tight">
          <Quote className="text-accent mb-4" size={36} />
          <h2 className="!text-white text-2xl md:text-3xl font-bold mb-5">
            How this research shapes our project
          </h2>
          <div className="space-y-4 text-white/80 leading-relaxed">
            <p>
              Every part of our workshop is a direct response to the data. Because
              losses are highest and rising fastest among seniors, that is exactly
              the audience we serve. Because AI now powers the most convincing
              scams, we teach what AI is <em>before</em> we teach how it&apos;s
              misused — understanding the tool makes the warning signs make sense.
            </p>
            <p>
              Because most seniors are already online, we focus on building
              confidence rather than discouraging use. And because education
              measurably reduces victimization, we keep our sessions practical,
              repeatable, and free — so the knowledge spreads through families and
              communities long after we leave the room.
            </p>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="reveal container-tight py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Sources cited</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Figures reflect the most recent reports available at the time of
          writing. Please confirm against the latest published editions before
          using these numbers in a final submission.
        </p>
        <ol className="space-y-3 list-decimal list-inside">
          {sources.map((s) => (
            <li key={s.url} className="text-foreground">
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:text-accent underline-offset-2 hover:underline inline-flex items-center gap-1"
              >
                {s.label}
                <ExternalLink size={14} />
              </a>
              <span className="block text-sm text-muted-foreground ml-5">
                {s.note}
              </span>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
