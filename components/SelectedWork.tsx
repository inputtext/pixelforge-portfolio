import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    no: "01",
    title: "DevCollective",
    type: "Student Community Platform",
    color: "bg-purple",
    stack: "REP / MENTORS / ROADMAPS",
    visual: "community",
  },
  {
    no: "02",
    title: "Zero-Trust Vault",
    type: "Client-side Encrypted Vault",
    color: "bg-lavender",
    stack: "C++ / WASM / CRYPTO",
    visual: "vault",
  },
  {
    no: "03",
    title: "CFlow",
    type: "Interactive Landing Experience",
    color: "bg-green",
    stack: "REACT / GSAP / LENIS",
    visual: "flow",
  },
];

function PixelPreview({ type, color }: { type: string; color: string }) {
  return (
    <div className={`pixel-grid relative h-52 overflow-hidden border-2 border-foreground ${color}`}>
      {type === "community" && (
        <>
          <div className="absolute left-[8%] top-[15%] h-[66%] w-[62%] border-2 border-foreground bg-[#17161e] shadow-[5px_5px_0_#111017]" />
          <div className="absolute left-[14%] top-[23%] h-5 w-[40%] bg-lavender" />
          <div className="absolute left-[14%] top-[39%] h-3 w-[48%] bg-green" />
          <div className="absolute left-[14%] top-[52%] h-3 w-[35%] bg-pink" />
          <div className="absolute right-[10%] top-[28%] h-14 w-14 border-2 border-foreground bg-yellow" />
          <div className="absolute right-[16%] bottom-[14%] h-12 w-20 border-2 border-foreground bg-blue" />
        </>
      )}
      {type === "vault" && (
        <>
          <div className="absolute left-[17%] top-[15%] h-[70%] w-[66%] border-2 border-foreground bg-[#17161e] shadow-[6px_6px_0_#111017]" />
          <div className="absolute left-[36%] top-[29%] h-20 w-20 border-4 border-green bg-transparent" />
          <div className="absolute left-[43%] top-[36%] h-12 w-12 bg-green" />
          <div className="absolute left-[12%] bottom-[13%] h-3 w-24 bg-purple" />
          <div className="absolute right-[10%] top-[16%] h-4 w-4 bg-pink" />
        </>
      )}
      {type === "flow" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#8a83c5] via-[#c5a9cf] to-[#e8b7ca]" />
          <div className="absolute left-[8%] top-[20%] h-24 w-[34%] border-2 border-foreground bg-lavender" />
          <div className="absolute left-[38%] top-[12%] h-32 w-[28%] border-2 border-foreground bg-purple" />
          <div className="absolute right-[8%] top-[29%] h-24 w-[30%] border-2 border-foreground bg-blue" />
          <div className="absolute left-[22%] bottom-[13%] h-10 w-[57%] border-2 border-foreground bg-green" />
        </>
      )}
    </div>
  );
}

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
          {projects.map((project) => (
            <a
              key={project.no}
              href="#contact"
              className="group pixel-border bg-paper p-3 transition-transform hover:-translate-y-1"
            >
              <div className="flex min-h-[72px] items-start justify-between border-b-2 border-foreground pb-4">
                <div className="flex items-center gap-3">
                  <span className={`grid h-11 w-11 shrink-0 place-items-center border-2 border-foreground ${project.color} text-sm font-bold`}>
                    {project.no}
                  </span>
                  <div>
                    <h2 className="text-[15px] font-bold leading-tight md:text-[17px]">{project.title}</h2>
                    <p className="mt-1 text-[8px] uppercase leading-tight text-muted">{project.type}</p>
                  </div>
                </div>
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </div>

              <div className="mt-3">
                <PixelPreview type={project.visual} color={project.color} />
              </div>

              <div className="flex items-center justify-between pt-4 text-[8px] font-bold uppercase">
                <span>{project.stack}</span>
                <span className="text-blue">Open ↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
