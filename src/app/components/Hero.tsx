"use client";

import { useTranslations } from "next-intl";
import { ScrollReveal } from "./ScrollReveal";

export const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="relative mt-24 flex min-h-[70vh] items-center justify-center px-4 sm:px-6"
    >
      <ScrollReveal className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400/80">
          Software Engineer
        </p>
        <h1 className="text-4xl font-bold text-white sm:text-6xl lg:text-7xl">
          {t("title")}{" "}
          <span className="accent-gradient-text">Sebastian Ruiz Avila</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
          {t("description")}
        </p>
        <blockquote className="mx-auto mt-6 max-w-xl border-l-2 border-cyan-400/50 pl-4 text-left text-xs italic text-white/55 sm:text-sm">
          {t("subdescription")}
        </blockquote>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-white/50 sm:text-sm">
          <span className="glass-card rounded-full px-4 py-2">Cartagena, Colombia</span>
          <span className="glass-card rounded-full px-4 py-2">Java · Node.js · AWS · Next.js</span>
        </div>
      </ScrollReveal>
    </section>
  );
};
