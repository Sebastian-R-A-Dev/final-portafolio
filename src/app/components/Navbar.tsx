"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

type NavItems = {
    value: string,
    url: string
};

export const Navbar = () => {
    const t = useTranslations('Navbar');
    const pathname = usePathname();
    const items: NavItems[] = t.raw('items');

    const [nav, setNav] = useState(false);

    const toogleNav = () => {
        setNav(!nav);
    }

    const closeNav = () => {
        setNav(false);
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15
            }
        }
    };

    return (
        <div className="text-white/70 pt-6">
            <div
                className="hidden md:flex items-center justify-between 
                            px-4 py-2 mx-auto max-w-[700px]"
            >
                <ul className="flex flex-row p-4 space-x-8">
                    {
                        items.map((link, i) => (
                            <li key={i}>
                                <Link href={link.url}>
                                    <p>
                                        {link.value}
                                    </p>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="flex gap-6">
                    <Link href={pathname} locale="en">EN</Link>
                    <Link href={pathname} locale="es">ES</Link>
                </div>
            </div>

            {/*mobile menu! */}
            <div
                onClick={toogleNav}
                className="md:hidden absolute top-5 right-5 border rounded
                     text-white/70 border-white/70 p-2 z-50"
            >
                {
                    nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />
                }
            </div>
            <motion.div
                initial={false}
                animate={nav ? 'open' : 'closed'}
                variants={menuVariants}
                className="fixed left-0 top-0 w-full z-40 bg-black/90"
            >
                <ul className="text-4xl font-semibold my-24 text-center space-y-8">
                    {
                        items.map((link, i) => (
                            <li key={i}>
                                <Link href={link.url} onClick={closeNav}>
                                    {link.value}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="flex justify-center text-4xl mb-8 gap-6">
                    <Link href={pathname} locale="en">EN</Link>
                    <Link href={pathname} locale="es">ES</Link>
                </div>
            </motion.div>
        </div>
    )
}