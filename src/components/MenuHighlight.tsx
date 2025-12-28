import React from 'react'

const MenuHighlight: React.FC = () => {
    return (
        <section className="py-24 my-24 bg-white/5 backdrop-blur-md border-y border-white/10">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 items-center gap-12 text-center">
                <div className="rounded-xl overflow-hidden h-[400px]">
                    <img src="/images/imgi_6_abt5.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="px-4">
                    <h5 className="font-miniver text-gold text-2xl mb-4">About us</h5>
                    <h2 className="text-4xl font-bold text-white mb-8 tracking-wider">OUR BEST SPECIALTIES</h2>
                    <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                        In Western countries, most mid-to high-range restaurants serve alcoholic beverages such as beer and wine.
                    </p>
                    <a href="#menu" className="inline-block bg-gold border border-gold text-white px-10 py-4 font-bold tracking-widest hover:bg-transparent hover:text-gold transition-all duration-300">
                        CHECK MENUS
                    </a>
                </div>
                <div className="rounded-xl overflow-hidden h-[400px]">
                    <img src="/images/imgi_7_abt6.jpg" alt="" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    )
}

export default MenuHighlight
