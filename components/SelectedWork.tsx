import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "DevCollective",
    type: "Community platform",
    description:
      "A developer community system built around reputation, learning paths, mentorship, and collaborative knowledge.",
    stack: "React / TypeScript / Node",
    accent: "bg-accent",
  },
  {
    number: "02",
    title: "Zero-Trust Vault",
    type: "Security experiment",
    description:
      "A client-side encrypted vault exploring WebAssembly, native cryptography, and zero-trust storage principles.",
    stack: "C++ / WASM / Web",
    accent: "bg-accent-green",
  },
  {
    number: "03",
    title: "CFlow",
    type: "Interactive web experience",
    description:
      "A visual landing experience focused on depth, movement, and a more expressive approach to product presentation.",
    stack: "React / GSAP / Lenis",
    accent: "bg-accent-soft",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-14 grid gap-6 border-t border-border pt-5 md:grid-cols-[1fr_2fr]">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-text-muted">
            <span className="font-mono">01</span>
            <span>Selected work</span>
          </div>

          <div className="max-w-2xl">
            <p className="text-2xl leading-tight tracking-[-0.03em] text-text-primary md:text-4xl">
              A few systems, products, and experiments I have built while
              learning how software should feel.
            </p>
          </div>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group grid gap-8 py-8 md:grid-cols-[72px_1fr_260px] md:items-center md:py-10"
            >
              <span className="font-mono text-xs text-text-muted">
                {project.number}
              </span>

              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className={`h-2 w-2 rounded-full ${project.accent}`}
                  />
                  <span className="text-xs uppercase tracking-[0.16em] text-text-muted">
                    {project.type}
                  </span>
                </div>

                <h2 className="text-3xl font-medium tracking-[-0.04em] text-text-primary transition-transform duration-500 group-hover:translate-x-1 md:text-5xl">
                  {project.title}
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-text-secondary md:text-base">
                  {project.description}
                </p>
              </div>

              <div className="flex items-end justify-between gap-5 md:block">
                <div>
                  <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-text-muted">
                    Built with
                  </p>
                  <p className="font-mono text-xs text-text-secondary">
                    {project.stack}
                  </p>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-all duration-300 group-hover:border-border-strong group-hover:bg-surface-hover group-hover:text-text-primary">
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.6}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
