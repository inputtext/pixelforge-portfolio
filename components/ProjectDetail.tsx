"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

type Project = {
  no: string;
  title: string;
  type: string;
  intro: string;
  color: string;
  stack: readonly string[];
  status: string;
  problem: string;
  build: string;
  features: readonly string[];
  architecture: readonly string[];
  challenges: readonly string[];
  learned: string;
  github: string;
  live?: string;
};

function PixelArchitecture({ project }: { project: Project }) {
  return (
    <div className="pixel-grid overflow-hidden border-2 border-foreground bg-[#17161e] p-4 md:p-6">
      <div className="mb-4 flex items-center justify-between border-b-2 border-[#3a3746] pb-3 font-mono text-[8px] uppercase text-[#b8b5c7]">
        <span>system.map</span>
        <span className="text-[#a8dec4]">● online</span>
      </div>
      <div className="grid gap-2 md:grid-cols-2">
        {project.architecture.map((item, index) => (
          <div key={item} className="border-2 border-[#494555] bg-[#20202b] p-3 text-[9px] font-bold uppercase text-[#e7e2f0]">
            <span className="mr-3 text-[#9963e9]">{String(index + 1).padStart(2, "0")}</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectDetail({ project }: { project: Project }) {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-detail-reveal", {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.07,
        ease: "power3.out",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={root} className="min-h-screen px-5 pb-16 pt-6 md:px-10 md:pt-8">
      <div className="mx-auto max-w-[1180px]">
        <header className="mb-8 flex items-center justify-between border-b-2 border-foreground pb-4">
          <Link href="/#work" className="pixel-button inline-flex items-center gap-2 bg-paper px-4 py-3 text-[10px] font-bold uppercase">
            <ArrowLeft size={13} strokeWidth={3} />
            Back to work
          </Link>
          <span className="text-[9px] font-bold uppercase">PixelForge / Case Study</span>
        </header>

        <section className="project-detail-reveal pixel-artboard bg-lavender p-3 md:p-5">
          <div className="pixel-grid overflow-hidden border-2 border-foreground bg-paper">
            <div className="grid gap-8 p-6 md:grid-cols-[1.25fr_.75fr] md:p-10">
              <div>
                <div className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase">
                  <span className={"grid h-9 w-9 place-items-center border-2 border-foreground " + project.color}>
                    {project.no}
                  </span>
                  {project.status}
                </div>
                <h1 className="max-w-4xl text-[clamp(3.6rem,9vw,8rem)] font-bold leading-[.78] tracking-[-.08em]">
                  {project.title}
                </h1>
                <p className="mt-7 max-w-2xl text-sm font-bold uppercase leading-6">{project.type}</p>
                <p className="mt-5 max-w-2xl text-sm leading-6 text-muted">{project.intro}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="pixel-button inline-flex items-center gap-2 bg-foreground px-5 py-3 text-[10px] font-bold uppercase text-white">
                    GitHub ↗
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="pixel-button inline-flex items-center gap-2 bg-green px-5 py-3 text-[10px] font-bold uppercase">
                      Live project
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>

              <div className={"pixel-grid min-h-64 border-2 border-foreground " + project.color}>
                <div className="flex h-full min-h-64 items-end p-5">
                  <div className="w-full border-2 border-foreground bg-[#17161e] p-4 shadow-[6px_6px_0_#111017]">
                    <div className="mb-3 flex justify-between border-b-2 border-[#373544] pb-2 font-mono text-[7px] text-[#aaa6b8]">
                      <span>project.info</span>
                      <span className="text-[#a8dec4]">BUILD</span>
                    </div>
                    <div className="space-y-2 font-mono text-[8px] text-[#d5d2de]">
                      <p><span className="text-[#9963e9]">status</span> = <span className="text-[#a8dec4]">&quot;{project.status.toLowerCase()}&quot;</span></p>
                      <p><span className="text-[#9963e9]">stack</span> = <span className="text-[#e8b7ca]">{project.stack.length} modules</span></p>
                      <p><span className="text-[#9963e9]">mode</span> = <span className="text-[#7f9ee8]">&quot;shipping&quot;</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-[1fr_1.25fr]">
          <div className="project-detail-reveal">
            <p className="text-[10px] font-bold uppercase">01 / The problem</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-.05em]">WHY IT EXISTS.</h2>
          </div>
          <p className="project-detail-reveal text-sm leading-7 text-muted">{project.problem}</p>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-[1fr_1.25fr]">
          <div className="project-detail-reveal">
            <p className="text-[10px] font-bold uppercase">02 / The build</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-.05em]">WHAT I BUILT.</h2>
          </div>
          <div>
            <p className="project-detail-reveal text-sm leading-7 text-muted">{project.build}</p>
            <div className="project-detail-reveal mt-7 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="border-2 border-foreground bg-paper px-3 py-2 text-[9px] font-bold uppercase">{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="project-detail-reveal border-2 border-foreground bg-paper p-6">
            <p className="text-[10px] font-bold uppercase">03 / Features</p>
            <div className="mt-5 space-y-4">
              {project.features.map((feature, index) => (
                <div key={feature} className="flex gap-3 border-b border-foreground/30 pb-3 text-xs leading-5">
                  <span className="font-bold text-purple">{String(index + 1).padStart(2, "0")}</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="project-detail-reveal">
            <p className="mb-3 text-[10px] font-bold uppercase">04 / Architecture</p>
            <PixelArchitecture project={project} />
          </div>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="project-detail-reveal border-2 border-foreground bg-[#17161e] p-6 text-white">
            <p className="text-[10px] font-bold uppercase text-[#a8dec4]">05 / Challenges</p>
            <div className="mt-5 space-y-4">
              {project.challenges.map((challenge, index) => (
                <p key={challenge} className="text-xs leading-6 text-[#d5d2de]">
                  <span className="mr-3 text-[#e8b7ca]">{String(index + 1).padStart(2, "0")}</span>
                  {challenge}
                </p>
              ))}
            </div>
          </div>

          <div className="project-detail-reveal border-2 border-foreground bg-lavender p-6">
            <p className="text-[10px] font-bold uppercase">06 / What I learned</p>
            <p className="mt-5 text-sm font-semibold leading-7">{project.learned}</p>
          </div>
        </section>

        <footer className="mt-16 flex flex-col gap-4 border-t-2 border-foreground pt-5 md:flex-row md:items-center md:justify-between">
          <Link href="/#work" className="text-[10px] font-bold uppercase">← All projects</Link>
          <span className="text-[9px] font-bold uppercase">PixelForge / {project.title}</span>
        </footer>
      </div>
    </main>
  );
}
