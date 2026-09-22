import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-6 pb-8 pt-24 md:px-10 md:pb-10 md:pt-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="relative overflow-hidden border border-border bg-surface px-6 py-12 md:px-10 md:py-16">
          <div className="pixel-grid pointer-events-none absolute inset-0 opacity-60" />

          <div className="relative grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-text-muted">
                04 — Contact
              </p>
              <h2 className="max-w-4xl text-[clamp(2.8rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-text-primary">
                Have something
                <br />
                worth building<span className="text-accent">?</span>
              </h2>
            </div>

            <a
              href="mailto:piyushkanojiya@example.com"
              className="group inline-flex items-center gap-3 border border-border-strong px-5 py-4 text-sm text-text-primary transition-colors hover:bg-surface-hover"
            >
              Get in touch
              <ArrowUpRight
                size={17}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        <footer className="flex flex-col gap-4 py-7 text-xs text-text-muted md:flex-row md:items-center md:justify-between">
          <span>PixelForge — Piyush Kanojiya</span>
          <div className="flex gap-6">
            <a className="transition-colors hover:text-text-primary" href="https://github.com/inputtext">
              GitHub
            </a>
            <a
              className="transition-colors hover:text-text-primary"
              href="https://www.linkedin.com/in/piyush-kanojiya-b78340358/"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
