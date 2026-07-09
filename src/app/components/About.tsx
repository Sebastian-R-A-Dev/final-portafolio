"use client";

import { useState, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "./ScrollReveal";
import {
  FaBriefcase,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaLanguage,
  FaRocket,
} from "react-icons/fa";

type CardKey = "card1" | "card2" | "card3" | "card4";

const cardIcons: Record<CardKey, ReactNode> = {
  card1: <FaBriefcase className="h-6 w-6 text-cyan-400" />,
  card2: <FaGraduationCap className="h-6 w-6 text-cyan-400" />,
  card3: <FaLanguage className="h-6 w-6 text-cyan-400" />,
  card4: <FaRocket className="h-6 w-6 text-cyan-400" />,
};

const cardKeys: CardKey[] = ["card1", "card2", "card3", "card4"];

export const About = () => {
  const t = useTranslations("About");
  const cards = t.raw("cards") as Record<
    CardKey,
    { title: string; preview: string; texts: string[] }
  >;
  const [expanded, setExpanded] = useState<CardKey | null>(null);
  const cvUrl = t("cvUrl");

  const toggle = (key: CardKey) => {
    setExpanded((prev) => (prev === key ? null : key));
  };

  return (
    <section id="about-me" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <ScrollReveal>
        <h2 className="text-center text-4xl font-bold text-white sm:text-5xl">
          {t("title")}{" "}
          <span className="accent-gradient-text">{t("subtitle")}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-white/55">
          {t("hint")}
        </p>
      </ScrollReveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {cardKeys.map((key, i) => {
          const card = cards[key];
          const isOpen = expanded === key;

          return (
            <ScrollReveal key={key} delay={i * 0.1}>
              <div
                className={`glass-card group w-full rounded-2xl transition-all duration-300 ${
                  isOpen ? "border-cyan-400/40 bg-white/[0.06]" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(key)}
                  className="w-full p-6 text-left"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10">
                        {cardIcons[key]}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {card.title}
                        </h3>
                        <p className="mt-1 text-sm text-white/50">
                          {card.preview}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`mt-1 text-cyan-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </div>

                  {!isOpen && (
                    <p className="mt-4 text-xs text-cyan-400/70 group-hover:text-cyan-400">
                      {t("tapToExpand")}
                    </p>
                  )}
                </button>

                <div
                  className={`grid px-6 transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] pb-6 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-2 border-t border-white/10 pt-4">
                      {card.texts.map((text, j) => (
                        <li
                          key={j}
                          className="text-sm leading-relaxed text-white/70"
                        >
                          {text}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                    >
                      {t("viewCv")}
                      <FaExternalLinkAlt className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};
