import React from 'react'

const Hero: React.FC = () => {
    return (
        <header id="home" className="relative h-screen flex items-center justify-center text-center bg-[url('/images/imgi_58_d1.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="container relative z-10 mx-auto px-6">
                <h4 className="font-miniver text-gold text-2xl mb-6">Welcome To Our Restaurant</h4>
                <h1 className="text-5xl md:text-8xl font-bold text-white mb-10 tracking-[10px]">THE FOOD HEAVEN</h1>
                <div className="flex justify-center gap-6">
                    <a
                        href="#menu"
                        className="bg-gold border border-gold text-white px-10 py-4 font-bold tracking-widest hover:bg-transparent hover:text-gold transition-all duration-300"
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                            e.preventDefault();
                            const element = document.getElementById('menu');
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
                        }}
                    >
                        CHECK MENUS
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Hero
