import { ArrowDownRight, CalendarDays, Video } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="min-h-screen bg-background px-5 pb-8 pt-28 md:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-5 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-text-muted">
          <span>PIYUSH KANOJIYA</span>
          <span>PIXELFORGE / 01</span>
        </div>

        <div className="pixel-frame relative overflow-hidden rounded-[18px] border border-white/80 bg-accent-soft p-4 md:p-8">
          <div className="pixel-field relative min-h-[690px] overflow-hidden rounded-[12px] border border-white/80 md:min-h-[760px]">
            <div className="absolute inset-0 bg-white/10" />

            <div className="absolute inset-x-0 top-0 flex h-14 items-center justify-between border-b border-black/10 bg-white/70 px-5 backdrop-blur-sm md:px-8">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[-0.02em]">
                <span className="h-3 w-3 rounded-full bg-foreground" />
                <span>PIXELFORGE STUDIO</span>
              </div>

              <div className="hidden items-center gap-7 text-[10px] uppercase tracking-[0.14em] text-text-secondary md:flex">
                <span>work</span>
                <span>process</span>
                <span>experiments</span>
                <span>about</span>
              </div>

              <a
                href="#contact"
                className="bg-accent-green px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-foreground transition-transform hover:-translate-y-0.5"
              >
                Contact
              </a>
            </div>

            <div className="absolute left-[7%] top-[24%] text-[9px] uppercase tracking-[0.22em] text-text-secondary">
              A DEVELOPER&apos;S WORKSHOP / DIGITAL PRODUCTS
            </div>

            <div className="absolute right-[7%] top-[24%] text-[9px] uppercase tracking-[0.22em] text-text-secondary">
              PIXELFORGE
            </div>

            <div className="absolute inset-x-5 top-[34%] text-center md:inset-x-10">
              <h1 className="font-mono text-[clamp(3.8rem,10vw,9.8rem)] font-black leading-[0.8] tracking-[-0.11em] text-foreground">
                Pixel
                <span className="font-sans font-light tracking-[-0.08em] text-text-secondary">
                  &
                </span>
                <br className="md:hidden" /> Forge
              </h1>
            </div>

            <div className="absolute bottom-[14%] left-[7%] max-w-md">
              <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-text-secondary">
                SESSION 01 — THE DIGITAL WORKSHOP
              </p>
              <p className="max-w-sm text-sm leading-6 text-text-secondary md:text-base">
                Software, interfaces, and experiments built with curiosity,
                precision, and a bias toward making things real.
              </p>
            </div>

            <div className="absolute bottom-[13%] right-[7%] w-44">
              <div className="border border-black/10 bg-white/55 p-3 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <CalendarDays size={15} strokeWidth={1.5} />
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.1em]">
                      Available
                    </p>
                    <p className="mt-1 text-[10px] text-text-secondary">
                      Building / learning / shipping
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3 border-t border-black/10 pt-3">
                  <Video size={14} strokeWidth={1.5} />
                  <span className="font-mono text-[9px] uppercase tracking-[0.1em]">
                    Online
                  </span>
                </div>
              </div>

              <a
                href="#work"
                className="mt-3 flex items-center justify-between bg-accent px-4 py-3 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Explore work
                <ArrowDownRight size={15} strokeWidth={1.7} />
              </a>
            </div>

            <div className="pixel-dots absolute bottom-0 left-0 right-0 h-9 border-t border-black/10 opacity-50" />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.15em] text-text-muted">
          <span>Software / Interfaces / Experiments</span>
          <span>Scroll to explore ↓</span>
        </div>
      </div>
    </section>
  );
}
