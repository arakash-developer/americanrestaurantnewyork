"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-12"
          style={{ fontFamily: "sans-serif" }}
        >
          Our Story
        </motion.p>

        {/* Bento grid */}
        <div className="grid grid-cols-12 grid-rows-[auto] gap-4">
          {/* Card 1 — big headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="col-span-12 md:col-span-7 bg-zinc-900 border border-white/5 rounded-3xl p-10 flex flex-col justify-between min-h-[280px]"
          >
            <h2
              className="text-4xl sm:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Where American Classics
              <br />
              <span className="text-amber-400 italic">Meet Mexican Soul</span>
            </h2>
            <p
              className="text-gray-500 text-base leading-relaxed mt-6 max-w-lg"
              style={{ fontFamily: "sans-serif" }}
            >
              A family-owned corner of the Upper West Side — 1467 Amsterdam Ave
              has been home to hearty breakfasts and soulful Mexican plates since
              day one. Every dish carries the warmth of a home kitchen.
            </p>
          </motion.div>

          {/* Card 2 — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="col-span-12 md:col-span-5 relative rounded-3xl overflow-hidden min-h-[280px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=85&auto=format&fit=crop"
              alt="Restaurant"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span
                className="text-white font-bold text-sm uppercase tracking-widest"
                style={{ fontFamily: "sans-serif" }}
              >
                Upper West Side, NYC
              </span>
            </div>
          </motion.div>

          {/* Card 3 — stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="col-span-6 md:col-span-3 bg-amber-500 rounded-3xl p-8 flex flex-col justify-between"
          >
            <p
              className="text-black/50 text-xs uppercase tracking-widest"
              style={{ fontFamily: "sans-serif" }}
            >
              Open Every Day
            </p>
            <div>
              <p className="text-black text-5xl font-bold leading-none" style={{ fontFamily: "Georgia, serif" }}>
                7
              </p>
              <p
                className="text-black font-bold text-sm uppercase tracking-wider mt-1"
                style={{ fontFamily: "sans-serif" }}
              >
                Days a Week
              </p>
            </div>
          </motion.div>

          {/* Card 4 — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="col-span-6 md:col-span-5 relative rounded-3xl overflow-hidden min-h-[200px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=700&q=85&auto=format&fit=crop"
              alt="Tacos"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, 30vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <span
              className="absolute bottom-5 left-5 text-white font-semibold text-sm"
              style={{ fontFamily: "sans-serif" }}
            >
              Authentic Tacos
            </span>
          </motion.div>

          {/* Card 5 — hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="col-span-12 md:col-span-4 bg-zinc-900 border border-white/5 rounded-3xl p-8 flex flex-col justify-between"
          >
            <p
              className="text-gray-600 text-xs uppercase tracking-widest"
              style={{ fontFamily: "sans-serif" }}
            >
              Hours
            </p>
            <div>
              <p
                className="text-white text-3xl font-bold"
                style={{ fontFamily: "Georgia, serif" }}
              >
                9 AM – 10 PM
              </p>
              <p
                className="text-gray-500 mt-2"
                style={{ fontFamily: "sans-serif" }}
              >
                Monday through Sunday
              </p>
            </div>
            <a
              href="#menu"
              className="mt-6 inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-semibold uppercase tracking-wider transition-colors"
              style={{ fontFamily: "sans-serif" }}
            >
              See Menu →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
