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
    <section id="work" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 flex flex-col justify-between gap-8 border-t border-border pt-5 md:flex-row md:items-start">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-text-muted">
            <span className="font-mono">01</span>
            <span>Selected work</span>
          </div>

          <p className="max-w-xl text-xl leading-7 text-text-secondary md:text-2xl">
            Systems, products, and experiments built from curiosity and
            finished through iteration.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group relative min-h-[470px] overflow-hidden border border-border bg-surface p-6 md:p-7"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong font-mono text-xs text-text-secondary transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  {project.number}
                </div>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="text-text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-text-primary"
                />
              </div>

              <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border-strong transition-transform duration-700 group-hover:scale-110">
                <div
                  className={`h-24 w-24 rounded-full ${project.accent} opacity-80 transition-transform duration-700 group-hover:scale-90`}
                />
              </div>

              <div className="absolute inset-x-6 bottom-6 md:inset-x-7 md:bottom-7">
                <span className="mb-3 block text-[10px] uppercase tracking-[0.18em] text-text-muted">
                  {project.type}
                </span>

                <h2 className="text-3xl font-medium tracking-[-0.05em] text-text-primary md:text-4xl">
                  {project.title}
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-text-secondary">
                  {project.description}
                </p>

                <div className="mt-5 border-t border-border pt-4">
                  <span className="font-mono text-[10px] text-text-muted">
                    {project.stack}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
