"use client"
import { useState } from "react"
import Modal from "react-modal"
import Image from "next/image"
import { useTranslations } from "next-intl"

type AnexesInfo = {
    img: string,
    label: string,
}

export const Anexes = () => {
    const t = useTranslations("Anexes")
    const anexes: AnexesInfo[] = t.raw('items')

    const [isOpen, setIsOpen] = useState(false)
    const [activeImage, setActiveImage] = useState<AnexesInfo | null>(null)

    const openModal = (img: AnexesInfo) => {
        setActiveImage(img)
        setIsOpen(true)
    }

    //old bg custom>bg-gradient-to-b from-[#171717] via-[#381a5F] to-[#171717]

    return (
        <div className="">
            <h1 className="text-white text-6xl text-center font-semibold mt-24">{t("title")}</h1>
            <p className="text-orange-400 mt-4 font-mono text-center">{t("subtitle")}</p>
            {/* Grid de tarjetas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 justify-items-center py-24 max-w-[1000px] mx-auto">
                {Array.isArray(anexes) && anexes.map((item, i) => (
                    <div
                        key={i}
                        className="w-[90%] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#171717] rounded-lg p-4 flex flex-col items-center cursor-pointer hover:scale-105 transition"
                        onClick={() => openModal(item)}
                    >
                        <Image
                            src={item.img}
                            alt={item.label}
                            width={400}
                            height={320}
                            className="w-full h-[80%] object-contain rounded-md"
                        />
                        <span className="text-orange-400 mt-2">{item.label}</span>
                    </div>
                ))}
            </div>
            {/* Modal */}
            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                className="relative w-[90%] sm:w-[70%] lg:w-[70vh] 2xl:w-[50%] bg-black rounded-lg p-4 outline-none mx-auto"
                overlayClassName="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            >
                {activeImage && (
                    <div className="flex flex-col items-center">
                        <Image
                            src={activeImage.img}
                            alt={activeImage.label}
                            width={400}
                            height={320}
                            className="w-full h-full rounded-lg"
                        />
                    </div>
                )}
            </Modal>
        </div>
    )
}
