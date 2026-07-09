"use client";

import { useTranslations } from "next-intl";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { ScrollReveal } from "./ScrollReveal";

type InputsTy = {
  name: string;
  type: string;
  placeholder: string;
};

export const Contact = () => {
  const t = useTranslations("Contact");
  const inputs: InputsTy[] = t.raw("inputs");
  const whatsappUrl = `https://wa.me/573002931945?text=${encodeURIComponent(t("whatsappMessage"))}`;

  return (
    <section id="contact-me" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <ScrollReveal>
        <h2 className="text-center text-4xl font-bold text-white sm:text-5xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-white/55">
          {t("text")}
        </p>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <ScrollReveal delay={0.1} className="flex">
          <div className="glass-card flex w-full flex-col justify-center gap-4 rounded-2xl p-6 sm:p-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-400/40"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10">
                <FaWhatsapp className="h-6 w-6 text-cyan-400" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-white/45">
                  WhatsApp
                </p>
                <p className="truncate font-mono text-sm text-white/80 group-hover:text-white sm:text-base">
                  +57 300 293 1945
                </p>
              </div>
            </a>

            <a
              href="mailto:sebastianruizavila47@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-400/40"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10">
                <FaEnvelope className="h-5 w-5 text-cyan-400" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-white/45">
                  Email
                </p>
                <p
                  title="sebastianruizavila47@gmail.com"
                  className="truncate font-mono text-sm text-white/80 group-hover:text-white sm:text-base"
                >
                  sebastianruizavila47@gmail.com
                </p>
              </div>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="flex">
          <div className="glass-card w-full rounded-2xl p-6 sm:p-8">
            <form
              action="https://getform.io/f/avrydxma"
              method="POST"
              className="space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {Array.isArray(inputs) &&
                  inputs.map((input: InputsTy, i: number) => (
                    <input
                      key={i}
                      type={input.type}
                      name={input.name}
                      required
                      className="w-full rounded-xl border border-white/10 bg-black/40 p-3 font-mono text-sm text-white placeholder:text-white/40 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/50"
                      placeholder={input.placeholder}
                    />
                  ))}
              </div>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full rounded-xl border border-white/10 bg-black/40 p-3 font-mono text-sm text-white placeholder:text-white/40 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/50"
                placeholder={t("text_area.placeholder")}
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 font-mono font-semibold text-white transition hover:from-cyan-400 hover:to-violet-400"
              >
                {t("send_button")}
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
