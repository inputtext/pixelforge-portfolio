import { ArrowRight, Mail, UserRound, Beaker, FolderOpen, House } from "lucide-react";

const links = [
  { label: "Home", href: "#top", icon: House },
  { label: "Work", href: "#work", icon: FolderOpen },
  { label: "Experiments", href: "#experiments", icon: Beaker },
  { label: "About", href: "#about", icon: UserRound },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  return (
    <header className="relative z-50">
      <nav className="mx-auto flex min-h-20 max-w-[1480px] items-center gap-4 px-5 py-4 md:px-10">
        <a href="#top" className="mr-auto flex items-center gap-3 text-lg font-bold tracking-[-0.05em]">
          <span className="grid h-8 w-8 place-items-center border-2 border-foreground bg-lavender text-xs shadow-[3px_3px_0_#111017]">PX</span>
          PIXELFORGE
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((item, index) => {
            const Icon = item.icon;
            return (
              <a key={item.label} href={item.href} className={`flex items-center gap-2 border-2 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition-all hover:border-foreground hover:bg-lavender hover:shadow-[3px_3px_0_#111017] ${index === 0 ? "border-foreground bg-lavender shadow-[3px_3px_0_#111017]" : "border-transparent"}`}>
                <Icon size={14} strokeWidth={2.5} />
                {item.label}
              </a>
            );
          })}
        </div>

        <a href="#contact" className="pixel-button hidden items-center gap-3 bg-green px-5 py-3 text-xs font-bold uppercase md:inline-flex">
          Let&apos;s build <ArrowRight size={15} />
        </a>
      </nav>
    </header>
  );
}
