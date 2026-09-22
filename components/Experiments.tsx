const items = [
  ["EXP / 01", "Interface studies", "Layout, motion, typography, interaction."],
  ["EXP / 02", "Systems & tooling", "Developer workflows, architecture, useful tools."],
  ["EXP / 03", "Visual computing", "WebAssembly, graphics, 3D, browser experiments."],
  ["EXP / 04", "Learning in public", "DSA, engineering notes, tiny experiments."],
];

export default function Experiments() {
  return (
    <section id="experiments" className="px-5 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-8 border-t editorial-rule pt-4 md:grid-cols-[1fr_1.4fr]">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            03 / Experiments
          </div>
          <p className="max-w-2xl text-xl leading-7 text-muted md:text-2xl">
            The lab is where unfinished ideas are allowed to become interesting.
          </p>
        </div>

        <div className="mt-12 grid border-t editorial-rule md:grid-cols-2">
          {items.map(([code, title, text], index) => (
            <article
              key={code}
              className="group relative min-h-[250px] border-b editorial-rule p-6 md:min-h-[310px] md:p-8 md:[&:nth-child(odd)]:border-r"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">{code}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 transition-transform duration-500 group-hover:rotate-45">
                  <span className={`h-2.5 w-2.5 rounded-full ${index % 2 ? "bg-green" : "bg-purple"}`} />
                </span>
              </div>

              <div className="absolute bottom-8 left-6 right-6 md:left-8 md:right-8">
                <h3 className="text-2xl font-medium tracking-[-0.05em] md:text-4xl">{title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-muted">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
