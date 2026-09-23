"use client";

import { MapPin, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type TimeOfDay = "sunrise" | "day" | "dusk" | "night";

const timeModes: { id: TimeOfDay; label: string; glyph: string }[] = [
  { id: "sunrise", label: "Sunrise", glyph: "☼" },
  { id: "day", label: "Day", glyph: "☀" },
  { id: "dusk", label: "Dusk", glyph: "◒" },
  { id: "night", label: "Night", glyph: "☾" },
];

const codeLines = [
  <>import React <em>from</em> <span className="code-green">&quot;react&quot;</span>;</>,
  <><i>const</i> PixelForge <em>=</em> () <em>=&gt;</em> &#123;</>,
  <>&nbsp;&nbsp;<span className="code-purple">return</span> (</>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code-blue">main</span> className=<span className="code-green">&quot;pixel&quot;</span>&gt;</>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Build<span className="code-pink">.</span>Explore<span className="code-pink">.</span>Ship<span className="code-pink">.</span></>,
  <>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="code-blue">main</span>&gt;</>,
  <>&nbsp;&nbsp;);</>,
  <>&#125;;</>,
];

export default function Hero() {
  const [time, setTime] = useState<TimeOfDay>("dusk");
  const [visibleCodeLines, setVisibleCodeLines] = useState(0);
  const [roomStatus, setRoomStatus] = useState("Click an object in the room.");
  const [lampOn, setLampOn] = useState(true);
  const [blindsOpen, setBlindsOpen] = useState(false);
  const [catAwake, setCatAwake] = useState(false);
  const sceneRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const pointerTargetRef = useRef({ x: 50, y: 50 });
  const pointerCurrentRef = useRef({ x: 50, y: 50 });

  const cycleTime = () => {
    const index = timeModes.findIndex((mode) => mode.id === time);
    setTime(timeModes[(index + 1) % timeModes.length].id);
  };

  const handleRoomAction = (item: string) => {
    switch (item) {
      case "window":
        setBlindsOpen((value) => !value);
        setRoomStatus(blindsOpen ? "Blinds closed. The room settles back into shade." : "Blinds open. More of the outside light comes in.");
        break;
      case "shelf-plant":
        setRoomStatus("A little green corner. The plant catches the window light.");
        break;
      case "shelf-cube":
        setRoomStatus("A small keepsake from the studio shelf.");
        break;
      case "shelf-bottle":
        setRoomStatus("Water for long coding sessions.");
        break;
      case "frame-px":
        setRoomStatus("PIXELFORGE — the mark behind the room.");
        break;
      case "frame-01":
        setRoomStatus("01 — first frame, first idea.");
        break;
      case "frame-wave":
        setRoomStatus("A tiny reminder to keep the work moving.");
        break;
      case "poster":
        setRoomStatus("A BETTER INTERNET TOGETHER. The studio motto.");
        break;
      case "lamp":
        setLampOn((value) => !value);
        setRoomStatus(lampOn ? "Desk lamp off. The monitor becomes the focus." : "Desk lamp on. Warm light returns to the workspace.");
        break;
      case "plant":
        setRoomStatus("The desk plant is doing its job: making the workspace feel alive.");
        break;
      case "monitor":
        setVisibleCodeLines(0);
        setRoomStatus("Editor focused. The code starts writing again.");
        break;
      case "keyboard":
        setRoomStatus("Keyboard ready. This is where the work gets shipped.");
        break;
      case "mouse":
        setRoomStatus("Pointer ready. Move through the interface.");
        break;
      case "mug":
        setRoomStatus("Coffee break. Then back to the build.");
        break;
      case "notebook":
        setRoomStatus("Loose notes: ideas before they become code.");
        break;
      case "books":
        setRoomStatus("Reference stack: learn, build, repeat.");
        break;
      case "clock":
        setRoomStatus("Time keeps moving. The room changes with it below.");
        break;
      case "cat":
        setCatAwake((value) => !value);
        setRoomStatus(catAwake ? "The cat went back to sleep." : "You woke the cat. It is watching the monitor.");
        break;
      default:
        setRoomStatus("A small detail in the workspace.");
    }
  };

  useEffect(() => {
    let line = 0;
    let timer: ReturnType<typeof setTimeout>;

    const writeLine = () => {
      line += 1;
      setVisibleCodeLines(line);

      if (line < codeLines.length) {
        timer = setTimeout(writeLine, 850);
      } else {
        timer = setTimeout(() => setVisibleCodeLines(0), 2800);
      }
    };

    timer = setTimeout(writeLine, 650);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const render = () => {
      const current = currentRef.current;
      const target = targetRef.current;

      current.x += (target.x - current.x) * 0.075;
      current.y += (target.y - current.y) * 0.075;

      const pointerCurrent = pointerCurrentRef.current;
      const pointerTarget = pointerTargetRef.current;
      pointerCurrent.x += (pointerTarget.x - pointerCurrent.x) * 0.12;
      pointerCurrent.y += (pointerTarget.y - pointerCurrent.y) * 0.12;

      scene.style.setProperty("--parallax-x", current.x.toFixed(3));
      scene.style.setProperty("--parallax-y", current.y.toFixed(3));
      scene.style.setProperty("--pointer-x", pointerCurrent.x.toFixed(2) + "%");
      scene.style.setProperty("--pointer-y", pointerCurrent.y.toFixed(2) + "%");

      if (Math.abs(target.x - current.x) > 0.01 || Math.abs(target.y - current.y) > 0.01) {
        frameRef.current = window.requestAnimationFrame(render);
      } else {
        frameRef.current = null;
      }
    };

    const schedule = () => {
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(render);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = scene.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      const pointerX = Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100));
      const pointerY = Math.max(0, Math.min(100, ((event.clientY - rect.top) / rect.height) * 100));

      targetRef.current.x = x;
      targetRef.current.y = y;
      pointerTargetRef.current.x = pointerX;
      pointerTargetRef.current.y = pointerY;
      scene.dataset.hovering = "true";
      schedule();
    };

    const handlePointerLeave = () => {
      targetRef.current.x = 0;
      targetRef.current.y = 0;
      pointerTargetRef.current.x = 50;
      pointerTargetRef.current.y = 50;
      scene.dataset.hovering = "false";
      schedule();
    };

    scene.addEventListener("pointermove", handlePointerMove);
    scene.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      scene.removeEventListener("pointermove", handlePointerMove);
      scene.removeEventListener("pointerleave", handlePointerLeave);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

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
            <div ref={sceneRef} className="pixel-scene" data-time={time} data-hovering="false" data-lamp={lampOn ? "on" : "off"} data-blinds={blindsOpen ? "open" : "closed"} data-cat={catAwake ? "awake" : "sleeping"}>
              <button type="button" className="room-object window" aria-label="Toggle window blinds" onClick={() => handleRoomAction("window")}>
                <span className="blind-rail" />
                <span className="blind-slats" />
                <span className="window-glow" />
                <span className="window-sun" />
                <span className="window-moon" />
                <span className="window-cloud window-cloud-one" />
                <span className="window-cloud window-cloud-two" />
                <span className="window-city" />
                <span className="window-lights" />
              </button>

              <button type="button" className="room-object wall-shelf shelf-one" aria-label="Inspect shelf plant and keepsake" onClick={() => handleRoomAction("shelf-plant")}>
                <span className="shelf-plant" />
                <span className="shelf-cube" />
              </button>
              <button type="button" className="room-object wall-shelf shelf-two" aria-label="Inspect shelf bottle" onClick={() => handleRoomAction("shelf-bottle")}>
                <span className="shelf-bottle" />
              </button>

              <button type="button" className="room-object wall-frame frame-one" aria-label="Inspect PX frame" onClick={() => handleRoomAction("frame-px")}>PX</button>
              <button type="button" className="room-object wall-frame frame-two" aria-label="Inspect 01 frame" onClick={() => handleRoomAction("frame-01")}>01</button>
              <button type="button" className="room-object wall-frame frame-three" aria-label="Inspect wave frame" onClick={() => handleRoomAction("frame-wave")}>⌁</button>
              <button type="button" className="room-object poster" aria-label="Read studio poster" onClick={() => handleRoomAction("poster")} />

              <button type="button" className="room-object lamp" aria-label="Toggle desk lamp" aria-pressed={lampOn} onClick={() => handleRoomAction("lamp")} />
              <button type="button" className="room-object plant" aria-label="Inspect desk plant" onClick={() => handleRoomAction("plant")} />
              <button type="button" className="room-object desk" aria-label="Inspect desk" onClick={() => handleRoomAction("desk")} />
              <div className="desk-backdrop" />

              <button type="button" className="room-object monitor" aria-label="Focus coding monitor" onClick={() => handleRoomAction("monitor")}>
                <span className="monitor-topbar">
                  <span className="monitor-dot" />
                  <span className="monitor-file">portfolio.tsx</span>
                  <span className="monitor-actions">— □ ×</span>
                </span>
                <span className="monitor-code">
                  {codeLines.map((lineContent, index) => (
                    <span
                      key={index}
                      className={`code-line ${index < visibleCodeLines ? "code-line-visible" : ""}`}
                    >
                      <b>{String(index + 1).padStart(2, "0")}</b>
                      {index < visibleCodeLines ? lineContent : "\u00a0"}
                    </span>
                  ))}
                  <span className="code-writing-cursor" aria-hidden="true" />
                </span>
                <span className="monitor-terminal">
                  <span>› npm run build</span>
                  <span className="terminal-ok">✓ compiled successfully</span>
                </span>
              </button>

              <button type="button" className="room-object keyboard" aria-label="Inspect keyboard" onClick={() => handleRoomAction("keyboard")}><span /></button>
              <button type="button" className="room-object mouse" aria-label="Inspect mouse" onClick={() => handleRoomAction("mouse")} />
              <button type="button" className="room-object mug" aria-label="Inspect coffee mug" onClick={() => handleRoomAction("mug")} />
              <button type="button" className="room-object notebook" aria-label="Inspect notebook" onClick={() => handleRoomAction("notebook")} />
              <button type="button" className="room-object books" aria-label="Inspect books" onClick={() => handleRoomAction("books")} />

              <button type="button" className="room-object clock" aria-label="Inspect clock" onClick={() => handleRoomAction("clock")}>
                <span className="clock-date">TUE, SEP 23</span>
                <span className="clock-time">
                  {time === "sunrise" ? "06:23" : time === "day" ? "12:40" : time === "dusk" ? "18:47" : "22:13"}
                </span>
              </button>

              <button type="button" className="room-object cat" aria-label="Wake or sleep the cat" aria-pressed={catAwake} onClick={() => handleRoomAction("cat")}>
                <span className="cat-face" />
                <span className="cat-tail" />
              </button>

              <div className="absolute right-5 top-5 max-w-[118px] text-right text-[10px] font-bold uppercase leading-[1.35] pointer-events-none">
                A better
                <br />
                internet
                <br />
                together.
                <span className="ml-auto mt-3 block h-1 w-12 bg-foreground" />
              </div>
              <div className="absolute bottom-5 left-5 text-[9px] font-bold uppercase text-white pointer-events-none">
                Good ideas
                <br />
                take time.
              </div>
              <div className="room-status" aria-live="polite">{roomStatus}</div>
              <span className="scene-hint">CLICK OBJECTS</span>
            </div>

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
