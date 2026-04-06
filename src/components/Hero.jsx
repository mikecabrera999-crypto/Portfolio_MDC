
import gitHub from '../assets/github.png';
import instagram from '../assets/instagram.png';
import tiktok from '../assets/tiktok.png';
import facebook from '../assets/facebook.png';
import hero from '../assets/hero.png';
import hi from '../assets/hi.png';
import { Mail } from 'lucide-react';

function Hero({ darkMode = true }) {
    const socialIcons = [
        { icon: gitHub, alt: 'github' },
        { icon: instagram, alt: 'instagram' },
        { icon: tiktok, alt: 'tiktok' },
        { icon: facebook, alt: 'facebook' },
    ];

    const darkTheme = {
        textPrimary: `text-white`,
        textSecondary: `text-gray-300`,
        buttonSecondary: `text-white border-2 border-orange-500 hover:bg-orange-500 
        hover:bg-orange-600`,
        decorativeCircle: `bg-orange-500 opacity-10`
    };

    const lightTheme = {
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-700',
        buttonSecondary: 'text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white',
        decorativeCircle: 'bg-gray-900 opacity-20',
    };

    const theme = darkMode ? darkTheme : lightTheme;

    return (
        <div className='relative overflow-hidden min-h-screen flex flex-col'>
            <section
                id='home'
                data-aos='fade-up'
                data-aos-delay='250'
                className='body-font z-10'>
                <div className='container mx-auto px-4 sm:px-8 lg:px-14 py-12 lg:py-14 flex-col lg:flex-row items-center justify-between lg:mt-14 mt-14'>
                    <div className='lg:w-1/2 w-full flex flex-col items-center lg:text-left mb-12 lg:mb-0'>
                        <div className='flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full'>
                            {socialIcons.map((social, index) => (
                                <a
                                    key={index}
                                    href='#'
                                    target='_blank'
                                    data-aos-delay={`${400 + index * 100}`}
                                    className='transform hover:scale-110 transition-transform duration-300'>
                                    <img
                                        src={social.icon}
                                        alt={social.alt}
                                        className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${darkMode ? '' : 'filter brightness-75'}`} />
                                </a>
                            ))}
                        </div>
                        <h1
                            data-aos='fade-up'
                            data-aos-delay='500'
                            className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}>
                            Hi, I'm Mike Dietrich Cabrera
                        </h1>
                        <p data-aos='fade-up' data-aos-delay='600' className={`mb-8 leading-relaxed text-lg sm:text-xl ${theme.textSecondary}`}>
                            "2nd year student at the Western Institute of Technology"
                        </p>
                        {/* Buttons */}
                        <div className='w-full pt-4 sm:pt-6'>
                            <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4' data-aos='fade-up' data-aos-delay='700'>

                                <a
                                    href='#contact'
                                    className={`w-full sm:w-auto inline-flex items-center ${theme.buttonSecondary}
                                     justify-center border-0 
                                     py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform`}>
                                    <Mail className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />

                                    Contact Me

                                </a>
                            </div>
                        </div>
                        {/*image*/}
                            <div
                            className='lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center'
                            data-aos='fade-left'
                            data-aos-delay='400'>


                            </div>
                                                    
                            <div className='relative w-4/5 sm:w-3/4 lg:w-2/3'>
                                <div className='relative overflow-hidden'>
                                    <img
                                        src={hero}
                                        alt="hero Image"
                                        className='w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500' />

                                </div>
                                    <img
                                    src={hi}
                                    alt="hi icon"
                                    className='absolute top-2 sm:top-4 right-60
                                    sm:right-0 w-20 h-30 sm:w-40 sm:h-40 object-contain
                                    animate-bounce opacity-100 z-10'/>
                                    

                            </div>

                    </div>


                  </div>
                <div className={`absolute top-0 left-0 w-10 h-10
                    sm:w-40 sm:h-40 ${theme.decorativeCircle} rounded-full
                    mix-blend-multiply filter blur-3xl opacity-20
                    animate-pulse delay-1000 hidden sm:block`}>
                    
                </div>
            </section>
        </div>
    );
}

export default Hero;