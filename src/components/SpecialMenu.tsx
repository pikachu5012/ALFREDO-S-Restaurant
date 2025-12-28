import React from 'react'

interface MenuItem {
    name: string;
    desc: string;
    price: string;
}

interface MenuSection {
    img: string;
    title: string;
    items: MenuItem[];
}

const SpecialMenu: React.FC = () => {
    const menuSections: MenuSection[] = [
        {
            img: "/images/imgi_8_fd1.png",
            title: "PIZZAS",
            items: [
                { name: "MARGHERITA", desc: "Tomato sauce, fresh mozzarella, basil, extra virgin olive oil", price: "$18" },
                { name: "QUATTRO FORMAGGI", desc: "Mozzarella, gorgonzola, parmesan, and ricotta cheese", price: "$22" },
                { name: "ALFREDO'S SPECIAL", desc: "Creamy white sauce, grilled chicken, mushrooms, and spinach", price: "$25" },
                { name: "DIAVOLA", desc: "Spicy salami, hot chili peppers, tomato sauce, and mozzarella", price: "$24" }
            ]
        },
        {
            img: "/images/imgi_9_fd2.png",
            title: "PASTAS",
            items: [
                { name: "FETTUCCINE ALFREDO", desc: "Rich creamy parmesan sauce with butter and fresh parsley", price: "$21" },
                { name: "PENNE ALL'ARRABBIATA", desc: "Spicy tomato sauce with garlic and fresh red chili peppers", price: "$19" },
                { name: "SPAGHETTI CARBONARA", desc: "Pecorino cheese, guanciale, and black pepper", price: "$23" },
                { name: "SEAFOOD LINGUINE", desc: "Fresh mussels, clams, shrimp, and calamari in white wine", price: "$28" }
            ]
        },
        {
            img: "/images/imgi_10_fd3.png",
            title: "CALZONES",
            items: [
                { name: "CLASSIC ITALIAN", desc: "Folded pizza stuffed with ricotta, mozzarella, and prosciutto", price: "$20" },
                { name: "VEGGIE CALZONE", desc: "Spinach, mushrooms, roasted peppers, and three cheeses", price: "$19" },
                { name: "MEAT FEAST", desc: "Salami, pepperoni, ham, and mozzarella with marinara", price: "$22" },
                { name: "BUFFALO CHICKEN", desc: "Grilled chicken, buffalo sauce, and blue cheese", price: "$21" }
            ]
        }
    ]

    return (
        <section id="menu" className="py-32 container mx-auto px-6">
            <div className="text-center mb-20">
                <h5 className="font-miniver text-gold text-2xl mb-4">Our Menus</h5>
                <h2 className="text-5xl font-bold text-white tracking-wide uppercase">Special Menus</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {menuSections.map((sec, i) => (
                    <div key={i} className="flex flex-col">
                        <div className="flex items-center gap-6 pb-6 border-b-2 border-dashed border-white/10 mb-10">
                            <img src={sec.img} alt="" className="w-16" />
                            <h3 className="text-2xl font-bold text-white tracking-widest">{sec.title}</h3>
                        </div>
                        <div className="flex flex-col gap-8">
                            {sec.items.map((item, j) => (
                                <div key={j} className="flex justify-between items-start pb-4 border-b border-white/5 group hover:border-gold/30 transition-colors">
                                    <div className="item-details pr-4">
                                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors underline decoration-transparent group-hover:decoration-gold/30 underline-offset-4">{item.name}</h4>
                                        <p className="text-xs text-gray-500 italic leading-relaxed">{item.desc}</p>
                                    </div>
                                    <div className="text-gold font-bold text-xl shrink-0">{item.price}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SpecialMenu
