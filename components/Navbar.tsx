import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-50 bg-background">
      <nav className="mx-auto flex h-20 max-w-[1480px] items-center justify-between px-5 md:px-10">
        <a href="#top" className="text-[15px] font-semibold tracking-[-0.04em]">
          PIXELFORGE<span className="text-muted">®</span>
        </a>

        <div className="hidden items-center gap-9 text-[10px] uppercase tracking-[0.18em] text-muted md:flex">
          <a href="#work" className="hover:text-foreground">Work</a>
          <a href="#experiments" className="hover:text-foreground">Experiments</a>
          <a href="#about" className="hover:text-foreground">About</a>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 border border-foreground bg-foreground px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-transform hover:-translate-y-0.5"
        >
          Let&apos;s talk <ArrowUpRight size={13} strokeWidth={1.6} />
        </a>
      </nav>
    </header>
  );
}
