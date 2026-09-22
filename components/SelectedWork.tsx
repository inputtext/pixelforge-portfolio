import { ArrowUpRight } from "lucide-react";

const projects = [
  ["01","DevCollective","Student community platform","bg-purple","REP / MENTORS / ROADMAPS"],
  ["02","Zero-Trust Vault","Client-side encrypted vault","bg-lavender","C++ / WASM / CRYPTO"],
  ["03","CFlow","Interactive landing experience","bg-green","REACT / GSAP / LENIS"],
];

export default function SelectedWork() {
  return (
    <section id="work" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-10 flex items-end justify-between gap-6 border-b-2 border-foreground pb-4">
          <div className="flex items-center gap-3 text-sm font-bold uppercase">
            <span className="grid h-7 w-7 place-items-center border-2 border-foreground bg-paper">02</span>
            Selected work
          </div>
          <span className="hidden text-xs font-semibold text-muted md:block">Real projects. Real learnings. ↗</span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map(([no,title,type,color,stack]) => (
            <a key={no} href="#contact" className="group pixel-border bg-paper p-3 transition-transform hover:-translate-y-1">
              <div className="flex items-start justify-between border-b-2 border-foreground pb-4">
                <div className="flex items-center gap-3">
                  <span className={`grid h-11 w-11 place-items-center border-2 border-foreground ${color} font-bold`}>{no}</span>
                  <div>
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p className="text-[10px] uppercase text-muted">{type}</p>
                  </div>
                </div>
                <ArrowUpRight size={19} strokeWidth={2.5} />
              </div>
              <div className={`pixel-grid relative mt-3 h-44 overflow-hidden border-2 border-foreground ${color}`}>
                <div className="absolute inset-[12%] border-2 border-foreground bg-paper/40" />
                <div className="absolute left-[20%] top-[25%] h-12 w-16 border-2 border-foreground bg-blue" />
                <div className="absolute right-[16%] top-[36%] h-20 w-8 border-2 border-foreground bg-pink" />
                <div className="absolute bottom-[12%] left-[34%] h-10 w-24 border-2 border-foreground bg-yellow" />
              </div>
              <div className="flex items-center justify-between pt-4 text-[9px] font-bold uppercase">
                <span>{stack}</span><span className="text-blue">Open ↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
