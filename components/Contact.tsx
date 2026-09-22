import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-5 pb-8 pt-20 md:px-10 md:pt-28">
      <div className="mx-auto max-w-[1480px]">
        <div className="overflow-hidden rounded-[22px] bg-[#a09dcf] p-3 md:p-5">
          <div className="pixel-grid relative min-h-[470px] overflow-hidden rounded-[16px] bg-[#e8e4f2] p-6 md:min-h-[560px] md:p-10">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-purple/80" />
            <div className="absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-green/70" />
            <div className="absolute bottom-8 right-8 h-20 w-20 bg-yellow/80" />

            <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-between md:min-h-[500px]">
              <div className="flex items-start justify-between font-mono text-[9px] uppercase tracking-[0.16em]">
                <span>05 / Contact</span>
                <span>Open for conversations</span>
              </div>

              <div className="max-w-5xl">
                <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                  Build something worth opening a browser for.
                </p>
                <h2 className="text-[clamp(3.5rem,9vw,9rem)] font-semibold leading-[0.78] tracking-[-0.09em]">
                  Let&apos;s
                  <br />
                  make it.
                </h2>
              </div>

              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <p className="max-w-md text-sm leading-6 text-muted">
                  Have an idea, a weird problem, or something that needs shipping?
                  Find me on GitHub or LinkedIn.
                </p>

                <a
                  href="https://github.com/inputtext"
                  className="inline-flex items-center justify-between gap-8 bg-green px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.14em]"
                >
                  Open GitHub <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className="flex flex-col gap-3 py-7 font-mono text-[9px] uppercase tracking-[0.15em] text-muted md:flex-row md:justify-between">
          <span>PixelForge — Piyush Kanojiya</span>
          <span>React / Next / TypeScript / 2026</span>
        </footer>
      </div>
    </section>
  );
}
