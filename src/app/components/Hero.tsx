"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import cursor from "../../../public/images/icon1.png";
import lightning from "../../../public/images/icon2.png";
import profilepic from "../../../public/images/profile.png";
import { useTranslations } from "next-intl";


export const Hero = () => {
    const t = useTranslations('Hero');
    //old bg custom> gradient-custom

    return (
        <div
            id="hero"
            className="mt-20 relative overflow-clip"
        >
            <div>
                <div className="font-bold text-center mx-4 sm:mx-0">
                    <h1 className="text-5xl sm:text-8xl text-[#98B4CE]">{t('title')}</h1>
                    <h1 className="text-2xl sm:text-6xl text-[#E48A57] mt-4">
                        Sebastian Ruiz Avila
                    </h1>
                </div>

                <motion.div
                    className="hidden lg:block absolute xl:left-[170px] xl:top-[150px]"
                    drag
                >
                    <Image
                        src={cursor}
                        height={170}
                        width={170}
                        alt="Cursor"
                        draggable={false}
                        className=""
                    />
                </motion.div>

                <motion.div
                    className="hidden lg:block absolute sm:right-4 xl:right-[200px] top-[1px]"
                    drag
                >
                    <Image
                        src={lightning}
                        height={120}
                        width={120}
                        alt="Lightning"
                        draggable={false}
                        className=""
                    />
                </motion.div>

                <p className="text-center text-[14px] sm:text-lg font-mono mx-4 sm:max-w-[650px] sm:mx-auto mt-8 text-white/80">
                    {t('description')}
                </p>
                <i>
                    <p className="text-center text-[9px] sm:text-[11px] font-mono mx-4 sm:max-w-[620px] sm:mx-auto mt-5 text-white/80">
                        {t('subdescription')}
                    </p>
                </i>

                <Image
                    src={profilepic}
                    alt="Profile Pircture"
                    className="h-1/2 w-1/2 mx-auto"
                />
            </div>
        </div>
    )
}