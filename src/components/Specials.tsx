"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const dishes = [
  {
    name: "Chilaquiles",
    tag: "Breakfast Hero",
    price: "$12",
    description:
      "Crispy tortilla chips simmered in red or green salsa, topped with crema, queso fresco & onion.",
    image:
      "https://images.unsplash.com/photo-1574484284002-952d92456975?w=900&q=90&auto=format&fit=crop",
  },
  {
    name: "Street Tacos",
    tag: "House Favorite",
    price: "$12",
    description:
      "Chicken, beef, or veggie on warm corn tortillas with fresh cilantro, onion & salsa verde.",
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=900&q=90&auto=format&fit=crop",
  },
  {
    name: "Pancakes",
    tag: "Classic",
    price: "$7",
    description:
      "Three homemade pancakes, golden and fluffy, served with a generous side of maple syrup.",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=900&q=90&auto=format&fit=crop",
  },
];

export default function Specials() {
  return (
    <section className="py-24 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-3"
              style={{ fontFamily: "sans-serif" }}
            >
              Signature Dishes
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold text-white"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Must-Try
              <span className="text-amber-400 italic"> Dishes</span>
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#menu"
            className="text-gray-500 hover:text-amber-400 text-sm uppercase tracking-widest transition-colors"
            style={{ fontFamily: "sans-serif" }}
          >
            Full Menu →
          </motion.a>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.12 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
              style={{ aspectRatio: "3/4" }}
            >
              {/* Image */}
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Tag top-left */}
              <div className="absolute top-5 left-5">
                <span
                  className="bg-amber-500/90 backdrop-blur-sm text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                  style={{ fontFamily: "sans-serif" }}
                >
                  {dish.tag}
                </span>
              </div>

              {/* Price top-right */}
              <div className="absolute top-5 right-5">
                <span
                  className="bg-black/60 backdrop-blur-sm text-white font-bold text-base px-3 py-1.5 rounded-full border border-white/10"
                  style={{ fontFamily: "sans-serif" }}
                >
                  {dish.price}
                </span>
              </div>

              {/* Content bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3
                  className="text-white text-2xl font-bold mb-2 group-hover:text-amber-300 transition-colors duration-300"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {dish.name}
                </h3>
                <p
                  className="text-gray-400 text-sm leading-relaxed translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400"
                  style={{ fontFamily: "sans-serif" }}
                >
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
