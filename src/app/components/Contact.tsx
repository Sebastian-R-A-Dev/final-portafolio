import Image from 'next/image';
import phone from '../../../public/images/phone.png';
import mail from '../../../public/images/mail.png';
import { useTranslations } from 'next-intl';

type InputsTy = {
    name: string,
    type: string,
    placeholder: string,
}

export const Contact = () => {

    const t = useTranslations('Contact');
    const inputs: InputsTy[] = t.raw('inputs');

    return (
        <div
            className='max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 px-4 sm:px-0 sm:p-8
                        rounded-lg space-y-8 lg:space-y-0 lg:space-x-12 mt-20'
            id='contact-me'
        >

            <div className='flex justify-center items-center'>
                <ul className='space-y-4'>
                    <a
                        href="https://wa.me/573002931945?text=Hola%2C%20he%20visto%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20ponerme%20en%20contacto%20contigo."
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <li className="flex items-center">
                            <Image
                                src={phone}
                                alt="phone"
                                className="h-[110px] w-auto mr-6"
                            />
                            <p className="text-base sm:text-xl font-mono">3002931945</p>
                        </li>
                    </a>
                    <a
                        href="mailto:sebastianruizavila47@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <li className="flex items-center">
                            <Image
                                src={mail}
                                alt="mail"
                                className="h-[110px] w-auto mr-6"
                            />
                            <p
                                title='sebastianruizavila47@gmail.com'
                                className="text-base sm:text-xl font-mono truncate max-w-[200px]"
                            >
                                sebastianruizavila47@gmail.com
                            </p>
                        </li>
                    </a>
                </ul>
            </div>

            <div className='bg-white/10 p-4 sm:p-6 rounded-xl mx-[5%] lg:mx-0 lg:max-w-[550px]'>
                <h2
                    title={t('title')}
                    className='text-5xl font-bold truncate text-orange-400 mb-4'
                >
                    {t('title')}
                </h2>
                <p className='text-white/70 font-mono mb-6 text-[14px] sm:text-base'>
                    {t('text')}
                </p>
                <form
                    action="https://getform.io/f/avrydxma"
                    method='POST'
                    className='space-y-4'
                >
                    <div className='flex flex-col md:grid md:grid-cols-2 gap-4'>
                        {
                            Array.isArray(inputs) &&
                            inputs.map((input: InputsTy, i: number) => (
                                <input
                                    key={i}
                                    type={input.type}
                                    name={input.name}
                                    required
                                    className='bg-black/70 font-mono rounded-xl p-3 focus:outline-none 
                                               focus:right-2 focus:ring-orange-400'
                                    placeholder={input.placeholder}
                                />
                            ))
                        }
                    </div>
                    <textarea
                        className='bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:right-2 focus:ring-orange-400'
                        placeholder={t('text_area.placeholder')}
                    />
                    <button
                        className='bg-orange-700 hover:bg-orange-500 text-white px-6 
                        py-2 w-full font-semibold sm:text-xl rounded-xl font-mono'
                    >
                        {t('send_button')}
                    </button>
                </form>
            </div>
        </div>
    )
}