"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "./ScrollReveal";
import { FaExternalLinkAlt } from "react-icons/fa";

type ProjectLink = { title: string; url: string };

type Project = {
  title: string;
  description: string;
  devStack: string;
  links: ProjectLink[];
  gradient: string;
};

export const Projects = () => {
  const t = useTranslations("Projects");
  const projects: Project[] = t.raw("items");

  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <ScrollReveal>
        <h2 className="text-center text-4xl font-bold text-white sm:text-5xl">
          {t("title")}{" "}
          <span className="accent-gradient-text">{t("subtitle")}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/55">
          {t("intro")}
        </p>
      </ScrollReveal>

      <div className="mt-14 space-y-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <article
              className={`group glass-card flex flex-col gap-6 overflow-hidden rounded-2xl p-6 transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)] md:p-8 ${
                i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div
                className={`flex h-40 w-full shrink-0 items-center justify-center rounded-xl bg-gradient-to-br transition-all duration-300 group-hover:brightness-110 md:h-auto md:w-48 ${project.gradient}`}
              >
                <span className="text-5xl font-bold text-white/20 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.7)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex-1 space-y-3">
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                  {project.description}
                </p>
                <p className="text-sm font-medium text-cyan-400">
                  {project.devStack}
                </p>
                {project.links.length > 0 && (
                  <div className="flex flex-wrap gap-4 pt-2">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-cyan-400 transition hover:text-cyan-300"
                      >
                        {link.title}
                        <FaExternalLinkAlt className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
