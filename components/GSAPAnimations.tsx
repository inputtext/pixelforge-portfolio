"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPAnimations() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const context = gsap.context(() => {
      const hero = document.querySelector("#top");
      if (hero) {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from("#top .pixel-avatar", { scale: 0.72, opacity: 0, duration: 0.55 })
          .from("#top h1", { y: 34, opacity: 0, duration: 0.8 }, "-=0.28")
          .from("#top p", { y: 18, opacity: 0, duration: 0.55 }, "-=0.42")
          .from("#top .pixel-button", { y: 14, opacity: 0, duration: 0.45, stagger: 0.08 }, "-=0.25");
      }

      const reveal = (
        selector: string,
        trigger: string,
        options: { y?: number; x?: number; stagger?: number; duration?: number } = {},
      ) => {
        gsap.from(selector, {
          y: options.y ?? 34,
          x: options.x ?? 0,
          opacity: 0,
          duration: options.duration ?? 0.72,
          stagger: options.stagger ?? 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger,
            start: "top 78%",
            once: true,
          },
        });
      };

      reveal("#work .group.pixel-border", "#work", { y: 48, stagger: 0.12 });
      reveal("#experiments article", "#experiments", { y: 42, stagger: 0.12 });
      reveal("#about h2", "#about", { y: 38, duration: 0.8 });
      reveal("#about .border-y-2 > div", "#about .border-y-2", { x: -28, stagger: 0.1 });
      reveal("#contact .pixel-artboard", "#contact", { y: 46, duration: 0.85 });

      gsap.from("#work .mb-10, #experiments .mb-10", {
        opacity: 0,
        x: -24,
        duration: 0.55,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#work",
          start: "top 84%",
          once: true,
        },
      });

      gsap.to("#contact .pixel-artboard > .pixel-grid > div:first-child", {
        rotation: 3,
        x: 12,
        y: 8,
        ease: "none",
        scrollTrigger: {
          trigger: "#contact",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    });

    return () => context.revert();
  }, []);

  return null;
}
