"use client";

import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="px-5 pb-8 md:px-10">
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_.98fr] lg:items-stretch">
          <div className="flex flex-col justify-between py-4 md:py-8">
            <div>
              <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em]">
                <span className="grid h-7 w-7 place-items-center border-2 border-foreground bg-purple text-white">01</span>
                <span>Build / Experiment / Design</span>
              </div>

              <h1 className="max-w-4xl text-[clamp(4.8rem,11vw,10rem)] font-bold leading-[0.72] tracking-[-0.08em]">
                PIXEL <span>&amp;</span>
                <br />
                <span className="text-purple">FORGE</span>
              </h1>

              <p className="mt-8 max-w-xl text-base font-semibold leading-[1.35] md:text-xl">
                A developer creating digital experiences at the intersection of code, design and ideas.
              </p>

              <div className="mt-8 flex flex-wrap gap-5">
                <a href="#work" className="pixel-button inline-flex items-center gap-4 bg-green px-6 py-4 text-sm font-bold uppercase">
                  View work <ArrowRight size={17} />
                </a>
                <a href="#contact" className="pixel-button inline-flex items-center gap-4 bg-paper px-6 py-4 text-sm font-bold uppercase">
                  Get in touch ↗
                </a>
              </div>
            </div>

            <div className="mt-10 flex max-w-[540px] border-2 border-foreground bg-paper shadow-[4px_4px_0_#111017]">
              <div className="grid w-32 shrink-0 place-items-center border-r-2 border-foreground bg-lavender">
                <div className="pixel-avatar">PK</div>
              </div>
              <div className="p-5">
                <p className="text-sm font-bold uppercase">Piyush Kanojiya</p>
                <p className="mt-2 text-xs">Computer Science Student</p>
                <p className="text-xs text-muted">Builder. Learner. Explorer.</p>
                <p className="mt-2 flex items-center gap-1 text-xs"><MapPin size={12}/> Nagpur, India</p>
              </div>
            </div>
          </div>

          <div className="pixel-artboard bg-lavender p-3 md:p-5">
            <div className="pixel-scene">
              <div className="sky" />
              <div className="window" />
              <div className="poster" />
              <div className="lamp" />
              <div className="plant" />
              <div className="desk" />
              <div className="monitor" />
              <div className="books" />
              <div className="clock">01:27</div>
              <div className="cat" />
              <div className="absolute right-5 top-5 max-w-[120px] text-right text-[10px] font-bold uppercase leading-tight">
                A better<br/>internet<br/>together.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-between border-y-2 border-foreground py-3 text-[10px] font-bold uppercase tracking-[0.1em]">
          <span>Software / Interfaces / Experiments</span>
          <span>Pixel by pixel ↓</span>
        </div>
      </div>
    </section>
  );
}
