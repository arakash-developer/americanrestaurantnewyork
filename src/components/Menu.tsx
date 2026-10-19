"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type MenuItem = {
  name: string;
  nameEs?: string;
  price: string;
  description: string;
  image: string;
  tags?: string[];
  popular?: boolean;
};

type Category = {
  id: string;
  label: string;
  emoji: string;
  items: MenuItem[];
};

const menu: Category[] = [
  {
    id: "breakfast",
    label: "Breakfast",
    emoji: "🍳",
    items: [
      {
        name: "Pancakes",
        price: "$7.00",
        description: "Three homemade pancakes served with a side of maple syrup.",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80&auto=format&fit=crop",
        tags: ["Classic", "Homemade"],
        popular: true,
      },
      {
        name: "Huevos a La Mexicana",
        nameEs: "Mexican Style Eggs",
        price: "$12.00",
        description: "Scrambled eggs with fresh tomato, onion & jalapeño. Served with rice, black beans & warm corn tortillas.",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80&auto=format&fit=crop",
        tags: ["Mexican", "Hearty"],
        popular: true,
      },
      {
        name: "Classic American Breakfast",
        price: "$13.00",
        description: "Two eggs your way, choice of bacon or sausage, hash browns, and toast with butter.",
        image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80&auto=format&fit=crop",
        tags: ["Classic"],
      },
      {
        name: "Chilaquiles",
        price: "$12.00",
        description: "Crispy tortilla chips in red or green salsa, topped with crema, queso fresco & onion. Add eggs +$2.",
        image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80&auto=format&fit=crop",
        tags: ["Mexican", "Popular"],
        popular: true,
      },
    ],
  },
  {
    id: "tacos",
    label: "Tacos & More",
    emoji: "🌮",
    items: [
      {
        name: "Quesadillas Beef Steak",
        nameEs: "Quesadillas de Bistek",
        price: "$11.00",
        description: "Grilled beef steak in corn or flour tortilla with lettuce, tomato, onion, sour cream and avocado.",
        image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=600&q=80&auto=format&fit=crop",
        tags: ["Grilled"],
        popular: true,
      },
      {
        name: "Street Tacos (3 pcs)",
        price: "$12.00",
        description: "Chicken, beef, or veggie on warm corn tortillas with cilantro, onion, and salsa verde.",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80&auto=format&fit=crop",
        tags: ["Street-Style"],
      },
      {
        name: "Tamales (2 pcs)",
        price: "$10.00",
        description: "Hand-wrapped masa tamales stuffed with seasoned pork or chicken in red chile sauce, steamed in corn husks.",
        image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=600&q=80&auto=format&fit=crop",
        tags: ["Traditional", "Homemade"],
      },
      {
        name: "Burrito Bowl",
        price: "$13.00",
        description: "Rice, black beans, choice of protein, pico de gallo, guacamole, sour cream & shredded cheese.",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80&auto=format&fit=crop",
        tags: ["Customizable"],
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    emoji: "🥤",
    items: [
      {
        name: "Horchata",
        price: "$4.00",
        description: "Traditional sweet rice drink with cinnamon and vanilla — made fresh in-house.",
        image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80&auto=format&fit=crop",
        tags: ["Homemade", "Classic"],
        popular: true,
      },
      {
        name: "Jamaica (Hibiscus Tea)",
        price: "$4.00",
        description: "Refreshing cold hibiscus flower drink, slightly tart and naturally sweetened.",
        image: "https://images.unsplash.com/photo-1542444256-164bd32461ef?w=600&q=80&auto=format&fit=crop",
        tags: ["Fresh"],
      },
      {
        name: "Fresh-Squeezed OJ",
        price: "$5.00",
        description: "Made to order with fresh oranges. A perfect start to your morning.",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&q=80&auto=format&fit=crop",
        tags: ["Fresh"],
      },
      {
        name: "Coffee",
        price: "$3.00",
        description: "Classic drip coffee or café de olla — brewed with cinnamon and piloncillo.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80&auto=format&fit=crop",
        tags: ["Hot"],
      },
    ],
  },
];

export default function Menu() {
  const [active, setActive] = useState("breakfast");
  const activeCategory = menu.find((c) => c.id === active)!;

  return (
    <section id="menu" className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-4">
            What We Serve
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Menu
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Everything made fresh daily — from sunrise breakfasts to hearty
            Mexican plates.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex justify-center gap-3 flex-wrap mb-12">
          {menu.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                active === cat.id
                  ? "bg-amber-500 text-black shadow-lg shadow-amber-500/30"
                  : "bg-zinc-900 text-gray-400 hover:text-white border border-white/5 hover:border-white/20"
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {activeCategory.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group bg-zinc-900 border border-white/5 hover:border-amber-500/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                  {item.popular && (
                    <span className="absolute top-3 right-3 bg-amber-500 text-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-amber-400 font-bold text-base px-3 py-1 rounded-full">
                    {item.price}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-white font-bold text-base leading-tight mb-1">
                    {item.name}
                  </h3>
                  {item.nameEs && (
                    <p className="text-amber-400/60 text-xs italic mb-2">
                      {item.nameEs}
                    </p>
                  )}
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {item.description}
                  </p>
                  {item.tags && (
                    <div className="flex gap-1.5 flex-wrap mt-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase tracking-wider text-gray-600 border border-white/10 px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 mb-6">
            Dine-in · Takeout · Curbside Pickup · Delivery
          </p>
          <a
            href="https://americanrestaurantnewyork.com/american-restaurant/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm uppercase tracking-widest px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-1"
          >
            Order Online Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
