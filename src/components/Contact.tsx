import React from 'react'

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-32 bg-[url('/images/imgi_12_lo1.jpg')] bg-cover bg-fixed bg-center relative">
            <div className="absolute inset-0 bg-black/80"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                        <img src="/images/imgi_12_lo1.jpg" alt="Alfredo's Interior" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-gold p-12 lg:p-16 flex flex-col items-center justify-center text-center rounded-2xl shadow-2xl">
                        <h4 className="text-2xl font-bold text-black mb-10 tracking-widest uppercase">OPENING TIME</h4>
                        <ul className="w-full max-w-sm space-y-4">
                            {[
                                { day: 'MON', time: '17:00 to 23:00' },
                                { day: 'WED', time: '19:00 to 24:00' },
                                { day: 'THU', time: '14:00 to 18:00' },
                                { day: 'FRI', time: '16:00 to 24:00' },
                                { day: 'SAT/SUN', time: '20:00 to 4:00' }
                            ].map((item) => (
                                <li key={item.day} className="flex justify-between items-center py-3 border-b border-black/10 font-medium text-black">
                                    <span className="font-bold">{item.day}</span>
                                    <span>{item.time}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-16 md:p-24 rounded-3xl text-center shadow-2xl">
                    <h5 className="font-miniver text-gold text-3xl mb-6">Appointment</h5>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-[5px] uppercase">make appointment!</h2>
                    <a href="tel:+12123456789" className="inline-block group">
                        <h2 className="text-4xl md:text-6xl font-bold text-white group-hover:text-gold transition-colors duration-300 tracking-tighter">+1 212 345 6789</h2>
                        <div className="h-1 w-0 group-hover:w-full bg-gold transition-all duration-500 mx-auto mt-2"></div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact