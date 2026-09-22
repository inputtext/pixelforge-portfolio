import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const focusAreas = ["Software", "Interfaces", "Experiments"];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden px-6 pb-12 pt-32 md:px-10 md:pb-16"
    >
      <div className="mx-auto flex min-h-[calc(100vh-9rem)] w-full max-w-[1400px] flex-col justify-between">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_420px]">
          <div>
            <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
              <span>Software developer / India</span>
            </div>

            <h1 className="max-w-5xl text-[clamp(4rem,10vw,9.5rem)] font-semibold leading-[0.82] tracking-[-0.075em] text-text-primary">
              Build.
              <br />
              <span className="text-text-secondary">Break.</span>
              <br />
              <span className="text-accent">Repeat.</span>
            </h1>
          </div>

          <div className="relative flex min-h-[300px] items-center justify-center lg:min-h-[360px]">
            <div className="absolute h-[280px] w-[280px] rounded-full border border-border md:h-[340px] md:w-[340px]" />
            <div className="absolute h-[210px] w-[210px] rounded-full border border-border-strong md:h-[260px] md:w-[260px]" />

            <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-accent text-center md:h-44 md:w-44">
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                  PixelForge
                </span>
                <span className="mt-2 block text-4xl font-semibold tracking-[-0.06em] text-white md:text-5xl">
                  01
                </span>
              </div>
            </div>

            <span className="absolute right-[8%] top-[16%] h-3 w-3 rounded-full bg-accent-green" />
            <span className="absolute bottom-[12%] left-[10%] h-2 w-2 rounded-full bg-accent-soft" />
          </div>
        </div>

        <div className="grid gap-10 border-t border-border pt-6 md:grid-cols-[1fr_1fr] md:items-end">
          <p className="max-w-xl text-base leading-7 text-text-secondary md:text-lg">
            Developer focused on thoughtful interfaces, reliable software, and
            experiments that turn ideas into working products.
          </p>

          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div className="w-full max-w-sm">
              <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-text-muted">
                <span>Current focus</span>
                <span>01 — 03</span>
              </div>

              <div className="grid grid-cols-3 border-y border-border">
                {focusAreas.map((area, index) => (
                  <div
                    key={area}
                    className="group border-r border-border px-3 py-4 last:border-r-0"
                  >
                    <span className="mb-4 block font-mono text-[9px] text-text-muted">
                      0{index + 1}
                    </span>
                    <span className="block text-xs text-text-secondary transition-colors group-hover:text-text-primary">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>

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

        <a
          href="#about"
          className="group mt-8 inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.16em] text-text-muted transition-colors hover:text-text-primary"
        >
          More about me
          <ArrowUpRight
            size={14}
            strokeWidth={1.7}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </section>
  );
}
