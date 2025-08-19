import { Link } from '@/i18n/navigation';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer
            className='px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px]
                        mx-auto border-t border-gray-700 pt-4 flex justify-between 
                        items-center'
        >
            <Link href='/'>
                <h1 className='sm:text-2xl font-bold font-mono'>Sebastian Ruiz Avila</h1>
            </Link>
            <div className='flex space-x-4 sm:space-x-6 mt-4'>
                <a
                    href='https://www.linkedin.com/in/sebastian-de-jesus-ruiz-avila-050684245/'
                    target='_blank'
                    className='hover:text-gray-300'
                >
                    <FaLinkedin className='sm:w-[24px] sm:h-[24px]' />
                </a>
                <a
                    href='https://x.com/Sebasti53308117'
                    target='_blank'
                    className='hover:text-gray-300'
                >
                    <FaTwitter className='sm:w-[24px] sm:h-[24px]' />
                </a>
                <a
                    href='https://www.instagram.com/sebastian_ruiz_avila/?next=%2F'
                    target='_blank'
                    className='hover:text-gray-300'
                >
                    <FaInstagram className='sm:w-[24px] sm:h-[24px]' />
                </a>
            </div>
        </footer>
    )
}