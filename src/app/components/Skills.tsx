"use client";

import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "./ScrollReveal";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaAngular,
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiAmazondynamodb,
  SiExpress,
  SiNestjs,
  SiOpenai,
  SiPhp,
  SiTerraform,
} from "react-icons/si";
import { TbBrandGoogle } from "react-icons/tb";

const iconClass = "h-14 w-14 sm:h-16 sm:w-16";

const skillIcons = [
  { icon: <FaHtml5 className={iconClass} />, label: "HTML" },
  { icon: <FaCss3Alt className={iconClass} />, label: "CSS" },
  { icon: <FaJsSquare className={iconClass} />, label: "JavaScript" },
  { icon: <FaReact className={iconClass} />, label: "React" },
  { icon: <RiNextjsFill className={iconClass} />, label: "Next.js" },
  { icon: <FaAngular className={iconClass} />, label: "Angular" },
  { icon: <FaJava className={iconClass} />, label: "Java" },
  { icon: <SiNestjs className={iconClass} />, label: "NestJS" },
  { icon: <SiExpress className={iconClass} />, label: "Express" },
  { icon: <SiPhp className={iconClass} />, label: "PHP" },
  { icon: <FaPython className={iconClass} />, label: "Python" },
  { icon: <FaAws className={iconClass} />, label: "AWS" },
  { icon: <BiLogoPostgresql className={iconClass} />, label: "PostgreSQL" },
  { icon: <SiAmazondynamodb className={iconClass} />, label: "DynamoDB" },
  { icon: <FaDocker className={iconClass} />, label: "Docker" },
  { icon: <SiTerraform className={iconClass} />, label: "Terraform" },
  { icon: <FaGitAlt className={iconClass} />, label: "Git" },
  { icon: <SiOpenai className={iconClass} />, label: "ChatGPT" },
  {
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2L3 7v10l9 5 9-5V7L12 2zm0 2.2l6.5 3.6v7.2L12 18.6l-6.5-3.6V7.8L12 4.2z" />
        <path d="M12 8.5L8 10.5v4L12 16.5l4-2v-4L12 8.5z" opacity="0.7" />
      </svg>
    ),
    label: "Cursor IDE",
  },
  { icon: <TbBrandGoogle className={iconClass} />, label: "Gemini" },
];

function SkillItem({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="mx-3 flex w-32 shrink-0 flex-col items-center gap-2 sm:w-36">
      <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80 transition hover:border-cyan-400/30 hover:text-cyan-400 sm:h-28 sm:w-28">
        {icon}
      </div>
      <p className="text-center text-xs font-medium text-cyan-400/90 sm:text-sm">
        {label}
      </p>
    </div>
  );
}

export const Skills = () => {
  const t = useTranslations("tecnologies");
  const doubled = [...skillIcons, ...skillIcons];

  return (
    <section id="technologies" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <ScrollReveal className="text-center">
        <h2 className="text-4xl font-bold text-white sm:text-5xl">
          {t("title")}
        </h2>
        <p className="mt-3 text-sm text-white/50">{t("subtitle")}</p>
      </ScrollReveal>

      <div className="relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent sm:w-20" />

        <div className="flex w-max animate-marquee items-center py-4">
          {doubled.map((skill, i) => (
            <SkillItem key={`${skill.label}-${i}`} icon={skill.icon} label={skill.label} />
          ))}
        </div>
      </div>
    </section>
  );
};
