import { ArrowUpRight } from "lucide-react";

const steps = [
  ["01", "Frame", "Understand what needs to exist before touching the pixels."],
  ["02", "Explore", "Try structures, interactions, and visual directions quickly."],
  ["03", "Build", "Turn the strongest idea into real, maintainable software."],
  ["04", "Refine", "Remove noise and make the final interaction feel inevitable."],
];

export default function Process() {
  return (
    <section id="about" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-10 border-t editorial-rule pt-4 md:grid-cols-[1fr_1.4fr]">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            04 / Process
          </div>

          <div>
            <h2 className="max-w-3xl text-4xl leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Make it clear.
              <br />
              Make it useful.
              <br />
              Then make it beautiful.
            </h2>

            <div className="mt-14 border-t editorial-rule">
              {steps.map(([no, title, text]) => (
                <div key={no} className="grid gap-5 border-b editorial-rule py-6 md:grid-cols-[70px_150px_1fr] md:items-center">
                  <span className="font-mono text-[10px] text-muted">{no}</span>
                  <h3 className="text-lg">{title}</h3>
                  <p className="max-w-xl text-sm leading-6 text-muted">{text}</p>
                </div>
              ))}
            </div>

            <a href="#contact" className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em]">
              Start something <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
