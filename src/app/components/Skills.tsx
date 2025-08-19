import { useTranslations } from "next-intl";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAngular, FaAws, FaCss3Alt, FaGitAlt, FaHtml5, FaJava, FaJsSquare, FaPython } from "react-icons/fa"
import { RiNextjsFill } from "react-icons/ri"
import { SiAmazondynamodb, SiExpress, SiNestjs, SiPhp } from "react-icons/si";

const iconClass = "w-[115px] h-[115px] sm:w-[140px] sm:h-[140px]"

const skillIcons = [
    { icon: <FaHtml5 className={iconClass} />, label: "HTML" },
    { icon: <FaCss3Alt className={iconClass} />, label: "CSS" },
    { icon: <FaJsSquare className={iconClass} />, label: "JavaScript" },
    { icon: <SiPhp className={iconClass} />, label: "PHP" },
    { icon: <FaPython className={iconClass} />, label: "Python" },
    { icon: <RiNextjsFill className={iconClass} />, label: "Next" },
    { icon: <FaAngular className={iconClass} />, label: "Angular" },
    { icon: <FaJava className={iconClass} />, label: "Java" },
    { icon: <SiNestjs className={iconClass} />, label: "Nestjs" },
    { icon: <SiExpress className={iconClass} />, label: "Expressjs" },
    { icon: <FaAws className={iconClass} />, label: "AWS Services" },
    { icon: <BiLogoPostgresql className={iconClass} />, label: "PSQL" },
    { icon: <SiAmazondynamodb className={iconClass} />, label: "DynamoDb" },
    { icon: <FaGitAlt className={iconClass} />, label: "Git" },
]

export const Skills = () => {
    const t = useTranslations('tecnologies');
    return (
        <div className="bg-[linear-gradient(to_top,#171717,#381a5f_80%)] pt-20">
            <div id="technologies" className="text-white max-w-[900px] lg:max-w-[950px] mx-auto px-4 sm:p-8 text-center">
                <h2 className="text-5xl sm:text-6xl text-center font-bold mb-20">{t('title')}</h2>
                <div className="grid justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        skillIcons.map((skill, i) => (
                            <div
                                key={i}
                                className="sm:h-[220px] sm:w-[220px] flex flex-col justify-between 
                                           items-center bg-white/10 p-2 sm:p-4 rounded-xl"
                            >
                                {skill.icon}
                                <p className="mt-2 font-mono">
                                    {skill.label}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}