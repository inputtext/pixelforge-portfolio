import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    no: "01",
    title: "DevCollective",
    type: "Community / platform",
    text: "A developer community for reputation, learning paths, mentorship, and collaborative knowledge.",
    color: "bg-purple",
  },
  {
    no: "02",
    title: "Zero-Trust Vault",
    type: "Security / WebAssembly",
    text: "A client-side encrypted vault exploring native cryptography, WASM, and zero-trust storage.",
    color: "bg-lavender",
  },
  {
    no: "03",
    title: "CFlow",
    type: "Interactive / web",
    text: "An expressive landing experience built around depth, movement, and visual storytelling.",
    color: "bg-green",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-12 grid gap-8 border-t editorial-rule pt-4 md:grid-cols-[1fr_1.4fr]">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            02 / Selected work
          </div>
          <p className="max-w-2xl text-2xl leading-[1.05] tracking-[-0.045em] md:text-4xl">
            A small collection of things I&apos;ve built, broken, rebuilt, and shipped.
          </p>
        </div>

        <div className="divide-y editorial-rule border-y">
          {projects.map((project) => (
            <a
              key={project.no}
              href="#contact"
              className="group grid gap-8 py-8 md:grid-cols-[72px_1fr_1.2fr_180px] md:items-center"
            >
              <span className="font-mono text-[10px] text-muted">{project.no}</span>

              <div className="flex items-center gap-5">
                <span className={`session-ring flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${project.color} font-mono text-[9px]`}>
                  VIEW
                </span>
                <div>
                  <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.15em] text-muted">
                    {project.type}
                  </p>
                  <h2 className="text-3xl font-medium tracking-[-0.06em] md:text-5xl">
                    {project.title}
                  </h2>
                </div>
              </div>

              <p className="max-w-xl text-sm leading-6 text-muted md:text-[15px]">
                {project.text}
              </p>

              <div className="flex items-center justify-end gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                Open project
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
