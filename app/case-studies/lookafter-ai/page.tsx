import type { Metadata } from "next";
import Link from "next/link";

import { lookafter } from "@/data/lookafter";

const URL = "https://ganeshshinde2003.netlify.app/case-studies/lookafter-ai";

export const metadata: Metadata = {
  title: "LookAfter AI case study | Ganesh Shinde",
  description:
    "How I built the retrieval layer for LookAfter AI: hybrid vector + keyword search, Reciprocal Rank Fusion, a CRAG-style grader and a permission-aware personal-data RAG. 97.6% hit@1 on a 41-question eval.",
  alternates: { canonical: URL },
  openGraph: {
    title: "LookAfter AI case study | Ganesh Shinde",
    description:
      "Hybrid RAG with a CRAG-style grader for an AI health companion. 97.6% hit@1, 100% hit@4 on a 41-question eval.",
    url: URL,
    type: "article",
    images: [{ url: "/lookafter-cover.png", width: 1024, height: 500 }],
  },
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mt-16">
    <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>
    {children}
  </section>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl border border-white/[0.1] bg-black-200 p-5 md:p-6">
    {children}
  </div>
);

export default function LookAfterCaseStudy() {
  const l = lookafter;

  return (
    <main className="relative bg-black-100 text-white min-h-screen overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-4xl w-full mx-auto py-16 md:py-24">
        <Link
          href="/#projects"
          className="text-sm text-purple hover:opacity-80 transition-opacity"
        >
          &larr; Back to projects
        </Link>

        <p className="uppercase tracking-widest text-xs text-blue-100 mt-10">
          Case study
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mt-3">{l.name}</h1>
        <p className="text-lg md:text-2xl text-white-100 mt-4 max-w-3xl">
          {l.tagline}
        </p>

        <img
          src="/lookafter-cover.png"
          alt="LookAfter AI, your AI family health companion"
          className="w-full rounded-2xl border border-white/[0.1] mt-8"
        />

        <div className="flex flex-wrap gap-3 mt-8">
          <a
            href={l.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-purple text-black-100 font-semibold px-5 py-2.5 text-sm hover:opacity-90 transition-opacity"
          >
            Open the live site
          </a>
          {l.playStoreUrl ? (
            <a
              href={l.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/[0.2] px-5 py-2.5 text-sm hover:bg-white/10 transition-colors"
            >
              Get it on Google Play
            </a>
          ) : null}
          {l.appStoreUrl ? (
            <a
              href={l.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/[0.2] px-5 py-2.5 text-sm hover:bg-white/10 transition-colors"
            >
              Download on the App Store
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="rounded-lg border border-white/[0.1] px-5 py-2.5 text-sm text-white-100 cursor-not-allowed"
            >
              App Store: coming soon
            </span>
          )}
        </div>

        {l.screenshots.length > 0 ? (
          <div className="mt-10 flex gap-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {l.screenshots.map((s) => (
              <img
                key={s.src}
                src={s.src}
                alt={s.alt}
                className="h-[420px] w-auto shrink-0 snap-start rounded-2xl border border-white/[0.1]"
              />
            ))}
          </div>
        ) : null}
        {l.screenshots.length > 0 ? (
          <p className="text-xs text-white-100 mt-2">
            Screens from the Google Play listing, shown with sample data.
          </p>
        ) : null}

        <p className="text-sm text-white-100 mt-6">{l.role}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {l.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/[0.15] px-3 py-1 text-xs text-white-200"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {l.stats.map((s) => (
            <Card key={s.label}>
              <p className="text-3xl md:text-4xl font-bold text-purple">
                {s.value}
              </p>
              <p className="text-sm font-semibold mt-1">{s.label}</p>
              <p className="text-xs text-white-100 mt-1">{s.note}</p>
            </Card>
          ))}
        </div>

        <Section title="The problem">
          <p className="text-white-200 leading-relaxed">{l.problem}</p>
        </Section>

        <Section title={l.research.title}>
          <p className="text-white-200 leading-relaxed">{l.research.intro}</p>
          <ol className="mt-5 space-y-3 list-decimal pl-5 text-white-200 leading-relaxed">
            {l.research.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <h3 className="font-semibold text-lg mt-8">
            {l.research.doctorsTitle}
          </h3>
          <p className="text-white-200 leading-relaxed mt-2">
            {l.research.doctors}
          </p>
        </Section>

        <Section title="How retrieval works">
          <ol className="space-y-4">
            {l.pipeline.map((p, i) => (
              <li key={p.step}>
                <Card>
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple text-black-100 text-sm font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-lg">{p.step}</h3>
                      <p className="text-white-200 text-sm md:text-base leading-relaxed mt-1">
                        {p.text}
                      </p>
                    </div>
                  </div>
                </Card>
              </li>
            ))}
          </ol>
        </Section>

        <Section title="Measuring it">
          <div className="overflow-x-auto rounded-2xl border border-white/[0.1]">
            <table className="w-full text-sm text-left">
              <thead className="bg-black-200 text-white-100">
                <tr>
                  <th className="px-4 py-3 font-medium">Stage</th>
                  <th className="px-4 py-3 font-medium">hit@1</th>
                  <th className="px-4 py-3 font-medium">MRR</th>
                </tr>
              </thead>
              <tbody>
                {l.evalRows.map((r) => (
                  <tr key={r.stage} className="border-t border-white/[0.08]">
                    <td className="px-4 py-3">
                      {r.stage}
                      {r.note ? (
                        <span className="text-white-100"> ({r.note})</span>
                      ) : null}
                    </td>
                    <td className="px-4 py-3">{r.hit1}</td>
                    <td className="px-4 py-3">{r.mrr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-white-100 mt-4 leading-relaxed">
            {l.evalNote}
          </p>
        </Section>

        <Section title="Privacy lives in the retrieval code">
          <ul className="space-y-3 list-disc pl-5 text-white-200 leading-relaxed">
            {l.privacy.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </Section>

        <Section title="Design rule">
          <Card>
            <p className="text-xl md:text-2xl font-semibold text-purple">
              &ldquo;{l.designRule.quote}&rdquo;
            </p>
            <p className="text-white-200 leading-relaxed mt-3">
              {l.designRule.text}
            </p>
          </Card>
        </Section>

        <Section title="What shipped">
          <ul className="space-y-3 list-disc pl-5 text-white-200 leading-relaxed">
            {l.built.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </Section>

        <div className="mt-16 pt-8 border-t border-white/[0.1] flex flex-wrap items-center justify-between gap-4">
          <p className="text-white-100 text-sm">
            Want the details behind any of this? Ask the chat on the home page
            or get in touch.
          </p>
          <Link
            href="/#contact"
            className="rounded-lg border border-white/[0.2] px-5 py-2.5 text-sm hover:bg-white/10 transition-colors"
          >
            Contact me
          </Link>
        </div>
      </div>
    </main>
  );
}
