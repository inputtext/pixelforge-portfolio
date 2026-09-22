import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-6 md:px-10">
        <a
          href="/"
          className="group flex items-center gap-3"
          aria-label="PixelForge home"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em]">
            PixelForge
          </span>

          <span className="h-2 w-2 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#work"
            className="text-sm text-text-secondary transition-colors duration-300 hover:text-text-primary"
          >
            Work
          </a>

          <a
            href="#about"
            className="text-sm text-text-secondary transition-colors duration-300 hover:text-text-primary"
          >
            About
          </a>

          <a
            href="#contact"
            className="group flex items-center gap-1.5 text-sm text-text-secondary transition-colors duration-300 hover:text-text-primary"
          >
            Contact
            <ArrowUpRight
              size={15}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <div className="flex items-center gap-2 text-xs text-text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
          <span className="hidden sm:inline">Available</span>
        </div>
      </nav>
    </header>
  );
}
