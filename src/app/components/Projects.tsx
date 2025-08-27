"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

type Projects = {
    title: string;
    description: string;
    smallDescription: string;
    devStack: string;
    links: Link[];
    image: string;
}

type Link = {
    title: string;
    url: string;
}

export const Projects = () => {

    const t = useTranslations('Projects');
    const projects: Projects[] = t.raw('items');

    console.log(projects)

    return (
        <div className='text-white bg-gradient-to-b from-[#171717] to-[#381a5F] mt-20' id='projects'>
            <h1 className="text-white mx-4 sm:mx-0 text-5xl sm:text-6xl text-center font-semibold">
                {t('title')} <span className="text-orange-400 break-words">{t('subtitle')}</span>
            </h1>

            <div className='px-4 sm:px-6 md-px-0 max-w-[1000px] mx-auto mt-20 space-y-24'>
                {
                    projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 75 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className={`mt-12 flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row"}`}
                        >

                            <div className='space-y-2 max-w-[550px]'>
                                <h2 className='text-7xl mb-4 text-white/70'>{`0${i + 1}`}</h2>
                                <h2 className='text-4xl'>{project.title}</h2>
                                <p className='sm:text-lg text-white/70 break-words pt-4 pr-6'>{project.description}</p>
                                <i>
                                    <p className='text-[10px] pb-4'>
                                        {project.smallDescription}
                                    </p>
                                </i>
                                <p className='text-lg sm:text-xl text-orange-400 font-semibold'>{project.devStack}</p>
                                <div className='w-64 h-[1px] bg-gray-400 my-4' />
                                {
                                    project.links.map((link, i) => (
                                        <a key={i} target='_blank' href={link.url} className='mr-6'>{link.title}</a>
                                    ))
                                }
                            </div>

                            <div>
                                <Image
                                    className='h-[350px] w-[500px] border rounded border-gray-700'
                                    src={project.image}
                                    width={500}
                                    height={350}
                                    alt={project.title}
                                />
                            </div>

                        </motion.div>
                    ))
                }
            </div>
        </div>
    );
}