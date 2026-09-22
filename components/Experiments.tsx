const items = [
  ["EXP / 01","Interface studies","Layout, motion, typography, interaction.","bg-pink"],
  ["EXP / 02","Systems & tooling","Developer workflows, architecture, useful tools.","bg-lavender"],
  ["EXP / 03","Visual computing","WebAssembly, graphics, 3D, browser experiments.","bg-yellow"],
  ["EXP / 04","Learning in public","DSA, engineering notes, tiny experiments.","bg-green"],
];

export default function Experiments() {
  return (
    <section id="experiments" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-10 grid gap-6 border-t-2 border-foreground pt-4 md:grid-cols-[1fr_1.4fr]">
          <div className="text-sm font-bold uppercase">03 / Experiments</div>
          <p className="max-w-2xl text-xl font-semibold leading-tight md:text-2xl">The lab is where unfinished ideas become interesting.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {items.map(([code,title,text,color]) => (
            <article key={code} className="pixel-border group relative min-h-[260px] overflow-hidden bg-paper p-6">
              <div className={`absolute right-5 top-5 h-16 w-16 border-2 border-foreground ${color} transition-transform group-hover:rotate-45`} />
              <span className="text-[10px] font-bold uppercase">{code}</span>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-3xl font-bold tracking-[-0.06em]">{title}</h3>
                <p className="mt-3 max-w-md text-xs leading-5 text-muted">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
