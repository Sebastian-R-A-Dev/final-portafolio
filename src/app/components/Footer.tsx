"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  const t = useTranslations("Contact");
  const whatsappUrl = `https://wa.me/573002931945?text=${encodeURIComponent(t("whatsappMessage"))}`;

  return (
    <footer className="mx-auto mt-12 flex max-w-[1000px] items-center justify-between border-t border-gray-700 px-6 py-8 text-white/70 md:px-0">
      <Link href="/">
        <h1 className="font-mono font-bold sm:text-2xl">Sebastian Ruiz Avila</h1>
      </Link>
      <div className="mt-4 flex space-x-4 sm:space-x-6">
        <a
          href="https://www.linkedin.com/in/sebastian-de-jesus-ruiz-avila-050684245/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition hover:text-cyan-400"
        >
          <FaLinkedin className="h-6 w-6 sm:h-[24px] sm:w-[24px]" />
        </a>
        <a
          href="https://github.com/Sebastian-R-A-Dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transition hover:text-cyan-400"
        >
          <FaGithub className="h-6 w-6 sm:h-[24px] sm:w-[24px]" />
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="transition hover:text-cyan-400"
        >
          <FaWhatsapp className="h-6 w-6 sm:h-[24px] sm:w-[24px]" />
        </a>
      </div>
    </footer>
  );
};
