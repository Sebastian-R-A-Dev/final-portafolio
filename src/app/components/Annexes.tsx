"use client";

import { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "./ScrollReveal";

type AnexesInfo = {
  img: string;
  label: string;
};

export const Anexes = () => {
  const t = useTranslations("Anexes");
  const anexes: AnexesInfo[] = t.raw("items");

  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<AnexesInfo | null>(null);

  const openModal = (img: AnexesInfo) => {
    setActiveImage(img);
    setIsOpen(true);
  };

  const doubled = [...anexes, ...anexes];

  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <ScrollReveal className="text-center">
        <h2 className="text-4xl font-bold text-white sm:text-5xl">
          {t("title")}
        </h2>
        <p className="mt-3 text-sm text-white/50">{t("subtitle")}</p>
      </ScrollReveal>

      <div className="relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent sm:w-20" />

        <div className="flex w-max animate-annex-carousel gap-6">
          {doubled.map((item, i) => (
            <button
              key={`${item.label}-${i}`}
              type="button"
              onClick={() => openModal(item)}
              className="group relative h-56 w-64 shrink-0 overflow-hidden rounded-2xl border border-white/10 sm:h-72 sm:w-80"
            >
              <Image
                src={item.img}
                alt={item.label}
                fill
                className="object-cover blur-md transition duration-500 group-hover:blur-sm"
                sizes="320px"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/40 px-4 backdrop-blur-[2px] transition group-hover:bg-white/50">
                <span className="rounded-lg border border-black/10 bg-white/80 px-4 py-2 text-center text-xs font-medium text-black sm:text-sm">
                  {t("clickHint")}
                </span>
                <span className="mt-3 text-sm font-semibold text-black">
                  {item.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="relative mx-auto w-[90%] max-w-3xl rounded-xl bg-black p-4 outline-none"
        overlayClassName="fixed inset-0 z-50 flex items-center justify-center bg-black/85"
      >
        {activeImage && (
          <div className="flex flex-col items-center gap-4">
            <Image
              src={activeImage.img}
              alt={activeImage.label}
              width={900}
              height={700}
              className="max-h-[80vh] w-auto rounded-lg object-contain"
            />
            <p className="text-cyan-400">{activeImage.label}</p>
          </div>
        )}
      </Modal>
    </section>
  );
};
