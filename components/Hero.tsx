"use client";

import { ArrowDownRight } from "lucide-react";

const cells = [
  ["bg-lavender","col-span-2"],["bg-purple",""],["bg-pink",""],["bg-green","row-span-2"],
  ["bg-yellow",""],["bg-lavender",""],["bg-blue","col-span-2"],["bg-pink",""],
  ["bg-green",""],["bg-yellow","row-span-2"],["bg-purple",""],["bg-lavender",""],
  ["bg-pink","col-span-2"],["bg-blue",""],["bg-green",""],["bg-yellow",""],
  ["bg-lavender",""],["bg-purple","row-span-2"],["bg-pink",""],["bg-blue","col-span-2"],
  ["bg-green",""],["bg-yellow",""],["bg-lavender",""],["bg-purple",""],
  ["bg-blue","col-span-2"],["bg-pink",""],["bg-yellow",""],["bg-green",""],
];

export default function Hero() {
  return (
    <section id="top" className="px-5 pb-7 md:px-10">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
          <span>Digital products / interfaces / experiments</span>
          <span>01 — 06</span>
        </div>

        <div className="pixel-artboard relative overflow-hidden rounded-[22px] bg-white p-3 md:p-5">
          <div className="pixel-grid relative min-h-[650px] overflow-hidden rounded-[16px] bg-[#eee9f7] md:min-h-[760px]">
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-7 gap-px opacity-75">
              {cells.map(([tone, span], index) => (
                <span
                  key={index}
                  className={`pixel-cell ${tone} ${span} opacity-80`}
                />
              ))}
            </div>

            <div className="absolute inset-0 bg-white/25" />

            <div className="absolute left-5 top-5 flex items-center gap-2 md:left-8 md:top-7">
              <span className="h-2.5 w-2.5 bg-foreground" />
              <span className="font-mono text-[9px] uppercase tracking-[0.15em]">
                PixelForge / digital workshop
              </span>
            </div>

            <div className="absolute right-5 top-5 font-mono text-[9px] uppercase tracking-[0.15em] md:right-8 md:top-7">
              Nagpur / India
            </div>

            <div className="absolute left-5 right-5 top-[29%] md:left-[7%] md:right-[7%] md:top-[27%]">
              <div className="mb-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                <span>Session 01</span>
                <span>Software × curiosity</span>
              </div>

              <h1 className="max-w-[1100px] text-[clamp(4rem,11vw,10.5rem)] font-semibold leading-[0.78] tracking-[-0.09em]">
                Pixel <span className="font-light">&amp;</span>
                <br />
                Process
              </h1>
            </div>

            <div className="absolute bottom-5 left-5 md:bottom-8 md:left-[7%]">
              <div className="flex items-center gap-4">
                <div className="session-ring flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-green font-mono text-[10px] md:h-20 md:w-20">
                  01 / 06
                </div>
                <p className="max-w-xs text-[11px] leading-5 text-muted md:text-xs">
                  I build software, interfaces, and experiments — turning rough
                  ideas into things people can actually use.
                </p>
              </div>
            </div>

            <a
              href="#work"
              className="absolute bottom-5 right-5 inline-flex items-center gap-4 bg-green px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] md:bottom-8 md:right-[7%]"
            >
              Explore the work
              <ArrowDownRight size={15} strokeWidth={1.6} />
            </a>
          </div>
        </div>

        <div className="mt-4 flex justify-between border-b editorial-rule pb-4 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
          <span>Piyush Kanojiya / 2026</span>
          <span>Scroll ↓</span>
        </div>
      </div>
    </section>
  );
}
