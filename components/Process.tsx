import { ArrowUpRight } from "lucide-react";

const steps = [
  ["01", "Frame", "Understand the problem, the people, and what actually needs to exist."],
  ["02", "Explore", "Test structure, interaction, and visual direction before polishing details."],
  ["03", "Build", "Turn the strongest direction into maintainable, working software."],
  ["04", "Refine", "Remove noise, fix the rough edges, and make the final thing feel intentional."],
];

export default function Process() {
  return (
    <section id="about" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 border-t border-border pt-5 md:grid-cols-[1fr_2fr]">
          <div className="flex items-start gap-3 text-xs uppercase tracking-[0.2em] text-text-muted">
            <span className="font-mono">03</span>
            <span>Process</span>
          </div>

          <div>
            <div className="mb-12 flex max-w-3xl items-start justify-between gap-8">
              <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] text-text-primary md:text-5xl">
                Less decoration.
                <br />
                More intention.
              </h2>

              <div className="pixel-mark hidden shrink-0 md:grid" aria-hidden="true">
                {Array.from({ length: 16 }, (_, index) => (
                  <span key={index} />
                ))}
              </div>
            </div>

            <div className="border-t border-border">
              {steps.map(([number, title, text]) => (
                <div
                  key={number}
                  className="group grid gap-5 border-b border-border py-7 md:grid-cols-[72px_180px_1fr] md:items-center"
                >
                  <span className="font-mono text-xs text-text-muted">{number}</span>
                  <h3 className="text-lg text-text-primary">{title}</h3>
                  <p className="max-w-xl text-sm leading-6 text-text-secondary">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              Start a conversation
              <ArrowUpRight
                size={16}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
