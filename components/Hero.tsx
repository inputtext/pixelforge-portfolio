"use client";

import { MapPin, Play } from "lucide-react";
import { useState } from "react";

type TimeOfDay = "sunrise" | "day" | "dusk" | "night";

const timeModes: { id: TimeOfDay; label: string; glyph: string }[] = [
  { id: "sunrise", label: "Sunrise", glyph: "☼" },
  { id: "day", label: "Day", glyph: "☀" },
  { id: "dusk", label: "Dusk", glyph: "◒" },
  { id: "night", label: "Night", glyph: "☾" },
];

export default function Hero() {
  const [time, setTime] = useState<TimeOfDay>("dusk");

  const cycleTime = () => {
    const index = timeModes.findIndex((mode) => mode.id === time);
    setTime(timeModes[(index + 1) % timeModes.length].id);
  };

  return (
    <section id="top" className="px-5 pb-8 md:px-10">
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-9 lg:grid-cols-[.98fr_1.02fr] lg:min-h-[650px]">
          <div className="flex min-w-0 flex-col justify-between py-3 md:py-5">
            <div>
              <div className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase">
                <span className="grid h-7 w-7 place-items-center border-2 border-foreground bg-purple text-white shadow-[2px_2px_0_#111017]">
                  01
                </span>
                <span>Build / Experiment / Design</span>
              </div>

              <h1 className="max-w-[720px] text-[clamp(3.9rem,8.6vw,7.8rem)] font-bold leading-[.76] tracking-[-.065em]">
                PIXEL <span>&amp;</span>
                <br />
                <span className="text-purple">FORGE</span>
              </h1>

              <p className="mt-8 max-w-[610px] text-[13px] font-bold uppercase leading-[1.65] md:text-[15px]">
                A developer creating digital
                <br className="hidden md:block" />
                experiences at the intersection
                <br className="hidden md:block" />
                of code, design and ideas.
              </p>

              <div className="mt-7 flex flex-wrap gap-5">
                <a href="#work" className="pixel-button inline-flex items-center gap-4 bg-green px-6 py-4 text-[12px] font-bold uppercase">
                  <Play size={14} fill="currentColor" />
                  View work
                </a>
                <a href="#contact" className="pixel-button inline-flex items-center gap-4 bg-paper px-6 py-4 text-[12px] font-bold uppercase">
                  Get in touch ↗
                </a>
              </div>
            </div>

            <div className="mt-10 flex max-w-[535px] border-2 border-foreground bg-paper shadow-[4px_4px_0_#111017]">
              <div className="grid w-[138px] shrink-0 place-items-center border-r-2 border-foreground bg-[#e7e2f0]">
                <div className="pixel-avatar">PK</div>
              </div>
              <div className="flex flex-1 flex-col justify-center p-5">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[13px] font-bold uppercase">Piyush Kanojiya</p>
                  <span className="h-3.5 w-3.5 border-2 border-foreground bg-green" />
                </div>
                <p className="mt-2 text-[10px] uppercase">Computer Science Student</p>
                <p className="text-[10px] text-muted">Builder. Learner. Explorer.</p>
                <p className="mt-2 flex items-center gap-1 text-[10px] uppercase">
                  <MapPin size={11} strokeWidth={3} />
                  Nagpur, India
                </p>
              </div>
            </div>
          </div>

          <div className="pixel-artboard bg-lavender p-3 md:p-4">
            <button
              type="button"
              aria-label={`Change time of day. Current: ${time}`}
              onClick={cycleTime}
              className="pixel-scene-button"
            >
              <div className="pixel-scene" data-time={time}>
                <div className="sky">
                  <span className="pixel-sun" />
                  <span className="pixel-stars" />
                  <span className="sky-cloud cloud-one" />
                  <span className="sky-cloud cloud-two" />
                </div>
                <div className="window">
                  <span className="blind-rail" />
                  <span className="blind-slats" />
                  <span className="window-glow" />
                  <span className="window-sun" />
                  <span className="window-moon" />
                  <span className="window-cloud window-cloud-one" />
                  <span className="window-cloud window-cloud-two" />
                  <span className="window-city" />
                  <span className="window-lights" />
                </div>
                <div className="wall-shelf shelf-one">
                  <span className="shelf-plant" />
                  <span className="shelf-cube" />
                </div>
                <div className="wall-shelf shelf-two">
                  <span className="shelf-bottle" />
                </div>
                <div className="wall-frame frame-one">PX</div>
                <div className="wall-frame frame-two">01</div>
                <div className="wall-frame frame-three">⌁</div>
                <div className="poster" />
                <div className="lamp" />
                <div className="plant" />
                <div className="desk" />
                <div className="desk-backdrop" />
                <div className="monitor">
                  <div className="monitor-topbar">
                    <span className="monitor-dot" />
                    <span className="monitor-file">portfolio.tsx</span>
                    <span className="monitor-actions">— □ ×</span>
                  </div>
                  <div className="monitor-code">
                    <span className="code-line"><b>01</b><i>import</i> React <em>from</em> &quot;react&quot;;</span>
                    <span className="code-line"><b>02</b><i>const</i> PixelForge <em>=</em> () <em>=&gt;</em> &#123;</span>
                    <span className="code-line"><b>03</b>&nbsp;&nbsp;<span className="code-purple">return</span> (</span>
                    <span className="code-line"><b>04</b>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code-blue">main</span> className=<span className="code-green">&quot;pixel&quot;</span>&gt;</span>
                    <span className="code-line"><b>05</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Build<span className="code-pink">.</span>Explore<span className="code-pink">.</span>Ship<span className="code-pink">.</span></span>
                    <span className="code-line"><b>06</b>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="code-blue">main</span>&gt;</span>
                    <span className="code-line"><b>07</b>&nbsp;&nbsp;);</span>
                    <span className="code-line"><b>08</b>&#125;;</span>
                  </div>
                  <div className="monitor-terminal">
                    <span>› npm run build</span>
                    <span className="terminal-ok">✓ compiled successfully</span>
                  </div>
                </div>
                <div className="keyboard"><span /></div>
                <div className="mouse" />
                <div className="mug" />
                <div className="notebook" />
                <div className="books" />
                <div className="clock">
                  <span className="clock-date">TUE, SEP 23</span>
                  <span className="clock-time">
                    {time === "sunrise" ? "06:23" : time === "day" ? "12:40" : time === "dusk" ? "18:47" : "22:13"}
                  </span>
                </div>
                <div className="cat">
                  <span className="cat-face" />
                  <span className="cat-tail" />
                </div>
                <div className="absolute right-5 top-5 max-w-[118px] text-right text-[10px] font-bold uppercase leading-[1.35]">
                  A better
                  <br />
                  internet
                  <br />
                  together.
                  <span className="ml-auto mt-3 block h-1 w-12 bg-foreground" />
                </div>
                <div className="absolute bottom-5 left-5 text-[9px] font-bold uppercase text-white">
                  Good ideas
                  <br />
                  take time.
                </div>
                <span className="scene-hint">CLICK SCENE TO CHANGE TIME</span>
              </div>
            </button>

            <div className="time-controls" aria-label="Time of day">
              <div className="time-controls-title">TIME OF DAY</div>
              <div className="time-options">
                {timeModes.map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    aria-pressed={time === mode.id}
                    onClick={() => setTime(mode.id)}
                    className="time-option"
                  >
                    <span>{mode.glyph}</span>
                    {mode.label}
                  </button>
                ))}
              </div>
              <div className="time-note">
                SAME ROOM.
                <br />
                DIFFERENT PERSPECTIVE.
                <span />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-between border-y-2 border-foreground py-3 text-[9px] font-bold uppercase tracking-[0.12em] md:text-[10px]">
          <span>Software / Interfaces / Experiments</span>
          <span>Pixel by pixel ↓</span>
        </div>
      </div>
    </section>
  );
}
