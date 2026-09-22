import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const focusAreas = ["Software", "Interfaces", "Experiments"];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-end overflow-hidden px-6 pb-10 pt-32 md:px-10 md:pb-12"
    >
      <div className="pointer-events-none absolute inset-0 pixel-grid opacity-40">
        <div className="absolute left-1/2 top-[42%] h-px w-[calc(100%-3rem)] -translate-x-1/2 bg-border md:w-[calc(100%-5rem)]" />
        <div className="absolute bottom-0 left-[18%] top-0 hidden w-px bg-border/60 md:block" />
        <div className="absolute bottom-0 right-[18%] top-0 hidden w-px bg-border/60 md:block" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1400px] gap-14 md:grid-cols-[1fr_320px] md:items-end lg:grid-cols-[1fr_380px]">
        <div>
          <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
            <span>Software developer / India</span>
          </div>

          <h1 className="max-w-5xl text-[clamp(3.5rem,9vw,9rem)] font-semibold leading-[0.86] tracking-[-0.07em] text-text-primary">
            I build
            <br />
            <span className="text-text-secondary">digital systems</span>
            <span className="text-accent">.</span>
          </h1>

          <div className="mt-10 flex max-w-2xl flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <p className="max-w-lg text-base leading-7 text-text-secondary md:text-lg">
              Developer focused on thoughtful interfaces, reliable software,
              and experiments that turn ideas into working products.
            </p>

            <a
              href="#work"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-text-primary"
            >
              Explore selected work
              <ArrowDownRight
                size={17}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="mb-5 flex items-center justify-between border-b border-border pb-3 text-[10px] uppercase tracking-[0.2em] text-text-muted">
            <span>Current focus</span>
            <span>01 — 03</span>
          </div>

          <div className="space-y-3">
            {focusAreas.map((area, index) => (
              <div
                key={area}
                className="group flex items-center justify-between border-b border-border py-3"
              >
                <span className="text-sm text-text-secondary transition-colors duration-300 group-hover:text-text-primary">
                  {area}
                </span>
                <span className="font-mono text-[10px] text-text-muted">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#about"
            className="group mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-text-muted transition-colors duration-300 hover:text-text-primary"
          >
            More about me
            <ArrowUpRight
              size={14}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
