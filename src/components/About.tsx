import React from 'react'

const About: React.FC = () => {
    return (
        <section id="about" className="py-32 container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 flex gap-5">
                    <div className="flex flex-col gap-5">
                        <div className="rounded-xl overflow-hidden group">
                            <img src="/images/imgi_2_abt1.jpg" alt="" className="w-full transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="rounded-xl overflow-hidden group">
                            <img src="/images/imgi_3_abt2.jpg" alt="" className="w-full transition-transform duration-500 group-hover:scale-110" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 mt-12">
                        <div className="rounded-xl overflow-hidden group">
                            <img src="/images/imgi_4_abt3.jpg" alt="" className="w-full transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="rounded-xl overflow-hidden group">
                            <img src="/images/imgi_5_abt4.jpg" alt="" className="w-full transition-transform duration-500 group-hover:scale-110" />
                        </div>
                    </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                    <h5 className="font-miniver text-gold text-2xl mb-4">About us</h5>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">SPECIALIZED IN SPICY MODERN</h2>
                    <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                        In Western countries, most mid-to high-range restaurants serve alcoholic beverages such as beer and wine.
                        Some restaurants serve all the major meals, such as breakfast, lunch, and dinner.
                    </p>
                    <a href="#menu" className="inline-block bg-gold border border-gold text-white px-10 py-4 font-bold tracking-widest hover:bg-transparent hover:text-gold transition-all duration-300">
                        CHECK MENUS
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About
