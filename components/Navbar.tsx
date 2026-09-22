import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-5 md:px-10">
        <a href="/" className="text-xl font-semibold tracking-[-0.05em]">
          PixelForge
        </a>

        <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.12em] text-text-secondary md:flex">
          <a href="#work" className="transition-colors hover:text-foreground">Work</a>
          <a href="#experiments" className="transition-colors hover:text-foreground">Experiments</a>
          <a href="#about" className="transition-colors hover:text-foreground">Process</a>
        </div>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-white transition-transform hover:-translate-y-0.5"
        >
          Get in touch
          <ArrowUpRight size={14} strokeWidth={1.7} />
        </a>
      </nav>
    </header>
  );
}
