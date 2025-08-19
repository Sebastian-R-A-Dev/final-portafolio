import Image from "next/image";
import book from "../../../public/images/book.png";
import profile from "../../../public/images/perfil.png";
import gym from "../../../public/images/gym.png";
import cup from "../../../public/images/cup.png";
import { useTranslations } from "next-intl";

export const About = () => {
    const t = useTranslations('About');
    const cards = t.raw('cards');

    console.log(cards.card1);


    return (
        <>
            <div id="about-me" className="max-w-[980px] xl:max-w-[1200px] bg-[#171717] mx-auto">
                <h1 className="text-white text-center text-5xl sm:text-6xl
                                 font-semibold p-4 mb-4"
                >
                    {t('title')} <span className="text-orange-400">{t('subtitle')}</span>
                </h1>

                <div className="px-6 md:px-0 grid md:grid-cols-8 gap-6 place-content-center">

                    <div className="w-full md:col-span-4 relative bg-white/10 backdrop-blur-1g border border-white/20 rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800
                                    opacity-30 animate-gradient-xy" />
                        <div className="flex flex-row p-2 sm:p-6">
                            <Image
                                src={profile}
                                alt="card4"
                                className="hidden sm:block w-auto h-[70px] sm:h-[130px]"
                            />
                            <div className="flex flex-col mt-4 w-full sm:w-auto">
                                <h2 className="text-2xl text-center sm:text-left font-bold text-white/80">
                                    {cards.card1 && cards.card1.title}
                                </h2>
                                {
                                    cards.card1 &&
                                    cards.card1.texts.map((text: string, i: number) => (
                                        <p
                                            key={i}
                                            className="text-[14px] text-center sm:text-left
                                             sm:text-lg font-mono text-white/70 mt-2"
                                        >
                                            {text}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:col-span-4 relative bg-white/10 backdrop-blur-1g border border-white/20 rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800
                                    opacity-30 animate-gradient-xy" />
                        <div className="flex flex-row py-6 px-2">
                            <Image
                                src={book}
                                alt="card2"
                                className="hidden sm:block w-auto h-[70px] sm:h-[130px]"
                            />
                            <div className="flex flex-col mt-4 w-full sm:w-auto">
                                <h2 className="text-2xl text-center sm:text-left font-bold text-white/80">
                                    {cards.card2 && cards.card2.title}
                                </h2>
                                {
                                    cards.card2 &&
                                    cards.card2.texts.map((text: string, i: number) => (
                                        <p
                                            key={i}
                                            className="text-[14px] text-center sm:text-left
                                             sm:text-lg font-mono text-white/70 mt-2"
                                        >
                                            {text}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-1g border border-white/20 rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800
                                    opacity-30 animate-gradient-xy" />
                        <div className="flex flex-row py-6 px-2">
                            <Image
                                src={cup}
                                alt="card3"
                                className="hidden sm:block w-auto h-[70px] sm:h-[130px]"
                            />
                            <div className="flex flex-col mt-4 w-full sm:w-auto">
                                <h2 className="text-2xl text-center sm:text-left font-bold text-white/80">
                                    {cards.card3 && cards.card3.title}
                                </h2>
                                {
                                    cards.card3 &&
                                    cards.card3.texts.map((text: string, i: number) => (
                                        <p
                                            key={i}
                                            className="text-[14px] text-center sm:text-left
                                             sm:text-lg font-mono text-white/70 mt-2"
                                        >
                                            {text}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-1g border border-white/20 rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800
                                    opacity-30 animate-gradient-xy" />
                        <div className="flex flex-row p-6">
                            <Image
                                src={gym}
                                alt="card4"
                                className="hidden sm:block w-auto h-[70px] sm:h-[130px]"
                            />
                            <div className="flex flex-col mt-4 w-full sm:w-auto">
                                <h2 className="text-2xl text-center sm:text-left font-bold text-white/80">
                                    {cards.card4 && cards.card4.title}
                                </h2>
                                {
                                    cards.card4 &&
                                    cards.card4.texts.map((text: string, i: number) => (
                                        <p
                                            key={i}
                                            className="text-[14px] text-center sm:text-left
                                             sm:text-lg font-mono text-white/70 mt-2"
                                        >
                                            {text}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}