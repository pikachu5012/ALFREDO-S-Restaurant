import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#050708] pt-24">
            <div className="container mx-auto px-6">
                <div className="text-center pb-16 border-b border-white/5 mb-20 text-white">
                    <h1 className="text-4xl font-bold tracking-[10px] uppercase">ALFREDO'S</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 pb-20">
                    <div className="space-y-8">
                        <p className="text-gray-400 text-lg leading-loose max-w-lg">
                            Experience the finest Italian flavors in a setting of unparalleled elegance. Curated selection of dishes crafted with passion.
                        </p>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white uppercase tracking-widest">Social Connect</h3>
                            <div className="flex gap-4">
                                {['facebook-f', 'twitter', 'youtube'].map((icon) => (
                                    <a key={icon} href="#" className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300 text-white border border-white/10">
                                        <i className={`fa-brands fa-${icon}`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="space-y-10">
                        <h3 className="text-xl font-bold text-white uppercase tracking-widest">Blog Insights</h3>
                        <div className="space-y-8">
                            {[1, 2].map((i) => (
                                <div key={i} className="group cursor-pointer">
                                    <h4 className="text-white text-lg font-bold mb-2 group-hover:text-gold transition-colors tracking-wide">Bringing authentic Italian cuisine to your table</h4>
                                    <span className="text-gold text-sm font-semibold">December 21, 2021</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black py-10 text-center">
                <p className="text-gray-500 text-sm tracking-widest">
                    &copy; {new Date().getFullYear()} copyright by <a href="#" className="text-gold hover:underline">Ahmed Mohammed & Mohamed Anwar</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer