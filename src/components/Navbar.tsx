import React, { useState, useEffect } from 'react'

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-8'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="logo">
                    <a href="#" className="hover:text-gold transition-colors" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                        <h1 className="text-2xl font-bold tracking-widest text-white">ALFREDO'S</h1>
                    </a>
                </div>

                <ul className="hidden md:flex space-x-12">
                    {['HOME', 'ABOUT', 'FEATURE', 'MENU', 'CONTACT'].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="text-[11px] font-bold tracking-[3px] text-white hover:text-gold transition-colors"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (item === 'HOME') window.scrollTo({ top: 0, behavior: 'smooth' });
                                    else scrollToSection(item.toLowerCase());
                                }}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
