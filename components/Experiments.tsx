const experiments = [
  {
    code: "EXP-01",
    title: "Interface studies",
    text: "Small explorations in layout, motion, typography, and interaction.",
  },
  {
    code: "EXP-02",
    title: "Systems & tooling",
    text: "Experiments around developer workflows, architecture, and useful internal tools.",
  },
  {
    code: "EXP-03",
    title: "Visual computing",
    text: "Playing with WebAssembly, graphics, 3D interfaces, and the browser as a medium.",
  },
];

export default function Experiments() {
  return (
    <section id="experiments" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex flex-col justify-between gap-8 border-t border-border pt-5 md:flex-row md:items-start">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-text-muted">
            <span className="font-mono">02</span>
            <span>Experiments / Lab</span>
          </div>

          <p className="max-w-xl text-xl leading-7 tracking-[-0.02em] text-text-secondary md:text-2xl">
            Not everything needs to become a product. Some ideas are worth
            building simply to understand what is possible.
          </p>
        </div>

        <div className="grid border-t border-border md:grid-cols-3">
          {experiments.map((experiment, index) => (
            <article
              key={experiment.code}
              className="group relative min-h-[260px] border-b border-border p-6 md:min-h-[320px] md:border-b-0 md:border-r md:p-8 md:last:border-r-0"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] tracking-[0.18em] text-text-muted">
                  {experiment.code}
                </span>

                <span className="grid h-8 w-8 grid-cols-2 grid-rows-2 gap-px border border-border p-1 transition-transform duration-500 group-hover:rotate-90">
                  <span className="bg-accent" />
                  <span className="bg-border" />
                  <span className="bg-border" />
                  <span className="bg-accent-green" />
                </span>
              </div>

              <div className="absolute inset-x-6 bottom-8 md:inset-x-8">
                <h3 className="text-2xl font-medium tracking-[-0.04em] text-text-primary md:text-3xl">
                  {experiment.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-text-secondary">
                  {experiment.text}
                </p>
              </div>

              <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
