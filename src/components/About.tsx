"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "Daily", label: "Open 7 Days a Week" },
  { value: "9AM", label: "Opens Every Morning" },
  { value: "2+", label: "Cuisine Traditions" },
  { value: "NYC", label: "Upper West Side" },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[560px]"
          >
            {/* Main image */}
            <div className="absolute top-0 left-0 w-[72%] h-[72%] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85&auto=format&fit=crop"
                alt="Restaurant interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Secondary image */}
            <div className="absolute bottom-0 right-0 w-[56%] h-[56%] rounded-2xl overflow-hidden shadow-2xl border-4 border-zinc-950">
              <Image
                src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=85&auto=format&fit=crop"
                alt="Delicious tacos"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 35vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-[56%] right-[44%] translate-x-1/2 translate-y-1/2 z-10 bg-amber-500 text-black rounded-2xl p-4 shadow-xl text-center min-w-[110px]">
              <p className="text-2xl font-bold leading-none">100%</p>
              <p className="text-[10px] font-bold uppercase tracking-wider mt-1">
                Family Made
              </p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-4">
              Our Story
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Where American Classics
              <br />
              <span className="text-amber-400">Meet Mexican Soul</span>
            </h2>
            <div className="w-12 h-0.5 bg-amber-500 mb-8" />
            <p className="text-gray-400 leading-relaxed mb-5">
              Nestled on Amsterdam Avenue in the Upper West Side, we&apos;re a
              family-owned neighborhood gem bringing warmth and flavor to New
              York City every single day.
            </p>
            <p className="text-gray-400 leading-relaxed mb-10">
              We blend hearty American breakfast classics with the vibrant
              traditions of authentic Mexican cuisine — from fluffy pancakes
              dripping with maple syrup to hand-crafted tacos, tamales, and
              chilaquiles, every dish is made with the love of a family kitchen.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-bold text-amber-400">{value}</p>
                  <p className="text-gray-600 text-xs uppercase tracking-wider mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#menu"
                className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm uppercase tracking-widest px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30"
              >
                Explore Menu
              </a>
              <a
                href="#contact"
                className="border border-white/15 hover:border-amber-400/40 text-gray-300 hover:text-amber-400 text-sm uppercase tracking-widest px-7 py-3.5 rounded-full transition-all duration-300"
              >
                Find Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
